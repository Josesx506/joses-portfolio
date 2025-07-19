import React from 'react';
import Experience from '@/components/section/Experience';

export default function page() {
  const expStyle = {
    fontFamily: 'Inter',
    display: 'grid',
    gap: '3em',
    paddingBottom: '2em',
    gridTemplateRows: "1fr"
  }
  return (
    <Experience />
  )
}
