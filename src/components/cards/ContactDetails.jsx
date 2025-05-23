import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { MdOutlineEmail } from "react-icons/md";

export default function ContactDetails() {
  const svgStyle={width:'2rem',height:'2rem'}
  return (
    <div style={{ display: 'flex', gap: '1em', alignItems: 'center', justifyContent: 'center' }}>
      <Link target='blank' href={'https://www.linkedin.com/in/joses-williams-299484100/'} >
        <FaLinkedin color='rgb(10,102,194)' style={svgStyle} />
      </Link>
      <Link target='blank' href={'https://github.com/Josesx506?tab=repositories'} ><SiGithub style={svgStyle} /></Link>
      <Link target='blank' href={'https://x.com/sui_generis_wj'} ><FaXTwitter style={svgStyle} /></Link>
      <Link target='blank' href={'mailto:josesomojola@gmail.com'} ><MdOutlineEmail style={svgStyle} /></Link>
    </div>
  )
}
