import React from 'react';
import styles from '@/styles/tchicons.module.css'

export default function TechIcon({ children, name, hoverColor, fillColor, ...props }) {
  return (
    <div className={styles.parent}
      style={{ "--hoverColor": hoverColor, "--fillColor": fillColor }} 
      {...props}>
      {children}
      <div className={styles.childName}>{name}</div>
    </div>
  )
}
