/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 *    This file is for getting share Link
 */

import { Fragment } from 'react'
import styles from '../styles/mainpage.module.scss'
const AddCardButton = (props) => {
  const AddCardTrue = () => {
    props.AddCardButton_clicked(true)
  }
  return (
    <Fragment>
      <button className={`${styles.addCard} w3-button w3-xlarge w3-circle w3-teal`} onClick={AddCardTrue}>+</button>
    </Fragment>
  )
}

export default AddCardButton
