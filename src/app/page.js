import Image from "next/image";
import styles from "./page.module.css";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className={styles.page}>
      Welcome to portfolio
      <TechStack />
    </div>
  );
}
