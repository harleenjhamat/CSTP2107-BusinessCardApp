/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description: The is the navbar component.  
 */

import { signOut, useSession, signIn } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const [session, loading] = useSession();
  const signOutHandler = () => {
    sessionStorage.clear();
    signOut("google");
  };

  if (typeof window !== "undefined" && session) {
    sessionStorage.setItem("user", JSON.stringify(session.user));
    sessionStorage.setItem("name", JSON.stringify(session.user.name));
    sessionStorage.setItem("email", JSON.stringify(session.user.email));
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div className="container-fluid">
          {/* App Logo */}
          <Link href="/">
            <a>
              <Image
                className={`navbar-brand`}
                src="/assets/logo2.png"
                width={150}
                height={50}
              />
            </a>
          </Link>

          {/* Toggle Button displayed in mobile view */}
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

          {/* About and Contact Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-grow-1">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item py-3 py-md-0">
                  <Link href="/AboutUs">
                    <a className={` ${styles.navbarContact}`}>About</a>
                  </Link>
                </li>
                <li className="nav-item py-3 py-md-0">
                  <Link href="/ContactUs">
                    <a className={` ${styles.navbarContact}`}>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Spinners on auth loading */}
            {loading && (
              <>
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            )}

            {/* Show Login Button if User has not logged in and the current page is not /auth/login */}
            {!loading && !session && (
              <button
                className={`${styles.button}`}
                onClick={() => signIn("google")}
              >
                Login
              </button>
            )}

            {/* Hide Logout Button if the user has logged in  */}
            {session && (
              <>
                <Link href="/MainPage">
                  <a>
                    <img
                      className={`${styles.thumbnail} mx-3 my-2 my-md-0`}
                      src={session.user.image}
                      width="50"
                    />
                  </a>
                </Link>
                <p className={styles.userNameText}>
                  Welcome, {session.user.name}!
                </p>
                <button
                  className={`${styles.button}`}
                  // onClick={() => signOut("google")}
                  onClick={signOutHandler}
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
