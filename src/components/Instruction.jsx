import Image from "next/image";
import styles from "../styles/instruction.module.scss";

const Instructions = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="my-4">
          <div className="row align-items-center justify-content-around">
            <div className={`col-12 col-md-5 order-md-2 p-1`}>
                <Image
                  src="/assets/bot_choose.jpg"
                  alt="instruction1"
                  width={550}
                  height={305}
                />
            </div>
            <div className={`col-12 col-md-6 order-md-1 ${styles.card}`}>
              <h1>Choose a Template</h1>
              <p>
                Start by selecting a template: we have a wide range of templates in different colours, designs and
                business logos. Don't see one you like? You can start with a blank canvas and build from there! 
              </p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <div className="row align-items-center justify-content-around pt-4">
            <div className="col-6 col-md-4">
              <Image
                src="/assets/bot_custom.jpg"
                alt="instruction2"
                width={600}
                height={370.467}
                
              />
            </div>
            <div className={`col-12 col-md-6 order-md-1 ${styles.card}`}>
              <h1>Customize your Card</h1>
              <p>
                Now it's time to customize your card. You can change the colour, font and size of the text, or add another
                text field. You can even add images to give it a professional edge. You're in control.
              </p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="row align-items-center justify-content-around">
            <div className="col-12 col-md-5 order-md-2">
              <Image
                src="/assets/bot_share.jpg"
                alt="instruction3"
                width={550}
                height={305}
              />
            </div>
            <div className={`col-12 col-md-6 order-md-1 ${styles.card}`}>
              <h1>Save and Share</h1>
              <p>
                After adding those final touches, you can easily save
                your card to your device. Or take advantage of our sharing feature and instantly share it with your friends,
                family, and colleagues! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
