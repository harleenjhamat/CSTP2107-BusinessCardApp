/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-08-01 20:12:33
 * @ Description:   
 *    When a user adds new card and Link is correct
 */

import { Fragment } from 'react'
const LinkCorrect = () => (
  <Fragment>
    <div className='row justify-content-center mt-4'>
      <div className='col-12 col-md-6 text-center mt-4'>
        <div className='alert alert-success'>
          <h1>Congrats!</h1>
          <h2>Card was added to your collection</h2>
        </div>
      </div>
    </div>
  </Fragment>
)

export default LinkCorrect
