import styles from "@/styles/cards/ftprjcd.module.css";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

export default function FPCard({ title, description, img, github, liveurl }) {
  return (
    <div style={{"--url": `url(${img})`}} className={styles.cardCntr}>
      <div className={styles.cardImg}>
      </div>
      <div className={styles.cardDetails}>
        <h3>{title}</h3>
        <div>{description}</div>
        <div className={styles.linksCntr}>
          <div className={styles.extLink}>
            <LuGithub /> <Link href={github} target="blank">GitHub</Link>
          </div>
          {liveurl &&
            <div><IoOpenOutline /> <Link href={liveurl} target="blank">Live demo</Link></div>}
        </div>
      </div>
    </div>
  )
}