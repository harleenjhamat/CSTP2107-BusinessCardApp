import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const [session, loading] = useSession();

  console.log(session);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div className="container-fluid">
          <Image
            className="navbar-brand"
            src="/assets/logo2.png"
            width={150}
            height={50}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-grow-1">
              <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-1 justify-content-center">
                <li className="nav-item">
                  <a className={` ${styles.navbarContact}`} href="#aboutus">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className={` ${styles.navbarContact}`} href="#contactus">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={` ${styles.navbarContact} `}
                    href="#instructions"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            {!session && (
              <button className={`${styles.button}`} onClick={() => signIn()}>
                Login
              </button>
            )}
            {session && (
              <>
                <img
                  className="img-thumbnail round mx-2"
                  src={session.user.image}
                  width="50"
                />
                <p className={styles.userNameText}>Welcome, {session.user.name}!</p>
                <button
                  className={`${styles.button}`}
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
