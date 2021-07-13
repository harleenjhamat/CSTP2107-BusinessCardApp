import styles from "../styles/aboutus.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>    
    <div className={styles.wrap}>
        <h1>About Us</h1>
        <p>Learn about our company and us. We are growing every single day.</p>
    </div>
      <div className={styles.wrapper}>
        <div className="my-4">
          <div className="row align-items-center justify-content-around">
            <div className={`col-12 col-md-5 order-md-2 p-1`}>   
                <img 
                  src="/assets/cc1.PNG"
                  alt="card"
                  width={530}
                  height={300}
                />
                <br></br>
                <br></br>
                <img
                  src="/assets/cc2.PNG"
                  alt="card"
                  width={530}
                  height={300}
                />
            </div>
            <div className={`col-12 col-md-6 order-md-1 ${styles.card}`}>
              <h1>ABOUT CYBERCARD</h1>
              <p>
              Cybercard is the new way to share cards, whether it be for your
              business or personal use! Our goal is to provide a safe and
              innovative way for people connect with each other amidst the global
              pandemic. This app is proudly created by the CSTP students at VCC.
              </p>
              <h1 className= {styles.head}>WHAT WE STAND FOR</h1>
              <p>
                We believe that during this ongoing pandemic, it's really hard to physically exchange
                business cards with one another. Therefore cybercard can help you with digitally exchanging business cards. <br />
                At CyberCard, we have made it very easy to create cards. Read the instruction manual at the Home Page and start
                creating the cards you love and share it with others. We make sure that you and your business grow everday.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className = {styles.h}> Why Cybercard?</h1>
        <p className={styles.para}>With millions of happy customers across the world, we're confident we know what it 
          takes to help you customize and share your cards. Our services are packed with easy choosing, creating, customizing 
          and sharing your cards all across the world. We have got you covered with your card at hello.</p>
      </div>
          <div className={styles.container1}>
              <h1>OUR CORE VALUES</h1><br/>
              <div className={styles.cards}>
                <div className={styles.car}>
                  <img src="/assets/v1.png"/>
                  <h1>Integrity</h1>
                  <p>We are guided by the principles of integrity and professionalism for every point of contact in our professional and personal lives</p>
                </div>

                <div className={styles.car}>
                  <img src="/assets/v2.png"/>
                  <h1>Diversity</h1>
                  <p>We value and embrace diversity in the backgrounds, cultures, interests and experiences within our organization.</p>
                </div>

                <div className={styles.car}>
                  <img src="/assets/v3.png"/>
                  <h1>Community Involvement</h1>
                  <p>We believe in an obligation to give back through dedicatoin of time and leadership by our associated within their communities.</p>
                </div>
              </div>
            </div>
      <div className = {styles.container2}>
      <h1>MEET OUR CYBERCARD TEAM</h1><br/>
        <div className={styles.profiles}>
          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img1.jpg"/>
            <h3 className={styles.username}>Michael Kashkov</h3>
            <h5>Team Member</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img2.jpg"/>
            <h3 className={styles.username}>Eric</h3>
            <h5>Team Member</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img3.jpg"/>
            <h3 className={styles.username}>Pokai Huang</h3>
            <h5>Team Member</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img4.jpg"/>
            <h3 className={styles.username}>Karla Barrera</h3>
            <h5>Team Member</h5>
          </div>
        </div>
      </div>
      <div className = {styles.container2}>
        <div className={styles.profiles}>
        <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img5.jpg"/>
            <h3 className={styles.username}>Harleen Jhamat</h3>
            <h5>Team Member</h5>
          </div>
    
          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img6.jpg"/>
            <h3 className={styles.username}>Rayyan</h3>
            <h5>Team Member</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img7.jpg"/>
            <h3 className={styles.username}>Ian</h3>
            <h5>Team Member</h5>
          </div>
          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img8.jpg"/>
            <h3 className={styles.username}>Jaisika Singh</h3>
            <h5>Team Member</h5>
          </div>
        </div>
      </div>
      <br /><br />
      
    </>
  );
};

export default AboutUs;
