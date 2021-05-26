import styles from "../styles/aboutUs.module.scss";

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutus}>
        <div className={styles.aboutusText}>
          <h4 id = "aboutus">About Us</h4>
          <p>
            Cybercard is the new way to share cards, whether it be for your
            business or personal use! Our goal is provide a safe and innovative
            way for people connect with each other during the current global
            pandemic. This app is proudly created by CSTP students at VCC.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
