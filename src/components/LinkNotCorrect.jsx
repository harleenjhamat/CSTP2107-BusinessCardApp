/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-08-01 20:12:08
 * @ Description:
 *    When a user adds new card and Link is not correct
 */

import { Fragment } from 'react'
const LinkNotCorrect = () => (
  <Fragment>
    <div className='row justify-content-center mt-4'>
      <div className='col-12 col-md-6 text-center mt-4'>
        <div className='alert alert-danger'>
          <h1>Link is not correct</h1>
        </div>
      </div>
    </div>
  </Fragment>
)

export default LinkNotCorrect
