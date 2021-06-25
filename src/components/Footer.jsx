import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={`${styles.contact}`}>
            <div className={styles.contactText}>
              <h2 id="contactus">Contact us</h2>
              <p>
                Email: card@cybercard.com
                <br></br> Phone: 778-100-1000
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className={styles.footer}>
            <div className={styles.footerText}>
              <hr />
              <p>2021 Cybercard © Licensed under CSTP 2107</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
