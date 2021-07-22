import { useRef } from "react";
import styles from "@/styles/sharedcard.module.scss";
import { Icon } from "semantic-ui-react";

const SearchCard = (props) => {
  const sharedcode = useRef("");
  const GetCards = () => {
    // console.log(sharedcode)
    if (sharedcode.current.value === "") {
      window.location.reload();
    }
    let filteredCards = props.portfolio.filter((card) => {
      return (
        card.email
          .toLowerCase()
          .includes(sharedcode.current.value.toLowerCase()) ||
        card.tag
          .toLowerCase()
          .includes(sharedcode.current.value.toLowerCase()) ||
        card.name.toLowerCase().includes(sharedcode.current.value.toLowerCase())
      );
    });
    props.addnewcard(filteredCards);
  };
  return (
    <div className={`${styles.searchBarDiv}`}>
      <input
        type="text"
        placeholder="Search Cards"
        className={`form-control`}
        ref={sharedcode}
      />
    </div>
  );
};

export default SearchCard;
