import { Fragment } from "react";
import { Button, Icon } from "semantic-ui-react";
import styles from "@/styles/sharedcard.module.scss";

var row_center = `row m-0 p-0 justify-content-center`;
var row_default = `row m-0 p-0`;
var col = `text-center m-0 p-0`;

const SharedCard = (props) => {
  const deleteFromCollection = () => {
    // console.log(props.id)
    const sendObject = {
      useremail: props.useremail,
      deletecard: props.email,
    };
    const sendObjectStr = JSON.stringify(sendObject);
    fetch("http://localhost:3000/api/usercards", {
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
        // console.log(data)
      })
      .catch((err) => {
        console.error(err);
      });
    window.location.reload();
  };
  return (
    <>
      <div className={`${styles.imgwrap} ${col} col-12`}>
        <img src={props.feedimg} alt="..." />
        <Icon
          className={styles.close}
          onClick={deleteFromCollection}
          name="trash alternate"
        />
      </div>
    </>
  );
};

export default SharedCard;
