import { Fragment } from 'react'
import styles from '../styles/mainpage.module.scss'
const FabAdd = () => {
  return (
    <Fragment>
      <h1>
        <span className={`${styles.addCard} material-icons`}> group_add</span>
      </h1>
    </Fragment>
  )
}

export default FabAdd
