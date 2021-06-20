import { useRef } from 'react';
import { Fragment } from 'react';
import styles from "@/styles/sharedcard.module.scss";
import { Container } from '@material-ui/core';

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const SearchCard = (props) => {
    const sharedcode = useRef('');
    const GetCardByCode = () => {
        console.log(sharedcode)
        const sendObject = {
            addcard: sharedcode.current.value
            // addcard: "0.39290873404547777"
        }
        const sendObjectStr = JSON.stringify(sendObject)
        fetch("http://localhost:3000/api/usercards/?=", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": sendObjectStr
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // console.log(data[data.length - 1].img)
                props.addnewcard(data[data.length - 1].img)
            })

    }
    return (
        <Fragment>
            <div className={`${row_center}`}>
                <div className={`${col} col-4`}>
                    <input type="text" placeholder="search card here.." className={`form-control`} ref={sharedcode} />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className={`${col} col-12 `}>
                    <button className={`${styles.button}`} onClick={GetCardByCode}>Search</button>
                </div>
            </div>
            <br></br>
        </Fragment>)
}

export default SearchCard
