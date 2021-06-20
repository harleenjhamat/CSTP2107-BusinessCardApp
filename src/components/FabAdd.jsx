import { Fragment } from 'react'
import styles from '../styles/mainpage.module.scss'
const FabAdd = () => {
  return (
    <Fragment>
      <button className={`${styles.addCard} w3-button w3-xlarge w3-circle w3-teal`}>+</button>
    </Fragment>
  )
}

export default FabAdd
