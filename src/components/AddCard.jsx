import { useRef } from 'react';
import { Fragment } from 'react';
import styles from "@/styles/sharedcard.module.scss";
import { Container } from '@material-ui/core';

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const AddCard = (props) => {
    const enteredEmail = useRef('');

    const check_if_exist = async()=>{
        // console.log(enteredEmail.current.value)
        const sendObject = {
            check_if_exist: enteredEmail.current.value
        }
        const sendObjectStr = JSON.stringify(sendObject)
        const responsex = await fetch("http://localhost:3000/api/usercards", {
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
            return data;
        })
        .catch(err => {
        console.error(err);
        });
        return responsex
    }
    const  AddCardByEmail = async() => {
        // console.log(enteredEmail.current.value)
        check_if_exist().then(function (response) {
            // console.log(response)
            if(response>0){
                const sendObject = {
                    addcard: enteredEmail.current.value,
                    emailofcurrectuser: JSON.parse(sessionStorage.getItem("email"))
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
            }
            props.hideAddBlock(false)       
        })
    }
    return (
        <Fragment>
            <br></br>
            <div className={`${row_center}`}>
                <div className={`${col} col-4`}>
                    <input type="text" placeholder="enter email here.." className={`form-control`} ref={enteredEmail} />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className={`${col} col-12 `}>
                    <button className={`${styles.button}`} onClick={AddCardByEmail}> -- Add -- </button>
                </div>
            </div>
            <br></br>
        </Fragment>)
}

export default AddCard
