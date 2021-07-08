import styles from "../styles/contactus.module.scss";
import Image from "next/image";


const ContactUs = () => {
  return (
    <>    
    <div className={styles.container}>
        <h1>Contact Us</h1>
        <p>Want to get in touch? Send us a message and we will be in touch within one business day</p>
    </div>
    <div className={styles.row}>

        <div className={styles.container1}>
            <div className={styles.contactcol}>
                <i className='fa fa-home'></i>
                <span>
                    <h5>XYZ Road, ABC Building</h5>
                    <p>Surrey, BC</p>
                </span>
            </div>
            <div className={styles.contactcol}>
                <i className='fa fa-phone'></i>
                <span>
                    <h5>+1(778)-100-1000 </h5>
                    <p>Monday to Saturday, 10AM to 6PM</p>
                </span>
            </div>

            <div className={styles.contactcol}>
                <i className='fa fa-envelope-o'></i>
                <span>
                    <h5>card@cybercard.com</h5>
                    <p>Email us your query</p>
                </span>
            </div>
        </div>
    
        <div className={styles.contactcol}>
            <form action=''>
            <h1>Questions? </h1>
            <p>Please drop your message below and we will be in touch with you shortly</p>
                <input type='text' placeholder='Enter your name' required />
                <input type='email' placeholder='Enter email address' required />
                <input type='text' placeholder='Enter your subject' required />
                <textarea rows='8' placeholder='Message' required></textarea>
                <button type ='submit' className={styles.btn}>Send Mesasage</button>
            </form>
        </div>
    </div>
        
    </>
  );
};

export default ContactUs;
