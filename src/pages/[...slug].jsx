import { Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from 'react'
import Scrollme from "./../components/Scrollme";
import LinkNotCorrect from './../components/LinkNotCorrect';
import LinkCorrect from './../components/LinkCorrect';

const AddByEmail = () => {
  const router = useRouter();
  const [trueLink, settrueLink] = useState(0);
  const queryData = router.query.slug;
  const check_if_exist = async () => {
    const sendObject = {
      check_if_exist: queryData[0],
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
        settrueLink(data)
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
    return responsex;
  };
  setTimeout(() => {
    if (typeof queryData !== "undefined") {
      check_if_exist().then(function (response) {
        if (response > 0) {
          const sendObject = {
            addcard: queryData[0],
            emailofcurrectuser: JSON.parse(sessionStorage.getItem("email")),
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
              router.push("/MainPage");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
    }
  }, 3000);

  return (
    <Fragment>
        {trueLink && <LinkCorrect/>}
        {!trueLink && <LinkNotCorrect/>}
      <Scrollme />
      <Scrollme />
    </Fragment>
  );
};

export default AddByEmail;
