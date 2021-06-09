import { useState, useEffect } from "react";
import { fabric } from "fabric";

import styles from "@/styles/CustomizeYourCard.module.scss";
import { base64ToBlob, readFile } from "@/utility/File";

function CustomCard(props) {
  const [canvas, setCanvas]: [any, any] = useState();
  // const [canvas2, setCanvas2]: [any, any] = useState();
  const [userTextInput, setUserTextInput] = useState("");
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontFamily, setFontFamily] = useState("arial");
  const [fontColor, setFontColor] = useState("black");
  const [underline, setUnderline] = useState(false);
  const [linethrough, setLinethrough] = useState(false);
  const [overline, setOverline] = useState(false);

  useEffect(() => {
    if (!canvas)
      setCanvas(new fabric.Canvas("Canvas", { backgroundColor: "#eee" }));
    // if (!canvas2)
    //   setCanvas2(new fabric.Canvas("Canvas2", { backgroundColor: "#eee" }));
  }, []);

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.value);
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleUnderlineChange = (e) => {
    setUnderline(e.target.checked);
  };

  const handleLinethroughChange = (e) => {
    setLinethrough(e.target.checked);
  };

  const handleOverlineChange = (e) => {
    setOverline(e.target.checked);
  };

  const handleUserTextInput = (e) => {
    setUserTextInput(e.target.value);
  };

  const handleAddText = () => {
    if (userTextInput == "") return;

    const textOptions = {
      left: 10,
      top: 10,
      fontWeight,
      fontStyle,
      fontFamily,
      fill: fontColor,
      underline,
      linethrough,
      overline,
    };

    const newTextObj = new fabric.Text(userTextInput, textOptions);
    canvas.add(newTextObj);

    setUserTextInput("");
  };

  const handleSave = () => {
    const canvasJson = canvas.toJSON();
    // canvas2.loadFromJSON(canvasJson);
    console.log(canvasJson);
  };

  const handleRemovedSelectedItem = () => {
    canvas.remove(canvas.getActiveObject());
  };

  // const handleRemovedSelectedItem2 = () => {
  //   canvas2.remove(canvas2.getActiveObject());
  // };

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
        <h2>Your Card</h2>

        <div className={styles.card_canvas_container}>
          <canvas
            className={styles.card_canvas}
            id="Canvas"
            width="450"
            height="250"
          ></canvas>
        </div>

        <div className={`d-flex justify-content-center`}>
          <button
            className={styles.savebtn}
            onClick={handleRemovedSelectedItem}
          >
            Remove Item
          </button>
        </div>

        <h2>Customize</h2>

        <div className={styles.customized_card_form}>
          <div>
            <input
              type="text"
              id="myText"
              value={userTextInput}
              onChange={handleUserTextInput}
            />
            <button onClick={handleAddText}>Add text</button>
          </div>

          <div className={`row`}>
            <div className={`col`}>
              <div>
                <label htmlFor="fontWeight">Font Weight:</label>
                <select
                  name="fontWeight"
                  id="fontWeight"
                  onChange={handleFontWeightChange}
                >
                  <option value="normal">normal</option>
                  <option value="bold">bold</option>
                </select>
              </div>

              <div>
                <label htmlFor="fontFamily">Font Family:</label>
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
            <div className={`col`}>
              <div>
                <label htmlFor="fontStyle">Font Style:</label>
                <select
                  name="fontStyle"
                  id="fontStyle"
                  onChange={handleFontStyleChange}
                >
                  <option value="normal">normal</option>
                  <option value="italic">italic</option>
                </select>
              </div>

              <div>
                <label htmlFor="fontColor">Font Color:</label>
                <select
                  name="fontColor"
                  id="fontColor"
                  onChange={handleFontColorChange}
                >
                  <option value="black">black</option>
                  <option value="green">green</option>
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                </select>
              </div>
            </div>
          </div>

          {/* checkboxes */}
          <div className={`row`}>
            <div className={`col`}>
              <input
                type="checkbox"
                id="underlineOn"
                name="underline"
                value="on"
                onChange={handleUnderlineChange}
              />
              <label htmlFor="underline">Underline</label>
            </div>

            <div className={`col`}>
              <input
                type="checkbox"
                id="linethroughOn"
                name="linethrough"
                value="on"
                onChange={handleLinethroughChange}
              />
              <label htmlFor="linethrough">Linethrough</label>
            </div>

            <div className={`col`}>
              <input
                type="checkbox"
                id="overlineOn"
                name="overline"
                value="on"
                onChange={handleOverlineChange}
              />
              <label htmlFor="overline">Overline</label>
            </div>
          </div>

          <hr />

          <div>
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
                Add Image
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className={`d-flex justify-content-center`}>
          <button onClick={handleSave}>Save Card</button>
        </div>

        {/* ---------------------------------------testing code------------------------------------- */}
        {/* <h2>Saved Card (for testing)</h2>
        <div className={styles.card_canvas_container}>
          <canvas
            className={styles.card_canvas}
            id="Canvas2"
            width="450"
            height="250"
          ></canvas>
        </div>

        <div>
          <button
            className={styles.savebtn}
            onClick={handleRemovedSelectedItem2}
          >
            Remove Selected Item
          </button>
        </div> */}
      </div>
    </>
  );
}

export default CustomCard;
