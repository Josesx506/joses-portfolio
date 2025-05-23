import styles from '@/styles/cards/tstmcd.module.css';
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";


export default function TestimonialCard({ author, body }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.cardBody}>
        <div className={styles.leftQuote}><FaQuoteLeft /></div>
        <div className={styles.bodyText}>{body.trim()}</div>  
        <div className={styles.rightQuote}><FaQuoteRight /></div>
      </div>
      <div className={styles.author}>- {author}</div>
    </div>
  )
}
