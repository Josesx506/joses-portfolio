import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiJest, SiMongodb, SiPassport, SiPrisma, SiPytorch, SiTensorflow, SiVitest } from "react-icons/si";
import { TbBrandAdobeIllustrator, TbBrandPython, TbCircleLetterZFilled } from "react-icons/tb";
import TechIcon from './icons/TechIcon';

export default function TechStack() {
  return (
    <div style={{ display: 'grid', gap: '0.75em' }}>
      <h2 id="techStack">My Tech Stack</h2>
      <h3>Front End</h3>
      <div style={{ display: 'flex', gap: '1em' }}>
        <TechIcon hoverColor={'rgb(228,77,38)'} name={'HTML'} > <FaHtml5 /> </TechIcon>
        <TechIcon hoverColor={'rgb(21,114,182)'} name={'CSS'} > <FaCss3Alt /> </TechIcon>
        <TechIcon hoverColor={'rgb(240,219,79)'} name={'JS'} > <IoLogoJavascript /> </TechIcon>
        <TechIcon hoverColor={'rgb(97,218,251)'} name={'React'} > <FaReact /> </TechIcon>
        <TechIcon hoverColor={'var(--foreground)'} name={'Next.js'} > <RiNextjsLine /> </TechIcon>
        <TechIcon hoverColor={'rgb(34,91,188)'} name={'Zustand'} > <TbCircleLetterZFilled /> </TechIcon>
        <TechIcon hoverColor={'rgb(52,1,1)'} fillColor={'rgb(252,157,0)'} name={'Illustrator'} > <TbBrandAdobeIllustrator /> </TechIcon>
        <TechIcon hoverColor={'rgb(252,199,43)'} name={'Vitest'} > <SiVitest /> </TechIcon>
      </div>
      <h3>Backend</h3>
      <div style={{ display: 'flex', gap: '1em' }}>
        <TechIcon hoverColor={'rgb(131,205,41)'} name={'Node.js'} > <FaNodeJs /> </TechIcon>
        <TechIcon hoverColor={'rgb(247,223,50)'} fillColor={'rgb(53,106,151)'} name={'Python'} > <TbBrandPython /> </TechIcon>
        <TechIcon hoverColor={'var(--foreground)'} name={'Express'} > <SiExpress /> </TechIcon>
        <TechIcon hoverColor={'rgb(214,255,0)'} name={'Passport'} > <SiPassport /> </TechIcon>
        <TechIcon hoverColor={'rgb(51,103,145)'} name={'PostgreSQL'} > <BiLogoPostgresql /> </TechIcon>
        <TechIcon hoverColor={'rgb(0,237,100)'} name={'MongoDB'} > <SiMongodb /> </TechIcon>
        <TechIcon hoverColor={'var(--foreground)'} name={'Prisma'} > <SiPrisma /> </TechIcon>
        <TechIcon hoverColor={'rgb(153,66,91)'} name={'Jest'} > <SiJest /> </TechIcon>
      </div>
      <h3>Others</h3>
      <div style={{ display: 'flex', gap: '1em' }}>
        <TechIcon hoverColor={'rgb(230,138,35)'} name={'TensorFlow'} > <SiTensorflow /> </TechIcon>
        <TechIcon hoverColor={'rgb(231,71,43)'} name={'Pytorch'} > <SiPytorch /> </TechIcon>
        <TechIcon hoverColor={'var(--foreground)'} name={'GitHub'} > <FaGithub /> </TechIcon>
        <TechIcon hoverColor={'rgb(253,152,39)'} name={'AWS'} > <FaAws /> </TechIcon>
      </div>
    </div>
  )
}
