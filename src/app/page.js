import ContactDetails from "@/components/cards/ContactDetails";
import PatentCard from "@/components/cards/PatentCard";
import FeatPrjs from "@/components/section/FeatPrjs";
import TechStack from "@/components/section/TechStack";
import Testimonials from "@/components/section/Testimonials";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import pai_icon from '@/images/pai_icon.png';
import { FaChevronCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="intro" className={styles.info}>
        <div className={styles.infoImage}>
          <picture>
            <source media="(min-width: 1025px)" srcSet="/potrait/Artboard300ppi.webp" />
            <source media="(min-width: 641px)" srcSet="/potrait/Artboard150ppi.webp" />
            <img src="/potrait/Artboard72ppi.webp" alt="Joses potrait Image" />
          </picture>
        </div>
        <div className={styles.infoText}>
          <div className={styles.infoGreeting} >
            Hi 👋🏽. I&apos;m Joses, a fullstack developer based in Arizona, USA
          </div>
          <h2 className={styles.infoSubtitle}>
            <span>Currently developing analytics tools for</span>
            &nbsp;<Link target="blank" style={{whiteSpace:'nowrap', color:'rgb(21,112,239)'}} href={'https://powerlabstech.com/'}>PowerLabs <Image src={pai_icon} width={20} height={20} alt="powerlabs logo" /></Link></h2>
          <ContactDetails />
        </div>
      </section>
      <Link className={styles.prjNavArrow} href={"#featuredProjects"}><FaChevronCircleDown size={"2rem"} /></Link>
      <TechStack />
      <FeatPrjs />
      <section style={{ display: 'grid', gap: '0.75em' }}>
        <h2 style={{ textAlign: 'center' }} id="patents">Patents</h2>
        <PatentCard
          title={'Training machine learning models with sparse input.'}
          authors={<span><em>Artem Goncharuk, Robert Clapp, Kevin Forsythe Smith, Shiang Yong Looi,
            Ananya Gupta, <b>Joses Omojola</b>, Min Jun Park.</em></span>}
          link={'https://patents.google.com/patent/US20240070459A1/en'}
        />
      </section>
      <Testimonials />
      <footer  style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Image 
          src="/sectigo_trust_seal_sm_82x32.png" 
          alt="Sectigo Trust Logo"
          width={82} height={32} />
      </footer>
    </div>
  );
}
