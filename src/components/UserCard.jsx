/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
var QRCode = require("qrcode");

import { Icon } from "semantic-ui-react";
import styles from "../styles/sharedcard.module.scss";

const UserCard = ({ AddCardButton_clicked }) => {
  const router = useRouter();
  const [myCustomCard, setmyCustomCard] = useState(false);
  const [myCustomCardUrl, setmyCustomCardUrl] = useState("");
  const [shareCardNum, setshareCardNum] = useState(false);
  const [email, setEmailLink] = useState("");

  // useEffect(()=>{

  // }, [email]);

  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("email") === null) {
      router.push("/CustomCard");
    }
    const sendObject = {
      get_personal_card: JSON.parse(sessionStorage.getItem("email")),
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
        if (data.length === 0) {
          router.push("/CustomCard");
        } else {
          setmyCustomCard(true);
          setmyCustomCardUrl(data[0].img);
          setEmailLink(`http://localhost:3000/` + data[0].email);

          var canvas = document.getElementById("qrCanvas");
          if (canvas) {
            QRCode.toCanvas(canvas, email, function (error) {
              if (error) console.error(error);
              console.log("success!");
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const SharedCard = () => {
    setshareCardNum(!shareCardNum);

    /* Copy email to clipboard */
    var copyText = document.getElementById("sharedEmail");
    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  };

  const handleEdit = () => {
    router.push("/CustomCard");
  };

  return (
    <>
      {/* Display loader or User-card  */}
      {(!myCustomCard && (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )) || (
        <>
          {/* This is the user card */}
          <div
            className={`${styles.userCardImgDiv} d-flex justify-content-around my-4`}
          >
            <img
              src={`${myCustomCardUrl}`}
              className={`${styles.imgShadow} figure-img img-fluid rounded`}
              alt="..."
            />
          </div>

          <button className={`${styles.mediumButton}`} onClick={handleEdit}>
            <Icon name="edit" />
            Edit your card
          </button>

          {/* share and edit container */}
          <div className={`d-flex justify-content-around my-4 flex-wrap`}>
            <button className={`${styles.mediumButton} `} onClick={SharedCard}>
              <Icon name="share alternate" />
              Get Sharable Link
            </button>
          </div>

          {/* Display share email message */}
          {shareCardNum && (
            <div className="rounded bd-highlight text-center mb-4">
              <div>
                <canvas id="qrCanvas"></canvas>
              </div>
              <p className="m-0">
                <b>Copied Link to clipboard:</b>
              </p>
              <p>
                <input
                  type="text"
                  value={email}
                  id="sharedEmail"
                  style={{
                    border: "none",
                    width: "200px",
                    backgroundColor: "transparent",
                    textOverflow: "ellipsis",
                  }}
                />
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserCard;
