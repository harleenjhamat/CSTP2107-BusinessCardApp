import { Fragment } from 'react'
import {useState} from 'react';
import Head from 'next/head'
import Navbar from './../../components/Navbar';
import styles from "../../styles/customcard.module.scss";
import Image from "next/image";

function CustomCard (props) {
  const [hoverGrey, setHoverGrey] = useState('');
  const [hoverOrange, setHoverOrange] = useState('');
  const [hoverGreen, setHoverGreen] = useState('');
  const [hoverBlue, setHoverBlue] = useState('');
  const [hoverRed, setHoverRed] = useState('');
  const [hoverPurple, setHoverPurple] = useState('');
  const [hoverPink, setHoverPink] = useState('');
  const [hoverYellow, setHoverYellow] = useState('');
  const [username, setUsername] = useState('Bob Pancakes');
  const [userphone, setUserphone] = useState('+1(236)-333-2211');
  const [business, setBusiness] = useState('Pancake Central');
  const [email, setEmail] = useState('cybercard@card.ca');
  var greyHandler = (event) => {
    setHoverBlue('')
    setHoverRed('')
    setHoverPurple('')
    setHoverYellow('')
    setHoverGreen('')
    setHoverOrange('')
    setHoverPink('')
    setHoverGrey(`${styles.colorGrey}`);
  };
  var greenHandler = (event) => {
    setHoverBlue('')
    setHoverRed('')
    setHoverPurple('')
    setHoverYellow('')
    setHoverGrey('')
    setHoverOrange('')
    setHoverPink('')
    setHoverGreen(`${styles.colorGreen}`);
  };
  var orangeHandler = (event) => {
    setHoverBlue('')
    setHoverRed('')
    setHoverPurple('')
    setHoverYellow('')
    setHoverGrey('')
    setHoverGreen('')
    setHoverPink('')
    setHoverOrange(`${styles.colorOrange}`);
  };
  var blueHandler = (event) => {
    setHoverGreen('')
    setHoverRed('')
    setHoverPurple('')
    setHoverYellow('')
    setHoverGrey('')
    setHoverOrange('')
    setHoverPink('')
    setHoverBlue(`${styles.colorBlue}`);
  };
  var redHandler = (event) => {
    setHoverGreen('')
    setHoverBlue('')
    setHoverPurple('')
    setHoverYellow('')
    setHoverGrey('')
    setHoverOrange('')
    setHoverPink('')
    setHoverRed(`${styles.colorRed}`);
  };
  var purpleHandler = (event) => {
    setHoverGreen('')
    setHoverBlue('')
    setHoverRed('')
    setHoverYellow('')
    setHoverGrey('')
    setHoverOrange('')
    setHoverPink('')
    setHoverRed(`${styles.colorPurple}`);
  };
  var pinkHandler = (event) => {
    setHoverGreen('')
    setHoverBlue('')
    setHoverRed('')
    setHoverYellow('')
    setHoverGrey('')
    setHoverOrange('')
    setHoverPink(`${styles.colorPink}`);
  };
  var yellowHandler = (event) => {
    setHoverGreen('')
    setHoverBlue('')
    setHoverRed('')
    setHoverPurple('')
    setHoverGrey('')
    setHoverOrange('')
    setHoverPink('')
    setHoverRed(`${styles.colorYellow}`);
  };
  var resetColorHandler = (event)=>{
    setHoverGreen('')
    setHoverBlue('')
    setHoverRed('')
    setHoverGrey('')
    setHoverYellow('')
    setHoverOrange('')
    setHoverPink('')
    setHoverPurple('');
  }
  var nameHandler = (event)=>{
    setUsername(event.target.value);
  }
  var phoneHandler = (event)=>{
    setUserphone(event.target.value);
  }
  var businessHandler = (event)=>{
    setBusiness(event.target.value);
  }
  var emailHandler = (event)=>{
    setEmail(event.target.value);
  }

  return (
    <Fragment>
      <Head>
        <title> Your Custom Card</title>
        <meta name='description' content='Customize your Card' />
      </Head>
      <Navbar/>
      <div className="container-fluid m-0 p-0 mb-4">
        {/* TEXT */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 mt-4">
            <h1 className={`${styles.cen} ${styles.cardSlogan}`}>
            Customize your Card:
            </h1>
          </div>
        </div>

        {/* Logo and Photo Upload */}
        <div className="row justify-content-center my-4">
          <div className="col-12 col-md-6 mt-4">
            <div>
              <input type="file" id="actual-btn" hidden/>
              <label className={`${styles.imageUser}`} htmlFor="actual-btn">Upload Photo</label>
              </div>
          </div>
        </div>
        
      
        {/* BORDER */}
        <div className={`row justify-content-center my-2 mx-2`}>
          <div className={`col-12 col-md-10 col-lg-5 my-2 ${styles.cardBorder} ${styles.cen} ${hoverGrey} ${hoverGreen} ${hoverOrange} ${hoverPink} ${hoverBlue} ${hoverRed} ${hoverPurple} ${hoverYellow}`}>
            {/* INNER PART */}
            <div className="row justify-content-center">
              <div className={`col-7 my-4 ${styles.left}`}>
                <Image className={`border border-info border-5 rounded-3`} src="/assets/business_logo.png" alt="instruction1" width={200} height={70}/>
                <h2 className={`mt-3 ${styles.cardFont}`}>{business}</h2>
                <h4 className={`mt-4 ${styles.cardFont}`}>{username}</h4>
                <p className={`${styles.cardFont}`}>{userphone}</p>
              </div>
              <div className={`col-4 my-4 ${styles.cen}`}>
                <Image className={`border border-info border-5 ${styles.roundElem}`} src="/assets/img_avatar.png" alt="instruction1" width={200} height={200}/>
                <p className={`p-0 m-0 ${styles.cen} ${styles.cardFont} `}>{email}</p>
                <p className={`p-0 m-0 ${styles.cen} ${styles.cardFont} `}>Powered by Cybercard</p>
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
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}  onClick={greyHandler}>
                    <h3 className={`${styles.colorGrey}`}>g</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`} onClick={yellowHandler}>
                    <h3 className={`${styles.colorYellow}`}>Y</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
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
                  <div className={`col-1 m-0 p-0 ${styles.cen}`} onClick={purpleHandler}>
                    <h3 className={`${styles.colorPurple}`}>P</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`} onClick={redHandler}>
                    <h3 className={`${styles.colorRed}`}>R</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}  onClick={orangeHandler}>
                    <h3 className={`${styles.colorOrange}`}>O</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}  onClick={pinkHandler}>
                    <h3 className={`${styles.colorPink}`}>P</h3>
                  </div>
                  <div className={`col-1 m-0 p-0 ${styles.cen}`}>
                    <h3 className={`${styles.colorWhite}`}>&#32;</h3>
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
                <label className="h4" htmlFor="businessInput">Type Business Name:</label>
                <input id="businessInput" type="text" name="name" onChange={businessHandler}/>
              </div>
              <div className={`col-12 m-0 p-0 my-3 d-grid ${styles.cen}`}>
                <label className="h4" htmlFor="phoneInput">Type Phone Number:</label>
                <input id="phoneInput" type="text" name="name" onChange={phoneHandler}/>
              </div>
              <div className={`col-12 m-0 p-0 my-3 d-grid ${styles.cen}`}>
                <label className="h4" htmlFor="emailInput">Type Email:</label>
                <input id="emailInput" type="text" name="name" onChange={emailHandler}/>
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
