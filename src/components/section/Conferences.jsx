import { conferences } from '@/data/education';
import styles from '@/styles/sections/conferences.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Conferences() {
  return (
    <section>
      <h2 style={{ paddingBottom: '0', textAlign: 'center' }} >Conferences</h2>
      <div className={styles.annualConfCntr}>
        {conferences.map((conf) => (
          <div className={styles.annualConf} key={conf.year}>
            <h3>{conf.year}</h3>
            <div className={styles.annualEvents} >
              {conf.events.map((evts) => (
                <div className={styles.confEvt} key={evts.id}>
                  <div className={styles.confLogo}>
                    <Image src={evts.image} width={200} height={50} alt="organization logo" />
                  </div>
                  <Link target='blank' href={evts.url || '#'}>
                    <h4>{evts.title}</h4>
                    <div className={styles.evtAuthors}>
                      {evts.authors.split('|').map((auth, idx) => {
                        if (auth.trim() === 'Omojola, J.,') { return <b key={idx}>{auth}</b> }
                        else { return <span key={idx}>{auth}</span> }
                      })}
                      <span>. {evts.type} Presentation.</span></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
