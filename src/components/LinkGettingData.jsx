/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-08-03 13:23:21
 * @ Description:
 *    When a user adds new card and data is not here yet
 */

import { Fragment } from 'react'
const LinkGettingData = () => (
  <Fragment>
    <div className='row justify-content-center mt-4'>
      <div className='col-12 col-md-6 text-center mt-4'>
        <div className='alert alert-primary'>
          <h1>Getting  result ...</h1>
          <div class='spinner-border text-primary' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default LinkGettingData
