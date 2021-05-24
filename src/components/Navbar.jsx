import Link from "next/link";
import styles from "../styles/NavBar.module.scss";

export default function Navbar(params) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <div className={styles.logo}>
            <img src="/assets/logo1.png" alt="CyberCard Logo" />
          </div>

          <div className={styles.navbarMiddle}>
            <Link href="#aboutus">
              <a className={styles.navbarContact}>About us</a>
            </Link>
            <Link href="#contactus">
              <a className={styles.navbarContact}>Contact us</a>
            </Link>
            <Link href="#instructions">
              <a className={styles.navbarContact}>Instructions</a>
            </Link>
          </div>

          <div>
            <button className={styles.button} href="/">
              Sign up
            </button>
            <button className={styles.button} href="/">
              Login
            </button>
          </div>
        </ul>
      </nav>
      <div></div>
    </>
  );
}
