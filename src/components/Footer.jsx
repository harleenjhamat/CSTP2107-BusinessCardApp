import { Fragment } from 'react'
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return ( 
    <Fragment>
        <div className='container-fluid m-0 p-0'>
            <div className='row justify-content-center my-4'>
                <div className={styles.contact}>
                    <div className={styles.contactText}>
                    <h4>Contact us</h4>
                    <p>
                    Email: card@cybercard.com 
                    <br></br> Phone: 778-100-1000
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid m-0 p-0'>
            <div className='row justify-content-center my-4'>
                <div className={styles.footer}> 
                    <div id={styles.footerText}>
                      <p>
                      2021 Cybercard © Licensed under CSTP 2107
                      </p>
                    </div>  
                </div>
            </div>
        </div>

    </Fragment>
)
}
export default Footer
