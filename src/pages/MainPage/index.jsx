import { Fragment } from 'react'
import { useState, useEffect } from 'react'

import Scrollme from './../../components/Scrollme'
import UserCard from './../../components/UserCard'
import SharedCard from './../../components/SharedCard'
import styles from "@/styles/mainpage.module.scss";
import SearchCard from './../../components/SearchCard';
import FabAdd from './../../components/FabAdd';

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const MainPage = () => {
  const [url, seturl] = useState('')
  const [searchClicked, setsearchClicked] = useState(false);
  const [datafetched, setdatafetched] = useState(false)
  const [getallcards, setgetallcards] = useState([])

  useEffect(() => {
    if (!datafetched) {
      fetch('http://localhost:3000/api/usercards?=', {
        method: 'GET',
        headers: {}
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setgetallcards(data)
          setdatafetched(true)
        })
        .catch(err => {
          console.error(err)
        })
    }
  })

  const newCardHandler = data => {
    // console.log(data)
    setsearchClicked(true)
    seturl(data)
  }
  return (
    <Fragment>
      <div className={`container-fluid m-0 p-0 mt-5`}>
        <div className={`row m-0 p-0 mx-2 justify-content-center`}>
          <div className={`col-12 col-md-4 text-center border-end`}>
            <h1 className={styles.cardHead}>Your Card:</h1>
            <UserCard />
          </div>
          <div className={`col-12 col-md-8 text-center`}>
            <h1 className={styles.cardHead}>Shared With You</h1>
            <div className={`${row_center}`}>
              <div className={`${col} col-11`}>
                <SearchCard addnewcard={newCardHandler} />
              </div>
            </div>
            <div className={`${row_default} justify-content-between`}>
              { searchClicked && <SharedCard feedimg={url} />}

              {!searchClicked && getallcards.map(card => (
                <SharedCard key={Math.random()} feedimg={card.img} />
              ))}
            </div>
          </div>
          <Scrollme />
        </div>
      </div>
      <FabAdd/>
    </Fragment>
  )
}

export default MainPage
