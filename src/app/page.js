import Image from "next/image";
import styles from "./page.module.css";
import TechStack from "@/components/TechStack";
import FeatPrjs from "@/components/FeatPrjs";

export default function Home() {
  return (
    <div className={styles.page}>
      Welcome to portfolio
      <TechStack />
      <FeatPrjs />
    </div>
  );
}
