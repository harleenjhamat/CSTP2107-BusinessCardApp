import { useState, useEffect } from "react";
import { fabric } from "fabric";
import { Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/client";

import styles from "@/styles/CustomizeYourCard.module.scss";
import { base64ToBlob, readFile } from "@/utility/File";
import { ColorList, ColorArray } from "./../../utility/ColorList";

function CustomCard(props) {
  const [canvasBackgroundColor] = useState(ColorArray);
  const [canvas, setCanvas]: [any, any] = useState();
  const [userTextInput, setUserTextInput] = useState("");
  const [imgData, setimgData] = useState();
  const [fontWeight, setFontWeight] = useState(false);
  const [fontStyle, setFontStyle] = useState(false);
  const [fontFamily, setFontFamily] = useState("arial");
  const [fontColor, setFontColor] = useState("black");
  const [underline, setUnderline] = useState(false);
  const [linethrough, setLinethrough] = useState(false);
  const [overline, setOverline] = useState(false);
  const [textToolDisplay, setTextToolDisplay] = useState("none");
  const [backgroundColorDisplay, setBackgroundColorDisplay] = useState("none");
  const [addTextActive, setAddTextActive] = useState(false);
  const [selectBackgroundColorActive, setSelectBackgroundColorActive] =
    useState(false);
  const [addTextMode, setAddTextMode] = useState(false);
  const [tag, setTag] = useState("");
  const [showLogInMsg, setShowLogInMsg] = useState(false);
  const [canvasLoaded, setcanvasLoaded] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();

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
    if (!canvas) {
      setCanvas(new fabric.Canvas("Canvas", { backgroundColor: "#eee" }));
    }
  }, []);
  setTimeout(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("email") !== null && !canvasLoaded) {
        pullCanvas().then(function (response) {
          // console.log(response[0])
          if (canvas) {
            setCanvas(
              canvas.loadFromJSON(
                response[0].json,
                canvas.renderAll.bind(canvas)
              )
            );
            setcanvasLoaded(true);
          }
        }).catch((err) => {
        });
      }
    }
  }, 1000);

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

  const handleSave = async () => {
    // const canvasJson = canvas.toJSON();
    if (sessionStorage.getItem("email")) {
      // console.log(canvas.toJSON())
      var tempJson = canvas.toJSON();
      for (let index = 0; index < tempJson.objects.length; index++) {
        
            const element = tempJson.objects[index];
            const type = element.type;
            if(type != 'image'){
              continue;
            }
            const source = element.src;
            const image = await fetch(source)
            const imageBlog = await image.blob()
            var reader = new FileReader();
            reader.readAsDataURL(imageBlog); 
            reader.onloadend = function() {
                var base64data = reader.result;                
                tempJson.objects[index].src = base64data
            }
            console.log(tempJson)
            setimgData(tempJson)
      }
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
            console.log("have to log in");
          } else {
            // router.push("/MainPage");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setShowLogInMsg(true);
      setTimeout(() => {
        setShowLogInMsg(false);
      }, 3000);
    }
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
    ) as any;
    let color = backgroundColorInput.value;
    // console.log(color);
    canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
    backgroundColorInput.value = color;
  };

  const handleRemovedSelectedItemOnKeyPress = (e) => {
    if (e.key == "Backspace" || e.key === "Delete") handleRemovedSelectedItem();
  };

  const handleAddImage = () => {
    const addImageInput = document.getElementById("addImageInput");
    addImageInput.click();
  };
  async function xxx(data) {
    const x = await fetch
  }

  const handleImageInput = async (e) => {
    const files = e.target.files;
    if (files.length === 0) return;

    const file = files[0];
    const data = await readFile(file);
    const blob = await base64ToBlob(data);
    // console.log(blob)
    const imageURL = window.URL.createObjectURL(blob);
    // const imageURL = `data:image/png;base64,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`;

    fabric.Image.fromURL(imageURL, function (oImg) {
      oImg.scale(0.5);
      canvas.add(oImg);
    });

    const addImageInput = document.getElementById(
      "addImageInput"
    ) as HTMLInputElement;
    addImageInput.value = null;
  };

  return (
    <>
      <div className={styles.container} id="custom-card-container">
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

          <div className={`row gx-0 align-items-center`}>
            <div className={`col`}>
              <input
                className={`${styles.textInput}`}
                type="text"
                id="myText"
                value={userTextInput}
                onChange={handleUserTextInput}
              />
            </div>
            <div className={`col`}>
              <div
                className={`${styles.normalBtn} btn btn-success`}
                onClick={handleAddTextMode}
              >
                <Icon className="add" />
                Add
              </div>
            </div>
          </div>
        </div>
        <br />

        {showLogInMsg && <h2>Please login first...</h2>}

        {/* Save Card Section */}
        {session && (
          <>
            <div className={`row align-items-center py-0`}>
              <div className={`col-9`}>
                <input
                  type="text"
                  placeholder="Add search tags (ie. job title, company name)"
                  className={`form-control ${styles.saveInput}`}
                  onChange={tagHandle}
                />
              </div>
            </div>
            <div
              className={`${styles.normalBtn} btn btn-success`}
              onClick={handleSave}
            >
              <Icon className="save" />
              Save
            </div>
          </>
        ) || <div className="alert alert-info">You Cannot Save Your Progress without Signing In.</div>}
      </div>
    </>
  );
}

export default CustomCard;
