import { Fragment } from 'react'
import styles from '../styles/sharedcard.module.scss'
import { useState } from 'react'
import SharedCard from './SharedCard';
import { Icon } from 'semantic-ui-react';

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const UserCard = (props) => {
  const [myCustomCard, setmyCustomCard] = useState(false)
  const [myCustomCardUrl, setmyCustomCardUrl] = useState('')
  const [shareCardNum, setshareCardNum] = useState(false);
  const [shareCardNumStr, setshareCardNumStr] = useState('');

  fetch('http://localhost:3000/api/usercards?=', {
    method: 'GET',
    headers: {}
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
    //   console.log(data[data.length - 1].img)
      setmyCustomCard(true)
      setmyCustomCardUrl(data[data.length - 1].img)
      setshareCardNumStr(data[data.length - 1].sharedcode)
    })

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
              {shareCardNum && <p>Copy code to share card: <span><br></br></span> {shareCardNumStr}</p>}
            </div>
          </div>
          <br></br>
          <div className={`${row_default} mb-3 justify-content-center`}>
            <div className={`${col} col-4 .col-md-7`}>
              <button className={`${styles.button}`} onClick={SharedCard}>
                <Icon name='share alternate'/>
                Share</button>
            </div>
            <div className={`${col} col-4 .col-md-7`}>
              <button className={`${styles.buttonNew}`}>
                <Icon name='edit'/>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserCard
