import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <div class={styles.contact}>
        <div class={styles.contactText}>
          <h4 id = "contactus">Contact us</h4>
          <p>Email: card@cybercard.com</p>
          <p>Phone: 778-100-1000</p>
        </div>
      </div>

      <div class={styles.footer}>
        <div class={styles.footerText}>
          2021 Cybercard &copy Licensed under CSTP 2107
        </div>
      </div>
    </>
  );
};

export default Footer;
