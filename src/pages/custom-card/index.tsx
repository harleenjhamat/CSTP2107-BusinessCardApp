import { useState, useEffect } from "react";
import { fabric } from "fabric";

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
    handleToggleTextDisplay();
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

  const handleRemovedSelectedItemOnKeyPress = (e)=>{
    console.log(e);
    if(e.key == "Backspace" || e.key === "Delete")
      handleRemovedSelectedItem();
  }

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

        <div className={styles.card_canvas_container}
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
            <button
              onClick={handleToggleTextDisplay}
            >
              Text
            </button>
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
              <button id="addImageButton" onClick={handleAddImage}>
                Image
              </button>
            </div>
          </div>

          <div className={`mx-2`}>
            <button
              className={styles.savebtn}
              onClick={handleRemovedSelectedItem}
            >
              Remove Item
            </button>
          </div>
        </div>

        <div
          className={styles.customized_card_form}
          style={{ display: `${textToolDisplay}` }}
        >
          <div className={`row my-2`}>
            <div
              className={`${fontWeight == true ? styles.btnActive : ""} col`}
              onClick={handleFontWeightChange}
            >
              Bold
            </div>
            <div
              className={`${fontStyle == true ? styles.btnActive : ""} col`}
              onClick={handleFontStyleChange}
            >
              Italic
            </div>
            <div
              className={`${underline == true ? styles.btnActive : ""} col`}
              onClick={handleUnderlineChange}
            >
              Underline
            </div>
            <div
              className={`${linethrough == true ? styles.btnActive : ""} col`}
              onClick={handleLinethroughChange}
            >
              Linethrough
            </div>
            <div
              className={`${overline == true ? styles.btnActive : ""} col`}
              onClick={handleOverlineChange}
            >
              Overline
            </div>

            <div className={`col`}>
              {/* <label htmlFor="fontColor">Font Color</label> */}
              <input
                name="fontColor"
                id="fontColor"
                onChange={handleFontColorChange}
                type="color"
              ></input>
            </div>

            <div className={`col`}>
              {/* <label htmlFor="fontFamily">Font Family:</label> */}
              <select
                name="fontFamily"
                id="fontFamily"
                onChange={handleFontFamilyChange}
              >
                <option value="arial">arial</option>
                <option value="courier">courier</option>
                <option value="times">times</option>
              </select>
            </div>
          </div>

          <div className={`row justify-content-center`}>
            <input
              className={`col-8`}
              type="text"
              id="myText"
              value={userTextInput}
              onChange={handleUserTextInput}
            />
            <button className={`col-3`} onClick={handleAddText}>
              Add text
            </button>
          </div>
        </div>
        <br />

        <div className={`d-flex justify-content-center`}>
          <button onClick={handleSave}>Save Card</button>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
