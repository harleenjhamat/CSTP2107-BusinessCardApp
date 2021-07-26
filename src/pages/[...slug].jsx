import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Scrollme from './../components/Scrollme'

const AddByEmail = () => {
  const router = useRouter()
  const queryData = router.query.slug
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
        // console.log(data)
        return data
      })
      .catch(err => {
        console.error(err)
      })
    return responsex
  }
  //   const AddCardByEmail = async () => {
  // console.log(enteredEmail.current.value)
  setTimeout(() => {
    if (typeof queryData !== 'undefined') {
      check_if_exist().then(function (response) {
        // console.log(response)
        if (response > 0) {
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
              // console.log(data)
              router.push('/MainPage')
            })
            .catch(err => {
              console.error(err)
            })
        }
      })
    }
  }, 3000)

  return (
    <Fragment>
      <div className='row justify-content-center mt-4'>
        <div class='col-12 col-md-6 text-center mt-4'>
          <h1>Congrats!</h1>
          <h2>Card was added to your collection</h2>
        </div>
      </div>
      <Scrollme />
      <Scrollme />
    </Fragment>
  )
}

export default AddByEmail
