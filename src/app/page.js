import Image from "next/image";
import styles from "./page.module.css";
import TechStack from "@/components/Sections/TechStack";
import FeatPrjs from "@/components/Sections/FeatPrjs";
import PatentCard from "@/components/cards/PatentCard";
import Testimonials from "@/components/Sections/Testimonials";

export default function Home() {
  return (
    <div className={styles.page}>
      Welcome to portfolio
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
    </div>
  );
}
