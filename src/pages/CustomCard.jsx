/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-08-01 20:05:05
 * @ Description: User can customize their business card in this page. 
 *  User can add texts, images, changing background colors etc. 
 *  In additions, user can add tags to their business card. 
 */

import { useState, useEffect } from 'react'
import { fabric } from 'fabric'
import { Icon } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/client'

import styles from '@/styles/CustomizeYourCard.module.scss'
import { base64ToBlob, readFile } from '@/utility/File'
import { ColorList, ColorArray } from '../utility/ColorList'

function CustomCard () {
  const [canvasBackgroundColor] = useState(ColorArray)
  const [canvas, setCanvas] = useState()
  const [userTextInput, setUserTextInput] = useState('')
  const [imgData, setimgData] = useState()
  const [fontWeight, setFontWeight] = useState(false)
  const [fontStyle, setFontStyle] = useState(false)
  const [fontFamily, setFontFamily] = useState('arial')
  const [fontColor, setFontColor] = useState('black')
  const [underline, setUnderline] = useState(false)
  const [linethrough, setLinethrough] = useState(false)
  const [overline, setOverline] = useState(false)
  const [textToolDisplay, setTextToolDisplay] = useState('none')
  const [backgroundColorDisplay, setBackgroundColorDisplay] = useState('none')
  const [addTextActive, setAddTextActive] = useState(false)
  const [
    selectBackgroundColorActive,
    setSelectBackgroundColorActive
  ] = useState(false)
  const [addTextMode, setAddTextMode] = useState(false)
  const [tag, setTag] = useState('')
  const [canvasLoaded, setcanvasLoaded] = useState(false)
  const [session, loading] = useSession()
  const router = useRouter()

  // GETTING user's card to edit it, setting canvas to data:
  const pullCanvas = async () => {
    const sendObject = {
      get_personal_card: JSON.parse(sessionStorage.getItem("email")),
    };
    const sendObjectStr = JSON.stringify(sendObject);

    const responsex = await fetch("http://localhost:3000/api/usercards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendObjectStr,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
    return responsex;
  };

  useEffect(() => {
    // no canvas means that user did not create his/her card:
    if (!canvas) {
      setCanvas(new fabric.Canvas('Canvas', { backgroundColor: '#eee' }))
    } else{
      // when a user has a card:
      if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('email') !== null && !canvasLoaded) {
          pullCanvas()
            .then(async function (response) {
              if (canvas) {
                setTag(response[0].tag);
                setCanvas(
                  canvas.loadFromJSON(
                    response[0].json,
                    canvas.renderAll.bind(canvas)
                  )
                );
                setcanvasLoaded(true);
              }
            })
            .catch((err) => {});
        }
      }
    }
  }, [canvas]);

  // SAVING card in DB:
  useEffect(() => {
    if (sessionStorage.getItem("email") && imgData) {
      const sendObject = {
        json: imgData,
        name: JSON.parse(sessionStorage.getItem("name")),
        email: JSON.parse(sessionStorage.getItem("email")),
        img: canvas.toDataURL("png"),
        sharedcode: Math.random(),
        create_new_card: "yes",
        tag: tag,
      };
      const sendObjectStr = JSON.stringify(sendObject);
      fetch("http://localhost:3000/api/usercards?=", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendObjectStr,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.email === null) {
          } else {
            router.push("/MainPage");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [imgData])
  // Saving the card 
  const handleSave = async () => {
    var tempJson = canvas.toJSON()
    sessionStorage.setItem('counter', tempJson.objects.length)
    // going through canvas and re-whiting json imgs to binary for DB storing
    for (let index = 0; index < tempJson.objects.length; index++) {
      const element = tempJson.objects[index];
      const type = element.type;
      if (type != "image") {
        sessionStorage.setItem(
          "counter",
          sessionStorage.getItem("counter") - 1
        );
        if (sessionStorage.getItem("counter") == 0) {
          setimgData(tempJson);
        }
        continue;
      }
      const source = element.src;
      const image = await fetch(source);
      const imageBlob = await image.blob();
      var reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = function () {
        var base64data = reader.result
        tempJson.objects[index].src = base64data
        sessionStorage.setItem('counter', sessionStorage.getItem('counter') - 1)
        if (sessionStorage.getItem('counter') == 0) {
          // Saving result:
          setimgData(tempJson)
        }
      };
    }
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(!fontWeight);
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(!fontStyle);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleUnderlineChange = (e) => {
    setUnderline(!underline);
  };

  const handleLinethroughChange = (e) => {
    setLinethrough(!linethrough);
  };

  const handleOverlineChange = (e) => {
    setOverline(!overline);
  };

  const handleUserTextInput = (e) => {
    setUserTextInput(e.target.value);
  };

  const handleToggleTextDisplay = () => {
    const displayState = textToolDisplay === "none" ? "block" : "none";
    setTextToolDisplay(displayState);
    setAddTextActive(!addTextActive);

    if (textToolDisplay === "none") {
      setBackgroundColorDisplay("none");
      setSelectBackgroundColorActive(false);
    }
  };

  const handleToggleBackgroundColorDisplay = () => {
    const displayState = backgroundColorDisplay === "none" ? "block" : "none";
    setBackgroundColorDisplay(displayState);
    setSelectBackgroundColorActive(!selectBackgroundColorActive);

    if (backgroundColorDisplay === "none") {
      setTextToolDisplay("none");
      setAddTextActive(false);
    }
  };

  const handleAddTextMode = () => {
    setAddTextMode(true);
  };

  const tagHandle = (e) => {
    setTag(e.target.value);
  };

  const handleAddText = (e) => {
    if (addTextMode === false) return;

    var rect = e.target.getBoundingClientRect();
    let x, y;
    if (e.type === "click") {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    } else {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    }

    const textOptions = {
      left: x,
      top: y,
      fontWeight: fontWeight ? "bold" : "normal",
      fontStyle: fontStyle ? "italic" : "normal",
      fontFamily,
      fill: fontColor,
      underline,
      linethrough,
      overline,
      selectable: true,
    };

    const newTextObj = new fabric.IText(userTextInput, textOptions);
    canvas.add(newTextObj);

    setUserTextInput("");
    setAddTextMode(false);
  };

  const handleRemovedSelectedItem = () => {
    if (canvas.getActiveObject()?._objects) {
      const selectedObjects = canvas.getActiveObject()._objects;
      selectedObjects.forEach((obj) => canvas.remove(obj));
    } else if (canvas.getActiveObject()) {
      canvas.remove(canvas.getActiveObject());
    }
  };

  const handleBringToFront = () => {
    canvas.getActiveObject()?.bringToFront();
    canvas.discardActiveObject();
  };

  const handleSendToBack = () => {
    canvas.getActiveObject()?.sendToBack();
    canvas.discardActiveObject();
  };

  const handleCanvasBackgroundColor = (e) => {
    let classList = e.target.className;
    let color = canvasBackgroundColor.find((c) => classList.indexOf(c) !== -1);
    if (!color) return;
    canvas.setBackgroundColor(ColorList[color], canvas.renderAll.bind(canvas));
  };

  const handleCustomBackgroundColor = (e) => {
    let backgroundColorInput = document.getElementById(
      "cardCustomBackgroundColor"
    );
    let color = backgroundColorInput.value;
    canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
    backgroundColorInput.value = color;
  };

  const handleRemovedSelectedItemOnKeyPress = (e) => {
    if (e.key == "Backspace" || e.key === "Delete") handleRemovedSelectedItem();
  };

  const handleAddImage = () => {
    const addImageInput = document.getElementById('addImageInput')
    addImageInput.click()
  }
  // User can add an img to canvas:
  const handleImageInput = async e => {
    const files = e.target.files
    if (files.length === 0) return

    const file = files[0];
    const data = await readFile(file);
    const blob = await base64ToBlob(data);
    const imageURL = window.URL.createObjectURL(blob);

    fabric.Image.fromURL(imageURL, function (oImg) {
      oImg.scale(0.5);
      canvas.add(oImg);
    });

    const addImageInput = document.getElementById("addImageInput");
    addImageInput.value = null;
  };
  const defaultPlaceholder = (e) => {
    e.currentTarget.value = tag;
  };

  return (
    <>
      <div className={styles.container} id='CustomCard-container'>
        <h2>Customize Your Card</h2>

        {/* add text, image, backgroundColor, bring-to-front, send-to-back, remove item */}
        <div className={`d-flex justify-content-center pt-2 flex-wrap`}>
          <div className={`${styles.buttonDiv} mx-2 text-center`}>
            <button
              className={`${addTextActive ? styles.btnActive : ""}`}
              onClick={handleToggleTextDisplay}
            >
              <Icon name="font" />
            </button>
            <span className={styles.tooltiptext}>Text</span>
          </div>

          <div className={` mx-2 text-center`}>
            <input
              accept="image/*"
              id="addImageInput"
              name="addImageInput"
              onChange={handleImageInput}
              style={{ display: "none" }}
              type="file"
            />
            <div className={`${styles.buttonDiv} `}>
              <button id="addImageButton" onClick={handleAddImage}>
                <Icon name="file image" />
              </button>
              <span className={styles.tooltiptext}>Image</span>
            </div>
          </div>

          <div className={`${styles.buttonDiv}  mx-2 text-center`}>
            <button
              className={`${
                selectBackgroundColorActive ? styles.btnActive : ""
              } `}
              onClick={handleToggleBackgroundColorDisplay}
            >
              <Icon name="address card" />
            </button>
            <span className={styles.tooltiptext}>Card Colors</span>
          </div>

          <div className={`${styles.buttonDiv} mx-2 text-center`}>
            <button onClick={handleBringToFront}>
              <Icon name="arrow up" />
            </button>
            <span className={styles.tooltiptext}>Bring Front</span>
          </div>

          <div className={`${styles.buttonDiv} mx-2 text-center`}>
            <button onClick={handleSendToBack}>
              <Icon name="arrow down" />
            </button>
            <span className={styles.tooltiptext}>Send Back</span>
          </div>

          <div className={`${styles.buttonDiv} mx-2 text-center`}>
            <button
              className={styles.trashButton}
              onClick={handleRemovedSelectedItem}
            >
              <Icon className="inverted trash alternate" />
            </button>
            <span className={styles.tooltiptext}>Delete</span>
          </div>
        </div>

        {/* Card Canvas */}
        <div
          className={styles.card_canvas_container}
          onKeyDownCapture={handleRemovedSelectedItemOnKeyPress}
          onClick={handleAddText}
          onTouchStart={handleAddText}
          id="CanvasDiv"
          tabIndex="0"
        >
          <canvas
            className={styles.card_canvas}
            id="Canvas"
            width="450"
            height="250"
          ></canvas>
        </div>

        {/* Card Color Background Tool Div */}
        <div
          className={`${styles.customized_card_form} ${
            backgroundColorDisplay == "none" ? "" : styles.display
          }`}
        >
          <div className={`d-flex justify-content-center flex-wrap`}>
            {canvasBackgroundColor.map((color) => (
              <div
                className={`col my-3 ${styles.backgroundColorList}`}
                onClick={handleCanvasBackgroundColor}
              >
                <Icon
                  name="id card"
                  className={`circular large ${
                    color === "white" ? `${color}` : `${color} inverted`
                  } icon`}
                ></Icon>
                <span className={styles.colorText}>{color}</span>
              </div>
            ))}
            <div
              className={`col my-3 white ${styles.customBackgroundColorDiv}`}
            >
              <div>
                <input
                  type="color"
                  id="cardCustomBackgroundColor"
                  name="cardCustomBackgroundColor"
                  onChange={handleCustomBackgroundColor}
                ></input>
              </div>
              <span className={styles.colorText}>Custom</span>
            </div>
          </div>
        </div>

        {/* Add Text Popup Message */}
        {addTextMode && userTextInput !== "" && (
          <div className={`alert alert-info ${styles.hintText}`}>
            <div>click on the canvas</div>
          </div>
        )}

        {/* Text Tool Div */}
        <div
          className={`${styles.customized_card_form} ${
            textToolDisplay == "none" ? "" : styles.display
          }`}
        >
          <div className={`d-flex my-3 justify-content-center flex-wrap`}>
            <div className={`col mx-1 mb-3`}>
              <div
                className={`${fontWeight == true ? styles.toolActive : ""} col`}
                onClick={handleFontWeightChange}
              >
                <Icon name="bold" />
              </div>
            </div>
            <div className={`col mx-1`}>
              <div
                className={`${fontStyle == true ? styles.toolActive : ""} col`}
                onClick={handleFontStyleChange}
              >
                <Icon name="italic" />
              </div>
            </div>
            <div className={`col mx-1`}>
              <div
                className={`${underline == true ? styles.toolActive : ""} col`}
                onClick={handleUnderlineChange}
              >
                <Icon name="underline" />
              </div>
            </div>
            <div className={`col mx-1`}>
              <div
                className={`${
                  linethrough == true ? styles.toolActive : ""
                } col`}
                onClick={handleLinethroughChange}
              >
                <Icon name="strikethrough" />
              </div>
            </div>
            <div className={`col mx-1`}>
              <div
                className={`${overline == true ? styles.toolActive : ""} col`}
                onClick={handleOverlineChange}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="mdi-format-overline"
                  width="20"
                  height="18"
                  viewBox="3 2 26 26"
                >
                  <path d="M5,5H19V3H5V5M9.62,16L12,9.67L14.37,16M11,7L5.5,21H7.75L8.87,18H15.12L16.25,21H18.5L13,7H11Z" />
                </svg>
              </div>
            </div>

            <div className={`col mx-1`}>
              <input
                name="fontColor"
                id="fontColor"
                onChange={handleFontColorChange}
                type="color"
              ></input>
            </div>

            <div className={`col-4 mx-1 col-md-4`}>
              <select
                name="fontFamily"
                id="fontFamily"
                onChange={handleFontFamilyChange}
              >
                <option value="arial">Arial</option>
                <option value="courier">Courier</option>
                <option value="times">Times</option>
                <option value="verdana">Verdana</option>
              </select>
            </div>
          </div>

          <div className={`row gx-0 align-items-center justify-content-center`}>
            <div className={`col`}>
              <input
                className={`${styles.textInput}`}
                type="text"
                id="myText"
                value={userTextInput}
                onChange={handleUserTextInput}
              />
            </div>
          </div>
          <div className={`row gx-0 align-items-center justify-content-center`}>
            <div className={`col-4`}>
              <div
                className={`${styles.normalBtn}`}
                onClick={handleAddTextMode}
              >
                <Icon className="add" />
                Add
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Save Card Section */}
        {(session && (
          <>
            <div className={`row align-items-center py-0`}>
              <div className={`col-9`}>
                <input
                  type="text"
                  placeholder="Add search tags (ie. job title, company name)"
                  className={`form-control ${styles.saveInput}`}
                  onChange={tagHandle}
                  onFocus={defaultPlaceholder}
                />
              </div>
            </div>
            <div className={`${styles.normalBtn}`} onClick={handleSave}>
              <Icon className="save" />
              Save
            </div>
          </>
        )) || (
          <div className="alert alert-info">
            You Cannot Save Your Progress without Signing In.
          </div>
        )}
      </div>
    </>
  );
}

export default CustomCard;
