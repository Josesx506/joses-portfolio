import { Timeline } from '@/components/motion/Timeline';
import { schools } from '@/data/education';
import avatar from '@/images/joses_avatar.png';
import styles from '@/styles/sections/universities.module.css';

export default function Universities() {
  return (
    <section>
      <h2 style={{textAlign: 'center', paddingBottom: '1em'}}>Educational Achievements</h2>
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
  )
}
