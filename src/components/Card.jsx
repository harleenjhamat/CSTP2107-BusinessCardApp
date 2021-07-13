import styles from "../styles/Card.module.scss";
import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();

  const handleGetStart = () => {
    router.push("/custom-card");
  };

  return (
    <>
      <div className={styles.container}>
      <div className={styles.banner}>
        <p>You Had My at Card Hello!</p>
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

export default Card;
