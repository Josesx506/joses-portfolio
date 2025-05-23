import React from 'react';
import { data } from '@/data/featuredprjs';
import FPCard from './cards/FPCard';

export default function FeatPrjs() {
  return (
    <section style={{ display: 'grid', gap: '0.75em' }}>
      <h2 style={{ textAlign: 'center' }} id='featuredProjects'>Featured Projects</h2>
      <div style={{display:'grid', gap:'1em', gridTemplateColumns:'repeat( auto-fit, minmax(270px, 1fr)'}}>
        {data.map((prj)=>(<FPCard key={prj.id} {...prj} />))}
      </div>
    </section>
  )
}
