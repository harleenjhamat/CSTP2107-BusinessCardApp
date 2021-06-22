import styles from "../styles/aboutus.module.scss";
import { Container } from "@material-ui/core";

const AboutUs = () => {
  return (
    <>
    <div className="col d-flex justify-content-center">
      <div className={styles.card}>
          <Container>
            <div className={styles.aboutus}>
              <h2 className={styles.header} >About Us</h2>
                <p className={styles.aboutusText}>
                  Cybercard is the new way to share cards, whether it be for your
                  business or personal use! Our goal is to provide a safe and
                  innovative way for people connect with each other amidst the global
                  pandemic. This app is proudly created by the CSTP students at VCC.
                </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
