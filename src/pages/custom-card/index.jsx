import { Fragment } from 'react';
import { useState } from 'react';
import Head from 'next/head'
import Navbar from './../../components/Navbar';
import styles from "../../styles/customcard.module.scss";
import Image from "next/image";
import Scrollme from './../../components/Scrollme';


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
    setHoverPurple(`${styles.colorPurple}`);
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
    setHoverYellow(`${styles.colorYellow}`);
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
      <div className="container-fluid m-0 p-0 mb-4">
        {/* TEXT */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 mt-4">
            <h1 className={`${styles.cen} ${styles.cardSlogan}`}>
            Customize your Card:
            </h1>
          </div>
        </div>
            {/* INNER PART */}
            
        </div>
        <Scrollme/>
    </Fragment>
  )
}

export default CustomCard



