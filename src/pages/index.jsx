/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 *    Home page of our App
 */

import { useRouter } from "next/router";

import Card from "../components/Card";
import Instructions from "../components/Instruction";
import styles from "../styles/landingPage.module.scss";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <Card />
      <Instructions />
    </div>
  );
}
