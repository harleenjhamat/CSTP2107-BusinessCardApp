import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";




const Navbar = () => { 
  return (
    <>
      <Fragment>
        
          <nav className="navbar navbar-expand-lg navbar-light">
            
              <div className="container-fluid">
              <div className={styles.navbar}>
                  <Image
                    className="navbar-brand" 
                    src="/assets/logo2.png"
                    width={150}
                    height={50}  
                  />
                
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="#aboutus">
                        <a className={styles.navbarContact}>About us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#contactus">
                        <a className={styles.navbarContact}>Contact us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#instructions">
                        <a className={styles.navbarContact}>Instructions</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className={styles.button} href="/">
                        Sign up
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className={styles.button} href="/">
                        Login
                      </button>
                    </li>
                  </ul>   
                </div>
                </div>
              </div>
          </nav>
           
         
        
      </Fragment>
    </>
  );
}

export default Navbar;
