import { Fragment } from "react";
import styles from "../styles/card.module.scss";

const Card = () => {
  return (
    <Fragment>
      <div className="container-fluid m-0 p-0 mb-4">
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 mt-4">
            <h1 className={`${styles.cen} ${styles.cardSlogan}`}>
            You Had My Card at Hello
            </h1>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-12 col-md-6 my-2">
            <div className="row justify-content-center mx-1">
              <div className="col-12 col-md-8 my-2">
                <input
                  type="text"
                  className={`${styles.cen} form-control btn-lg`}
                  placeholder="Enter Card name"
                />
              </div>
              <div className="col-12 col-md-3 my-2 d-grid">
                <button
                  className={`btn btn-lg ${styles.cen} ${styles.getStartedBtn}`}
                >
                  Get started!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
