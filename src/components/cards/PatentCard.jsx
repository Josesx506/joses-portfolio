import React from 'react';
import { FaLightbulb } from "react-icons/fa6";
import Link from 'next/link';

export default function PatentCard({ title, authors, link }) {
  return (
    <div style={{display:'flex', alignItems: 'flex-start', gap:'0.5em'}}>
      <div><FaLightbulb fill="rgb(255,177,76)" style={{width:'1em', height:'1em'}} /></div>
      <div>
        <span>{title}</span>&nbsp;
        {authors}
        &nbsp;<em><Link target='blank' style={{textDecoration:'underline'}} href={`${link}`}>link</Link></em>
      </div>
    </div>
  )
}
