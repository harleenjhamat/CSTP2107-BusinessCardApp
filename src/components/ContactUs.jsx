import styles from "../styles/contactus.module.scss";
import Image from "next/image";


const ContactUs = () => {
  return (
    <>    
    <div className={styles.container}>
        <h1>Contact Us</h1>
        <p><b>Want to get in touch? Send us a message and we will get back to you within one business day</b></p>
    </div>
    <div className={styles.row}>

        <div className={styles.container1}>
            <div className={styles.contactcol}>
                <i className='fa fa-home'></i>
                <span>
                    <h5><b>VCC Downtown, 250 W Pender St</b></h5>
                    <p><b>Vancouver, BC</b></p>
                </span>
            </div>
            <div className={styles.contactcol}>
                <i className='fa fa-phone'></i>
                <span>
                    <h5><b>+1 (604) 871-7000</b></h5>
                    <p><b>Monday - Friday, 9:30AM to 4PM</b></p>
                </span>
            </div>

            <div className={styles.contactcol}>
                <i className='fa fa-envelope-o'></i>
                <span>
                    <h5><b>card@cybercard.com</b></h5>
                    <p><b>Email us your inquery</b></p>
                </span>
            </div>
        </div>
        <div className={styles.contactcol}>
            <form action=''>
            <h1>Questions?</h1>
            <p><b>Please leave your message below and we will be in touch with you shortly</b></p>
                <input type='text' placeholder='Enter your name' required />
                <input type='email' placeholder='Enter email address' required />
                <input type='text' placeholder='Enter your subject' required />
                <textarea rows='8' placeholder='Message' required></textarea>
                <button type ='submit' className={styles.btn}>Send Message</button>
            </form>
        </div>
    </div>
        
    </>
  );
};

export default ContactUs;
