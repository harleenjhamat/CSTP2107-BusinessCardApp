/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 */

import styles from "../styles/login.module.scss";

const GoogleLoginButton = ({ handleSignIn }) => {
  return (
    <>
      <div className={styles.googleBtn} onClick={() => handleSignIn()}>
        <div className={styles.googleIconWrapper} >
          <img className={styles.GoogleIcon} src="/assets/google_Logo.svg" />
        </div>
        <p className={styles.btnText}>
          <b>Sign in with Google</b>
        </p>
      </div>
    </>
  );
};

export default GoogleLoginButton;
