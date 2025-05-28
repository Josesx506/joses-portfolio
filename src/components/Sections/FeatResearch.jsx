import React from 'react'
import styles from '@/styles/sections/featrsch.module.css';
import { articles } from '@/data/education';
import Link from 'next/link';

export default function FeatResearch() {
  return (
    <section>
      <h2 style={{textAlign: 'center', paddingBottom: '1em'}}>Featured Research</h2>
      <div className={styles.rschTimeline} >
        {articles.map((article, idx) => (
          <div key={article.id} className={`${styles.articleCntr} ${idx % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.content}>
              <h3>{article.year}</h3>
              <Link target='blank' href={article.url}>{article.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
