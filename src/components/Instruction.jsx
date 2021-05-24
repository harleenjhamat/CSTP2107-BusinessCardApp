import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/instruction.module.scss";

const Instructions = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className={styles.card}>
                Choose a template
                <p>
                  Start by selecting a template for your card. We have a wide
                  range of templates that come in different colours, designs and
                  business logos. If you do not like any template, no worries!
                  You can customize your card by selecting a blank template.
                </p>
              </h2>
            </div>
            <div className="col-4">
              <Image src="/1.png" alt="instruction1" width={200} height={400} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <Image src="/2.png" alt="instruction2" width={200} height={400} />
            </div>
            <div className="col-8">
              <h2 className={styles.card}>
                Customize your card
                <p>
                  At this stage, you can make customizations to your card, Like
                  changing the colour, font and size of the text or adding
                  another text field. Along with that, you can also have an
                  image on your card which makes it look more professional.{" "}
                </p>
              </h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className={styles.card}>
                Save and share
                <p>
                  After making final changes to your card, you can easily save
                  your card to your device. Moreover, we are providing you with
                  another option too, i.e, directly share it with your friends,
                  family or colleagues. See, how fun and easy it is to make a
                  card!
                </p>
              </h2>
            </div>
            <div className="col-4">
              <Image src="/3.png" alt="instruction3" width={200} height={400} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Instructions;
