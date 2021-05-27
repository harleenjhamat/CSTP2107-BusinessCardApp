import { Fragment } from 'react'
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return ( 
    <Fragment>
        <div className={`container-fluid ${styles.footerContainer}`}>
            <div className='row justify-content-center'>
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
            <div className='row justify-content-center'>
                <div className={styles.footer}> 
                    <div className={styles.footerText}>
                        <hr/>
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
