/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-31 23:54:23
 * @ Description:
 *    This page is for adding users via Link
 */

import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Scrollme from './../components/Scrollme'
import LinkNotCorrect from './../components/LinkNotCorrect'
import LinkCorrect from './../components/LinkCorrect'
import LinkGettingData from './../components/LinkGettingData'

const AddByEmail = () => {
  const router = useRouter()
  const [trueLink, settrueLink] = useState()
  const [renderLink, setrenderLink] = useState(true)
  const queryData = router.query.slug

  // Checking if user in DB:
  const check_if_exist = async () => {
    const sendObject = {
      check_if_exist: queryData[0]
    }
    const sendObjectStr = JSON.stringify(sendObject)
    const responsex = await fetch('http://localhost:3000/api/usercards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: sendObjectStr
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {

        return data
      })
      .catch(err => {
        console.error(err)
      })
    return responsex
  }
  // Edding to collection and going to the Mian page of a user:
  function ConfirmHandle () {
    if (typeof queryData !== 'undefined') {
      check_if_exist().then(function (response) {
        if (response > 0 && sessionStorage.getItem('email')) {
          settrueLink(true)
          setrenderLink(false)
          const sendObject = {
            addcard: queryData[0],
            emailofcurrectuser: JSON.parse(sessionStorage.getItem('email'))
          }
          const sendObjectStr = JSON.stringify(sendObject)
          fetch('http://localhost:3000/api/usercards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: sendObjectStr
          })
            .then(function (response) {
              return response.json()
            })
            .then(function (data) {
              setTimeout(() => {
                router.push('/MainPage')
              }, 3000)
            })
            .catch(err => {
              console.error(err)
            })
        }else
        {
          settrueLink(false)
          setrenderLink(false)
          setTimeout(() => {
            router.push('/MainPage')
          }, 3000)
        }
      })
    }
  }
  return (
    <Fragment>
      {renderLink && <LinkGettingData ClickedConfirm={ConfirmHandle} />}
      {trueLink && <LinkCorrect />}
      {!trueLink && !renderLink && <LinkNotCorrect />}
      <Scrollme />
      <Scrollme />
    </Fragment>
  )
}

export default AddByEmail
