import { Timeline } from '@/components/motion/Timeline';
import { conferences, schools, publications } from '@/data/education';
import avatar from '@/images/joses_avatar.png';
import styles from '@/styles/education.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Education() {
  return (
    <div className={styles.educationCntr}>
      <section>
        <h2 className={styles.sectionTitle} >Educational achievements timeline</h2>
        <div className={styles.universities}>
          <div className={styles.uniList}>
            {schools.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <div className={styles.uniName}>
                  <h3>{edu.university}</h3>
                  <div>{edu.period}</div>
                </div>
                <div />
                <div className={styles.uniDetails}>
                  <h4>{edu.description.degree} {edu.description.major}
                    &nbsp;{edu.description.minor && <span>({edu.description.minor})</span>}
                  </h4>
                  <p>{edu.description.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.timelineCntr}>
            <Timeline avatarUrl={avatar} />
          </div>
        </div>
      </section>
      <section>
        <h2 className={styles.sectionTitle} >Publications</h2>
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
              <div style={{fontStyle:'oblique'}}>{manu.journal}</div>
              <Link target='blank' href={manu.doi}>DOI</Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 style={{ paddingBottom: '0' }} className={styles.sectionTitle} >Conferences</h2>
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
    </div>
  )
}
