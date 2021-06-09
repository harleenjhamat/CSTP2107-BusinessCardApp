import { useState, useEffect } from "react";
import { fabric } from "fabric";

import styles from "@/styles/CustomizeYourCard.module.scss";

function CustomCard(props) {
  const [canvas, setCanvas]: [any, any] = useState();
  const [canvas2, setCanvas2]: [any, any] = useState();
  const [items, setItems] = useState([]);
  const [itemID, setItemID] = useState(0);
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
    if (!canvas2)
      setCanvas2(
        new fabric.StaticCanvas("Canvas2", { backgroundColor: "#eee" })
      );
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

    const newItemID = itemID + 1;
    const newTextObj = new fabric.Text(userTextInput, textOptions);
    newTextObj.itemID = newItemID;
    const newItems = [...items, newTextObj];
    canvas.add(newTextObj);

    const canvasItemContainer = document.getElementById("canvasItemContainer");
    const canvasItemDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    const userText = document.createElement("span");

    canvasItemDiv.setAttribute("itemID", String(newItemID));
    deleteButton.setAttribute("itemID", String(newItemID));

    userText.innerText = userTextInput;
    deleteButton.innerText = "Delete";

    canvasItemDiv.appendChild(userText);
    canvasItemDiv.appendChild(deleteButton);
    canvasItemContainer.appendChild(canvasItemDiv);

    setItemID(newItemID);
    setItems(newItems);
    setUserTextInput("");
  };

  const removeItemByID = (e) => {
    const buttonID = parseInt(e.target.getAttribute("itemid"));
    const itemToDelete = items.find((item) => item.itemID == buttonID);
    canvas.remove(itemToDelete);

    const itemDivToDelete = document.querySelector(`[itemid='${buttonID}']`);
    const canvasItemContainer = document.getElementById("canvasItemContainer");
    canvasItemContainer.removeChild(itemDivToDelete);

    const filteredItems = items.filter((item) => item.itemID !== buttonID);
    setItems(filteredItems);
  };

  const handleSave = () => {
    const canvasJson = canvas.toJSON();
    canvas2.loadFromJSON(canvasJson);
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Create Your Card</h2>

        <div className={styles.card_canvas_container}>
          <canvas
            className={styles.card_canvas}
            id="Canvas"
            width="450"
            height="250"
          ></canvas>
        </div>

        <h2>Add Text</h2>

        <div className={styles.customized_card_form}>
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

          <div>
            <label htmlFor="underline">Underline:</label>
            <input
              type="checkbox"
              id="underlineOn"
              name="underline"
              value="on"
              onChange={handleUnderlineChange}
            />
          </div>

          <div>
            <label htmlFor="linethrough">Linethrough:</label>
            <input
              type="checkbox"
              id="linethroughOn"
              name="linethrough"
              value="on"
              onChange={handleLinethroughChange}
            />
          </div>

          <div>
            <label htmlFor="overline">Overline:</label>
            <input
              type="checkbox"
              id="overlineOn"
              name="overline"
              value="on"
              onChange={handleOverlineChange}
            />
          </div>

          <div>
            <input
              type="text"
              id="myText"
              value={userTextInput}
              onChange={handleUserTextInput}
            />
            <button onClick={handleAddText}>Add text</button>
          </div>

          {items.length > 0 && <h2>Remove Text</h2>}
            <div
              className={styles.canvasItemContainer}
              id="canvasItemContainer"
              onClick={removeItemByID}
            ></div>

        </div>
        <br />

        <div>
        <button onClick={handleSave}>Save</button>
        </div>

        <h2>Saved Card (for testing)</h2>
        <div className={styles.card_canvas_container}>
          <canvas
            className={styles.card_canvas}
            id="Canvas2"
            width="450"
            height="250"
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
