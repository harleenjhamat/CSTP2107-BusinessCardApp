/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 */

import { useRef } from "react";
import styles from "@/styles/sharedcard.module.scss";
import { Icon } from "semantic-ui-react";

const SearchCard = (props) => {
  const sharedcode = useRef("");
  const GetCards = () => {
    // console.log(sharedcode)
    // if (sharedcode.current.value === "") {
    //   window.location.reload();
    // }
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
    <div className={styles.boxContainer}>
      <table className={styles.elementsContainer}>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Search Cards"
              className={styles.search}
              ref={sharedcode}
              onChange={GetCards}
            />
          </td>
          <td>
            <i className="material-icons">search</i>
          </td>
        </tr>
      </table>
          
  
    </div>
  );
};

export default SearchCard;
