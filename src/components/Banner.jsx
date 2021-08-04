/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description: This is the banner component in the landing page.
 */

import styles from "../styles/Card.module.scss";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  const handleGetStart = () => {
    router.push("/CustomCard");
  };

  return (
    <>
      <div className={styles.container}>
      <div className={styles.banner}>
        <p>You Had My Card At Hello!</p>
        <h1>Design and Share Your Business Card</h1>
      </div>
        <button
          className={`btn btn-lg fw-bold ${styles.getStartBtn}`}
          onClick={handleGetStart}
        >
          Get Started!
        </button>
      </div>
    </>
  );
};

export default Banner;
