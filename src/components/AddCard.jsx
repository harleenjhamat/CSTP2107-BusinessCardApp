import { useRef } from 'react';
import { Fragment } from 'react';
import styles from "@/styles/sharedcard.module.scss";

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
            <div className={`d-flex align-items-center justify-content-center flex-wrap`}>
                <div className={`col-10`}>
                    <input type="text" placeholder="Enter contact email" className={`form-control`} ref={enteredEmail} />
                </div>
                <div className={`mx-auto mt-4`}>
                    <button className={`${styles.button}`} onClick={AddCardByEmail}> Add Card </button>
                </div>
            </div>
        </Fragment>)
}

export default AddCard
