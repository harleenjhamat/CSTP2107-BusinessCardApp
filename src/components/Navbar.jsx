import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div className="container-fluid">
          <Link href="/">
            <a>
              <Image
                className="navbar-brand"
                src="/assets/logo2.png"
                width={150}
                height={50}
              />
            </a>
          </Link>

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

            {/* Bootstrip Spinners on auth loading */}
            {loading && (
              <>
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden"></span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden"></span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden"></span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="visually-hidden"></span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden"></span>
                </div>
              </>
            )}

            {/* Show Login Button if User has not logged in and the current page is not /auth/login */}
            {!loading && !session && router.pathname !== "/auth/login" && (
              <button
                className={`${styles.button}`}
                onClick={() =>
                  router.push("/auth/login" + `${router.pathname}`)
                }
              >
                Login
              </button>
            )}

            {/* Hide Logout Button if the user has logged in  */}
            {session && (
              <>
                <img
                  className="img-thumbnail round mx-2"
                  src={session.user.image}
                  width="50"
                />
                <p className={styles.userNameText}>
                  Welcome, {session.user.name}!
                </p>
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
