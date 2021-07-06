import { useRef } from "react";
import { Fragment } from "react";
import styles from "@/styles/sharedcard.module.scss";
import { Container } from "@material-ui/core";
import { Icon } from "semantic-ui-react";

var row_center = `row m-0 p-0 justify-content-center`;
var row_default = `row m-0 p-0`;
var col = `text-center m-0 p-0`;

const SearchCard = (props) => {
  const sharedcode = useRef("");
  const GetCardByCode = () => {
    // console.log(sharedcode)
    if (sharedcode.current.value === "") {
      window.location.reload();
    }
    const sendObject = {
      filter_card: sharedcode.current.value,
    };
    sharedcode.current.value = "";
    const sendObjectStr = JSON.stringify(sendObject);
    fetch("http://localhost:3000/api/usercards/?=", {
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
        console.log(data[0]);
        props.addnewcard(data[0].img);
      });
  };
  return (
    <Fragment>
      <div className={`d-flex mx-4 justify-content-center`}>
        <div className={`d-flex mx-4 justify-content-center`}>
          <div className={`col-8 mx-2`}>
            <input
              type="text"
              placeholder="search card here.."
              className={`form-control`}
              ref={sharedcode}
            />
          </div>
          <div className={`col`}>
            <button className={`${styles.button}`} onClick={GetCardByCode}>
              <Icon name="search" />
              Search
            </button>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
    </Fragment>
  );
};

export default SearchCard;
