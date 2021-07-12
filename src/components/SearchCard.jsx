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
  const GetCards = () => {
    // console.log(sharedcode)
    if (sharedcode.current.value === "") {
      window.location.reload();
    }
    let filteredCards = props.portfolio.filter((card) => {
      return (
         card.email.toLowerCase().includes(sharedcode.current.value.toLowerCase()) 
      || card.tag.toLowerCase().includes(sharedcode.current.value.toLowerCase())
      || card.name.toLowerCase().includes(sharedcode.current.value.toLowerCase())
      );
    });
      props.addnewcard(filteredCards);
  };
  return (
    <div className={`${styles.searchBarDiv} my-4`}>
        <div className={`row gy-4 justify-content-center align-items-center`}>
          <div className={`col-12 col-sm-9`}>
            <input
              type="text"
              placeholder="Search Cards"
              className={`form-control`}
              ref={sharedcode}
            />
          </div>
          <div className={`col-12 col-sm text-center`}>
            <button className={`${styles.button}`} onClick={GetCards}>
              <Icon name="search" />
              Search
            </button>
          </div>
        </div>
    </div>
  );
};

export default SearchCard;
