import { useRouter } from "next/router";

import Card from "../components/Card";
import Instructions from "../components/Instruction";
import styles from "../styles/landingPage.module.scss";

export default function Home() {
  const router = useRouter();

  // const handleGetStart = () => {
  //   router.push("/custom-card");
  // };

  return (
    <div className={styles.container}>
      <Card />
      <Instructions />
      {/* <button className={styles.callForActionBtn} onClick={handleGetStart}>
        Start Now
      </button> */}
    </div>
  );
}
