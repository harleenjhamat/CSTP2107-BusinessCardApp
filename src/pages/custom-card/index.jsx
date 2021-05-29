import { Fragment } from 'react'
import Head from 'next/head'
import Navbar from './../../components/Navbar';
import styles from "../../styles/customcard.module.scss";
import Image from "next/image";

function CustomCard (props) {
  return (
    <Fragment>
      <Head>
        <title>Custom Card</title>
        <meta name='description' content='Customize your Card' />
      </Head>
      <Navbar />
      <div className="container-fluid m-0 p-0 mb-4">
      {/* TEXT */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 mt-4">
            <h1 className={`${styles.cen} ${styles.cardSlogan}`}>
            Customize your Card:
            </h1>
          </div>
        </div>
        {/* BORDER */}
        <div className={`row justify-content-center my-2 mx-2`}>
          <div className={`col-12 col-md-10 col-lg-5 my-2 ${styles.cardBorder} ${styles.cen}`}>
            {/* INNER PART */}
            <div className="row justify-content-center">
              <div className={`col-7 my-4 ${styles.left}`}>
                <Image className={`border border-info border-5 rounded-3`} src="/assets/business_logo.png" alt="instruction1" width={200} height={70}/>
                <h2 className={`mt-3`}>Business name</h2>
                <h4 className={`mt-4`}>Bob Pancakes</h4>
                <p>+1(236)333-22-11</p>
              </div>
              <div className={`col-4 my-4 ${styles.cen}`}>
                <Image className={`border border-info border-5 ${styles.photoUpload}`} src="/assets/img_avatar.png" alt="instruction1" width={200} height={200}/>
                <p className={`p-0 m-0 ${styles.cen}`}>my@email.com</p>
                <p className={`p-0 m-0 ${styles.cen}`}>powered by cydercard</p>
              {/* END OF CARD */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CustomCard
