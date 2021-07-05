import { Fragment } from 'react'
import styles from '../styles/sharedcard.module.scss'
import { useState } from 'react'
import SharedCard from './SharedCard';

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const UserCard = (props) => {
  const [myCustomCard, setmyCustomCard] = useState(false)
  const [myCustomCardUrl, setmyCustomCardUrl] = useState('')
  const [shareCardNum, setshareCardNum] = useState(false);
  const [email, setEmail] = useState('');

  if (typeof window !== "undefined") {
    const sendObject = {
      get_personal_card: JSON.parse(sessionStorage.getItem("email"))
    };
    const sendObjectStr = JSON.stringify(sendObject);
    
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
      setmyCustomCard(true)
      setmyCustomCardUrl(data[0].img)
      setEmail(data[0].email)
    })
    .catch(err => {
      console.error(err);
    });
  }
    
    const SharedCard = () =>{
        setshareCardNum(true)
    }

  return (
    <Fragment>
      <div className={`${row_center}`}>
        <div className={`${col} col-12`}>
          <div className={`${row_center}`}>
            <div className={`${col} col-12`}>
              {!myCustomCard && (
                <img
                  src='/assets/choose_template.jpg'
                  className={`${styles.fitimg} figure-img img-fluid rounded`}
                  alt='...'
                />
              )}
              {myCustomCard && (
                <img
                  src={`${myCustomCardUrl}`}
                  className={`${styles.fitimg} figure-img img-fluid rounded`}
                  alt='...'
                />
              )}
              {shareCardNum && <p>Copy your email to share card: <span><br></br></span> {email}</p>}
            </div>
          </div>
          <br></br>
          <div className={`${row_default} mb-3 justify-content-center`}>
            <div className={`${col} col-4 .col-md-7`}>
              <button className={`${styles.button}`} onClick={SharedCard}>Share</button>
            </div>
            <div className={`${col} col-4 .col-md-7`}>
              <button className={`${styles.buttonNew}`}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserCard
