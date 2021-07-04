import { useState, useEffect } from "react";
import { fabric } from "fabric";
import { Icon } from "semantic-ui-react";

import styles from "@/styles/CustomizeYourCard.module.scss";
import { base64ToBlob, readFile } from "@/utility/File";

function CustomCard(props) {
  const [canvas, setCanvas]: [any, any] = useState();
  const [userTextInput, setUserTextInput] = useState("");
  const [fontWeight, setFontWeight] = useState(false);
  const [fontStyle, setFontStyle] = useState(false);
  const [fontFamily, setFontFamily] = useState("arial");
  const [fontColor, setFontColor] = useState("black");
  const [underline, setUnderline] = useState(false);
  const [linethrough, setLinethrough] = useState(false);
  const [overline, setOverline] = useState(false);
  const [textToolDisplay, setTextToolDisplay] = useState("none");
  const [addTextActive, setAddTextActive] = useState(false);
  const [addTextMode, setAddTextMode] = useState(false);

  useEffect(() => {
    if (!canvas)
      setCanvas(new fabric.Canvas("Canvas", { backgroundColor: "#eee" }));
  }, []);

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
  };

  const handleAddTextMode = () => {
    setAddTextMode(true);
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

  const handleSave = () => {
    const canvasJson = canvas.toJSON();
    const sendObject = {
      json: canvas.toJSON(),
      name: JSON.parse(sessionStorage.getItem("name")),
      email: JSON.parse(sessionStorage.getItem("email")),
      img: canvas.toDataURL("png"),
      sharedcode: Math.random(),
      create_new_card:"yes"
    };
    const sendObjectStr = JSON.stringify(sendObject);

    fetch("http://localhost:3000/api/usercards?=", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendObjectStr,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRemovedSelectedItem = () => {
    if (canvas.getActiveObject()._objects) {
      const selectedObjects = canvas.getActiveObject()._objects;
      selectedObjects.forEach((obj) => canvas.remove(obj));
    } else {
      canvas.remove(canvas.getActiveObject());
    }
  };

  const handleRemovedSelectedItemOnKeyPress = (e) => {
    console.log(e);
    if (e.key == "Backspace" || e.key === "Delete") handleRemovedSelectedItem();
  };

  const handleAddImage = () => {
    const addImageInput = document.getElementById("addImageInput");
    addImageInput.click();
  };
 
  const handleImageInput = async (e) => {
    const files = e.target.files;
    if (files.length === 0) return;

    const file = files[0];
    const data = await readFile(file);
    const blob = await base64ToBlob(data);
    const imageURL = window.URL.createObjectURL(blob);

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

        {/* add text, image, remove item */}
        <div className={`row justify-content-center align-middle my-2`}>
          <div className={`col-5 col-md-4 my-2`}>
            <button
              className={`${addTextActive ? styles.btnActive : ""}`}
              onClick={handleToggleTextDisplay}
            >
              <Icon name="font" />
              Text
            </button>
          </div>

          <div className={`col-5 col-md-4 my-2`}>
            <input
              accept="image/*"
              id="addImageInput"
              name="addImageInput"
              onChange={handleImageInput}
              style={{ display: "none" }}
              type="file"
            />
            <div>
              <button id="addImageButton" onClick={handleAddImage}>
                <Icon name="file image" />
                Image
              </button>
            </div>
          </div>

          <div className={`col-5 col-md-4 my-2`}>
            <button
              className={styles.trashButton}
              onClick={handleRemovedSelectedItem}
            >
              <Icon name="trash" />
              Delete
            </button>
          </div>
        </div>

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

        {addTextMode && userTextInput !== "" && (
          <div className={`alert alert-info ${styles.hintText}`}>
            click on the canvas
          </div>
        )}

        <div
          className={`${styles.customized_card_form} ${textToolDisplay == "none" ? styles.display : '' }`}
          // style={{ display: `${textToolDisplay}` }}
        >
          <div className={`row my-3 justify-content-center`}>
            <div className={`col mb-3`}>
              <div
                className={`${fontWeight == true ? styles.toolActive : ""} col`}
                onClick={handleFontWeightChange}
              >
                <Icon name="bold" />
              </div>
            </div>
            <div className={`col`}>
              <div
                className={`${fontStyle == true ? styles.toolActive : ""} col`}
                onClick={handleFontStyleChange}
              >
                <Icon name="italic" />
              </div>
            </div>
            <div className={`col`}>
              <div
                className={`${underline == true ? styles.toolActive : ""} col`}
                onClick={handleUnderlineChange}
              >
                <Icon name="underline" />
              </div>
            </div>
            <div className={`col`}>
              <div
                className={`${
                  linethrough == true ? styles.toolActive : ""
                } col`}
                onClick={handleLinethroughChange}
              >
                <Icon name="strikethrough" />
              </div>
            </div>
            <div className={`col`}>
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

            <div className={`col`}>
              <input
                name="fontColor"
                id="fontColor"
                onChange={handleFontColorChange}
                type="color"
              ></input>
            </div>

            <div className={`col-4 col-md-4`}>
              <select
                name="fontFamily"
                id="fontFamily"
                onChange={handleFontFamilyChange}
              >
                <option value="arial">arial</option>
                <option value="courier">courier</option>
                <option value="times">times</option>
                <option value="verdana">verdana</option>
              </select>
            </div>
          </div>
          
          <div className={`row justify-content-center`}>
            <input
              className={`col-7 ${styles.textInput}`}
              type="text"
              id="myText"
              value={userTextInput}
              onChange={handleUserTextInput}
            />
            <button className={`col-3`} onClick={handleAddTextMode}>
              <Icon name="plus circle" /> Add Text
            </button>
          </div>
        </div>
        <br />

        <div className={`d-flex justify-content-center py-2`}>
          <button className={styles.saveBtn} onClick={handleSave}>
            <Icon name="save" />
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
