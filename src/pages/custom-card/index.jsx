import { Fragment } from 'react'
import {useState} from 'react';
import Head from 'next/head'
import Navbar from './../../components/Navbar';
import styles from "../../styles/customcard.module.scss";
import Image from "next/image";

function CustomCard (props) {
  const [hoverGreen, setHoverGreen] = useState('');
  const [hoverBlue, setHoverBlue] = useState('');
  const [hoverRed, setHoverRed] = useState('');
  const [username, setUsername] = useState('Bob Pancakes');
  const [userphone, setUserphone] = useState('+1(236)333-22-11');
  var greenHandler = (event) => {
    setHoverBlue('')
    setHoverRed('')
    setHoverGreen(`${styles.colorGreen}`);
  };
  var blueHandler = (event) => {
    setHoverGreen('')
    setHoverRed('')
    setHoverBlue(`${styles.colorBlue}`);
  };
  var redHandler = (event) => {
    setHoverGreen('')
    setHoverBlue('')
    setHoverRed(`${styles.colorRed}`);
  };
  var resetColorHandler = (event)=>{
    setHoverGreen('')
    setHoverBlue('')
    setHoverRed('');
  }
  var nameHandler = (event)=>{
    setUsername(event.target.value);
  }
  var phoneHandler = (event)=>{
    setUserphone(event.target.value);
  }
  return (
    <Fragment>
      <Head>
        <title>Custom Card</title>
        <meta name='description' content='Customize your Card' />
      </Head>
      <Navbar />
      <div className="container-fluid m-0 p-0 mb-4">
        {/* TEXT */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 mt-4">
            <h1 className={`${styles.cen} ${styles.cardSlogan}`}>
            Customize your Card:
            </h1>
          </div>
        </div>
        {/* BORDER */}
        <div className={`row justify-content-center my-2 mx-2`}>
          <div className={`col-12 col-md-10 col-lg-5 my-2 ${styles.cardBorder} ${styles.cen} ${hoverGreen} ${hoverBlue} ${hoverRed}`}>
            {/* INNER PART */}
            <div className="row justify-content-center">
              <div className={`col-7 my-4 ${styles.left}`}>
                <Image className={`border border-info border-5 rounded-3`} src="/assets/business_logo.png" alt="instruction1" width={200} height={70}/>
                <h2 className={`mt-3`}>Business name</h2>
                <h4 className={`mt-4`}>{username}</h4>
                <p>{userphone}</p>
              </div>
              <div className={`col-4 my-4 ${styles.cen}`}>
                <Image className={`border border-info border-5 ${styles.roundElem}`} src="/assets/img_avatar.png" alt="instruction1" width={200} height={200}/>
                <p className={`p-0 m-0 ${styles.cen}`}>my@email.com</p>
                <p className={`p-0 m-0 ${styles.cen}`}>Powered by Cybercard</p>
              </div>
            </div>
          </div>
        </div>
        {/* END OF CARD */}


        {/* COLOR SECTION: */}
        <div className="row justify-content-center m-0 p-0 mx-2">
          <div className={`col-12 col-md-10 col-lg-5 my-2 ${styles.cen} ${styles.colorChanger}`}>

            <div className="row justify-content-center m-0 p-0">
              {/* COL FOR TEXT */}
              <div className={`col-6 mt-4 p-0 ${styles.cen}`}>
                <h3>Change the colour:</h3>
              </div>
              {/* COLOR PICKER: */}
              <div className={`col-6 mt-4 p-0 ${styles.cen}`}>
                <div className={`row justify-content-center m-0 p-0`}>
                  {/* 3 cols for colors: */}
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}  onClick={greenHandler}>
                    <h3 className={`${styles.colorGreen}`}>G</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`} onClick={blueHandler}>
                    <h3 className={`${styles.colorBlue}`}>B</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`} onClick={redHandler}>
                    <h3 className={`${styles.colorRed}`}>R</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* RESET COLOR BUTTON */}
            <div className="row justify-content-center m-0 p-0 mt-2 mb-4">
              <div className={`col-6 m-0 p-0 ${styles.cen}`}>
              </div>
              <div className={`col-3 m-0 p-0 d-grid ${styles.cen}`}>
                <button className={`btn btn-outline-dark btn-sm`} onClick={resetColorHandler}>Reset</button>
              </div>
            </div>

          
          </div>
        </div>
        {/* END OF COLOR PICKER */}

        {/* USER INPUT: */}
        <div className="row justify-content-center m-0 p-0 mx-2">
          <div className={`col-12 col-md-10 col-lg-5 my-2 ${styles.cen} ${styles.colorChanger}`}>
            <div className="row justify-content-center m-0 p-0">
              <div className={`col-12 m-0 p-0 my-3 d-grid ${styles.cen}`}>
                <label className="h4" htmlFor="namedInput">Type Name:</label>
                <input id="namedInput" type="text" name="name" onChange={nameHandler}/>
              </div>
              <div className={`col-12 m-0 p-0 my-3 d-grid ${styles.cen}`}>
                <label className="h4" htmlFor="phoneInput">Type Phone Number:</label>
                <input id="phoneInput" type="text" name="name" onChange={phoneHandler}/>
              </div>
            </div>
          </div>
        </div>


      {/* END OF CONTAINER */}
      </div>
    </Fragment>
  )
}

export default CustomCard
