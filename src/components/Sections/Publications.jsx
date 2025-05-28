import { publications } from '@/data/education';
import styles from '@/styles/sections/publications.module.css';
import Link from 'next/link';

export default function Publications() {
  return (
    <section>
      <h2 style={{textAlign: 'center', paddingBottom: '1em'}} >Publications</h2>
      <div className={styles.publicationsList}>
        {publications.map((manu) => (
          <div key={manu.id} className={styles.publicationItem}>
            <div >
              {manu.authors.split('|').map((auth, idx) => {
                if (auth.includes('Omojola')) { return <b key={idx}>{auth}</b> }
                else { return <span key={idx}>{auth}</span> }
              })}
            </div>
            <div>({manu.year}).</div>
            <div>"{manu.title}"</div>
            <div style={{ fontStyle: 'oblique' }}>{manu.journal}</div>
            <Link target='blank' href={manu.doi}>DOI</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
