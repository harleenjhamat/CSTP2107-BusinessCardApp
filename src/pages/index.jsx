// App Landing Page
import Card from "../components/Card";
import Instructions from "../components/Instruction";
import styles from "../styles/landingPage.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card />
      <Instructions />
    </div>
  );
}
