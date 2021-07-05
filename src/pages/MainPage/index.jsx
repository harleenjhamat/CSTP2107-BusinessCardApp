import { Fragment } from 'react'
import { useState, useEffect } from 'react'

import Scrollme from './../../components/Scrollme'
import UserCard from './../../components/UserCard'
import SharedCard from './../../components/SharedCard'
import styles from '@/styles/mainpage.module.scss'
import SearchCard from './../../components/SearchCard'
import FabAdd from './../../components/FabAdd'
import AddCard from './../../components/AddCard'

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const MainPage = () => {
  const [url, seturl] = useState('')

  const [array_of_cards, set_array_of_cards] = useState([])
  const [arrayReceived, setarrayReceived] = useState(false)

  const [portfolio, setportfolio] = useState([])
  const [portfolioset, setPortfolioset] = useState(false)

  const [searchClicked, setsearchClicked] = useState(false)
  const [addclicked, setaddclicked] = useState(false)

  useEffect(() => {
    if (!arrayReceived) {
      if (typeof window !== 'undefined') {
        const sendObject = {
          get_cards_from_users_array: JSON.parse(
            sessionStorage.getItem('email')
          )
        }
        const sendObjectStr = JSON.stringify(sendObject)
        fetch('http://localhost:3000/api/usercards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: sendObjectStr
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data[0].other_cards)
            set_array_of_cards(data[0].other_cards)
            setarrayReceived(true)
          })
          .catch(err => {
            console.error(err)
          })
      }
    }
  }, [])
  useEffect(() => {
    if (arrayReceived && !portfolioset) {
      if (typeof window !== 'undefined') {
        array_of_cards.forEach(element => {
          const sendObject = {
            render_cards: element
          }
          const sendObjectStr = JSON.stringify(sendObject)
          fetch('http://localhost:3000/api/usercards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: sendObjectStr
          })
            .then(res => res.json())
            .then(data => {
              setPortfolioset(true)
              setportfolio(prevusers => {
                return [...prevusers, data[0]]
              })
            })
            .catch(err => {
              console.error(err)
            })
        })
      }
    }
  }, [arrayReceived])

  const newCardHandler = data => {
    setsearchClicked(true)
    seturl(data)
  }

  const Handle_fab_clicked = data => {
    setaddclicked(data)
  }
  const showAddBlockHandler = () => {
    setaddclicked(false)
  }

  return (
    <Fragment>
      <div className={`container-fluid m-0 p-0 mt-5`}>
        <div className={`row m-0 p-0 mx-2 justify-content-center`}>
          <div className={`col-12 col-md-6 text-center `}>
            <UserCard />
            <br></br>
            <SearchCard addnewcard={newCardHandler} />
            <div className={`${row_default} justify-content-between`}>
              {/* { searchClicked && <SharedCard feedimg={url} /> */}
              {/* {console.log(portfolio[0]._id)} */}
              {addclicked && <div><AddCard hideAddBlock={showAddBlockHandler} /><br></br></div>}
              {!searchClicked &&
                portfolio !== [] &&
                portfolio.map(card => (
                  <SharedCard key={card._id} feedimg={card.img} id={card._id} useremail={JSON.parse(sessionStorage.getItem("email"))} email={card.email}/>
                ))}
            </div>
          </div>
          <Scrollme />
        </div>
      </div>

      <FabAdd fab_clicked={Handle_fab_clicked} />
    </Fragment>
  )
}

export default MainPage
