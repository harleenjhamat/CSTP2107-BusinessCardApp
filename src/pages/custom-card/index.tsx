import { useState, useEffect } from "react";
import { fabric } from "fabric";
import { Button, Icon } from "semantic-ui-react";

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
  };

  const handleAddText = () => {
    if (userTextInput == "") return;

    const textOptions = {
      left: 10,
      top: 10,
      fontWeight: fontWeight ? "bold" : "normal",
      fontStyle: fontStyle ? "italic" : "normal",
      fontFamily,
      fill: fontColor,
      underline,
      linethrough,
      overline,
    };

    const newTextObj = new fabric.Text(userTextInput, textOptions);
    canvas.add(newTextObj);

    setUserTextInput("");
    // handleToggleTextDisplay();
  };

  const handleSave = () => {
    const canvasJson = canvas.toJSON();
    const sendObject = {
      json: canvas.toJSON(),
      user: JSON.parse(sessionStorage.getItem("user")),
      img: canvas.toDataURL("png"),
      sharedcode: Math.random().toString(),
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
    canvas.remove(canvas.getActiveObject());
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
      <div className={styles.container}>
        <h2>Customize Your Card</h2>

        <div
          className={styles.card_canvas_container}
          onKeyDownCapture={handleRemovedSelectedItemOnKeyPress}
          tabIndex="0"
        >
          <canvas
            className={styles.card_canvas}
            id="Canvas"
            width="450"
            height="250"
          ></canvas>
        </div>

        {/* add text, image, remove item */}
        <div className={`d-flex justify-content-center my-2`}>
          <div className={`mx-2`}>
            <Button color="blue" onClick={handleToggleTextDisplay}>
              <Icon name="font" />
            </Button>
          </div>

          <div className={`mx-2`}>
            <input
              accept="image/*"
              id="addImageInput"
              name="addImageInput"
              onChange={handleImageInput}
              style={{ display: "none" }}
              type="file"
            />
            <div>
              <Button color="blue" id="addImageButton" onClick={handleAddImage}>
                <Button.Content>
                  <Icon name="image" />
                </Button.Content>
              </Button>
            </div>
          </div>

          <div className={`mx-2`}>
            <Button
              color="red"
              className={styles.savebtn}
              onClick={handleRemovedSelectedItem}
            >
              <Button.Content>
                <Icon name="trash alternate" />
              </Button.Content>
            </Button>
          </div>
        </div>

        <div
          className={styles.customized_card_form}
          style={{ display: `${textToolDisplay}` }}
        >
          <div className={`row my-3`}>
            <div className={`${fontWeight == false ? styles.btn : ""} col`}>
              <div
                className={`${fontWeight == true ? styles.btnActive : ""} col`}
                onClick={handleFontWeightChange}
              >
                <Icon name="bold" />
              </div>
            </div>
            <div className={`${fontStyle == false ? styles.btn : ""} col`}>
              <div
                className={`${fontStyle == true ? styles.btnActive : ""} col`}
                onClick={handleFontStyleChange}
              >
                <Icon name="italic" />
              </div>
            </div>
            <div className={`${underline == false ? styles.btn : ""} col`}>
              <div
                className={`${underline == true ? styles.btnActive : ""} col`}
                onClick={handleUnderlineChange}
              >
                <Icon name="underline" />
              </div>
            </div>
            <div className={`${linethrough == false ? styles.btn : ""} col`}>
              <div
                className={`${linethrough == true ? styles.btnActive : ""} col`}
                onClick={handleLinethroughChange}
              >
                <Icon name="strikethrough" />
              </div>
            </div>
            <div className={`${overline == false ? styles.btn : ""} col`}>
              <div
                className={`${overline == true ? styles.btnActive : ""} col`}
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

            <div className={`col`}>
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
              className={`col-8 ${styles.textInput}`}
              type="text"
              id="myText"
              value={userTextInput}
              onChange={handleUserTextInput}
            />
            <button className={`col-3`} onClick={handleAddText}>
              <Icon name="plus circle" /> Add Text
            </button>
          </div>
        </div>
        <br />

        <div className={`d-flex justify-content-center`}>
          <button onClick={handleSave}>
            <Icon name="save" />
            Save Card
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
