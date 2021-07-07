import { useState, useEffect } from "react";

import UserCard from "./../../components/UserCard";
import SharedCard from "./../../components/SharedCard";
import SearchCard from "./../../components/SearchCard";
import AddCard from "./../../components/AddCard";
import styles from "@/styles/sharedcard.module.scss";

const MainPage = () => {
  const [url, seturl] = useState("");

  const [array_of_cards, set_array_of_cards] = useState([]);
  const [arrayReceived, setarrayReceived] = useState(false);

  const [portfolio, setportfolio] = useState([]);
  const [portfolioset, setPortfolioset] = useState(false);

  const [searchClicked, setsearchClicked] = useState(false);
  const [addclicked, setaddclicked] = useState(false);

  useEffect(() => {
    if (!arrayReceived) {
      if (typeof window !== "undefined") {
        const sendObject = {
          get_cards_from_users_array: JSON.parse(
            sessionStorage.getItem("email")
          ),
        };
        const sendObjectStr = JSON.stringify(sendObject);
        fetch("http://localhost:3000/api/usercards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: sendObjectStr,
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data[0].other_cards)
            set_array_of_cards(data[0].other_cards);
            setarrayReceived(true);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, []);

  useEffect(() => {
    if (arrayReceived && !portfolioset) {
      if (typeof window !== "undefined") {
        array_of_cards.forEach((element) => {
          const sendObject = {
            render_cards: element,
          };
          const sendObjectStr = JSON.stringify(sendObject);
          fetch("http://localhost:3000/api/usercards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: sendObjectStr,
          })
            .then((res) => res.json())
            .then((data) => {
              setPortfolioset(true);
              setportfolio((prevelem) => {
                return [...prevelem, data[0]];
              });
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }
    }
  }, [arrayReceived]);

  const newCardHandler = (data) => {
    setsearchClicked(true);
    seturl(data);
  };

  const Handle_fab_clicked = (data) => {
    setaddclicked(data);
  };

  const showAddBlockHandler = () => {
    setaddclicked(false);
    window.location.reload();
  };

  return (
    <>
      <div
        className={`${styles.container} row gx-5 py-lg-4 px-lg-5 justify-content-center align-items-center`}
      >
        {/* This is the user card section*/}
        <div className={`col-12 col-md-4 p-4 pb-0 text-center`}>
          <UserCard fab_clicked={Handle_fab_clicked} />

          {addclicked && (
            <div
              className="modal fade"
              id="staticBackdrop"
              // data-bs-backdrop="static"
              // data-bs-keyboard="false"
              // tabindex="-1"
              // aria-labelledby="staticBackdropLabel"
              // aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title" id="staticBackdropLabel">
                      Add Contact
                    </h3>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body pt-0">
                    <AddCard hideAddBlock={showAddBlockHandler} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* This is other people's cards section */}
        <div className={`col-12 col-md-8 p-4 pt-0`}>
          <SearchCard addnewcard={newCardHandler} />

          {/* This is the card deck */}
          <div className={`${styles.imgDiv}`}>
            {searchClicked && <SharedCard feedimg={url}/>}

            {!searchClicked &&
              portfolio !== [] &&
              portfolio.map((card) => (
                <SharedCard
                  key={card._id}
                  feedimg={card.img}
                  id={card._id}
                  useremail={JSON.parse(sessionStorage.getItem("email"))}
                  email={card.email}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
