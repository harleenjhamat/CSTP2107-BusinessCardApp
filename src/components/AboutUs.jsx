import styles from "../styles/aboutus.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>    
    <div className={styles.wrap}>
        <h1>About Us</h1>
        <p>Learn about our company and us. We are growing every single day.</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L40,69.3C80,107,160,181,240,192C320,203,400,149,480,128C560,107,640,117,720,149.3C800,181,880,235,960,240C1040,245,1120,203,1200,202.7C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>      
    </div>
      <div className={styles.wrapper}>
        <div className="my-4">
          <div className="row align-items-center justify-content-around">
            <div className={`col-12 col-md-5 order-md-2 p-1`}>   
                <Image
                  src="/assets/card-1.jpg"
                  alt="card"
                  width={1000}
                  height={1000}
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
                <div className={styles.container1}>
                <div className={styles.cards}>
                <div className={styles.car}>
                  <img src="/assets/v4.png"/>
                  <h1>Service Excellence</h1>
                  <p>We believe deeply in providing superior service at the highest level of coustesy and promptness to our internal and external customers.</p>
                </div>

                <div className={styles.car}>
                  <img src="/assets/v5.png"/>
                  <h1>Empowerment</h1>
                  <p>We empower our teammates to encourage one another, celebrate accomplishments and have a passion for professional development.</p>
                </div>

                <div className={styles.car}>
                  <img src="/assets/v6.png"/>
                  <h1>Inovation</h1>
                  <p>We believe persistent innovation in design, service and operations can differentiate our properties from the completion.</p>
                </div>
              </div>
          </div>
      <div className = {styles.container2}>
      <h1>MEET OUR CYBERCARD TEAM</h1><br/>
        <div className={styles.profiles}>
          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img1.jpg"/>
            <h3 className={styles.username}>Michael Kashkov</h3>
            <h5>Backend Manager</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img2.jpg"/>
            <h3 className={styles.username}>Eric</h3>
            <h5>Project Manager</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img3.jpg"/>
            <h3 className={styles.username}>Pokai Huang</h3>
            <h5>UI Team Lead</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img4.jpg"/>
            <h3 className={styles.username}>Karla</h3>
            <h5>Team Member</h5>
          </div>
        </div>
      </div>
      <div className = {styles.container2}>
        <div className={styles.profiles}>
        <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img5.jpg"/>
            <h3 className={styles.username}>Harleen Jhammat</h3>
            <h5>Software Tester</h5>
          </div>
    
          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img6.jpg"/>
            <h3 className={styles.username}>Rayyan</h3>
            <h5>Team Member</h5>
          </div>

          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img7.jpg"/>
            <h3 className={styles.username}>Ian</h3>
            <h5>Managing Partner</h5>
          </div>
          <div className={styles.profile}>
            <img className={styles.profileimg} src="/assets/img8.jpg"/>
            <h3 className={styles.username}>Jaisika Singh</h3>
            <h5>Team Member</h5>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <h1>Want to learn more about us?</h1>
        <a href="http://localhost:3000/ContactUs"><button className={styles.btn} >Contact Us</button></a>
      </div>

    </>
  );
};

export default AboutUs;
