"use client"

import styles from '@/styles/sections/experience.module.css';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

export default function Experience() {

  const [viewProj, setViewProj] = useState(false);
  const [details, setDetails] = useState(false);

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    {
      loading: () => <p>Map Loading....</p>,
      ssr: false
    }
  ), [])

  function toggleView(e) {
    setViewProj((prev)=>{
      if (prev) {
        setDetails(false);
        return false
      } else {
        return true
      }
    });
  }

  function toggleDetails(e) {
    setDetails((prev)=>{
      if (!prev) {
        setViewProj(true);
      }
      return !prev
    });
  }

  return (
    <section className={styles.mapsection}>
      <div className={styles.instructions}>
        <div>Scroll to zoom, and toggle layers (top-right map) to filter projects by region.</div>
        <div>Toggle to view projects 
          <span> <input type='checkbox' checked={viewProj} onChange={toggleView} /> </span> 
          <em>Expand details?</em> <span><input type='checkbox' checked={details} onChange={toggleDetails} /></span>
        </div>
      </div>
      <div className={styles.mapdiv}>
        <Map position={[36.523151, -100.391400]} zoom={3} scroll={true} view={viewProj} details={details} />
      </div>
    </section>
  )
}
