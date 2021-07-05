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
      deletecard: props.email
    }
    const sendObjectStr = JSON.stringify(sendObject)
    fetch("http://localhost:3000/api/usercards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: sendObjectStr
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // console.log(data)
            })
            .catch(err => {
            console.error(err);
            });
            window.location.reload();
}
  return (
    <Fragment>
      {/* container */}
      <div className={`${col} col-12 col-md-6`}>
        <div className={`${row_center}`}>
          {/* gap */}
          <div className={`${col} col-12 col-md-11`}>
            <div className={`${row_center}`}>
              <div className={`${col} col-12`}>
                <div className={styles.imgwrap}>
                  <Button className={styles.close} onClick={deleteFromCollection}>
                    <span>
                      <Icon name="trash alternate" />
                    </span>
                  </Button>
                  <img
                    src={props.feedimg}
                    className={`${styles.fitimg} figure-img img-fluid rounded`}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className={`${row_default} justify-content-between mb-5`}>
              <div className={`${col} col-12 col-md-5 mt-3 d-grid`}>
                {/* <button className={`btn btn-secondary`}>Edit</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SharedCard;
