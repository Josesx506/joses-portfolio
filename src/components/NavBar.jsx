'use client';

import my_logo from '@/images/logo.svg';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
    }
  }, []);

  function openMenu(e) {
    e.stopPropagation();
    setIsOpen(true)
  }

  function closeMenu(e) {
    e.stopPropagation();
    setIsOpen(false)
  }

  function updateHash(e, val) {
    e.stopPropagation();
    setHash(val);
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.cntr}>
        <div className={styles.hamburger}>
          {isOpen ? <GrClose onClick={closeMenu} /> : <CiMenuFries onClick={openMenu} />}
        </div>
        <nav className={styles.navCntr}>
          <a className={styles.logo} href='/'>
            <Image src={my_logo} alt='website logo' width={32} height={32} />
          </a>

          <ul className={`${styles.navList} ${isOpen ? styles.activenav : ''}`}>
            <li><Link className={`${styles.navLink} ${pathname === '/' && !hash ? styles.activelink : ''}`}
              onClick={(e) => updateHash(e, null)}
              href="/">Home</Link></li>
            <li><Link className={`${styles.navLink} ${pathname === '/' && hash === '#featuredProjects' ? styles.activelink : ''}`}
              onClick={(e) => updateHash(e, '#featuredProjects')}
              href="/#featuredProjects">Projects</Link></li>
            <li><Link className={`${styles.navLink} ${pathname === '/education' ? styles.activelink : ''}`}
              onClick={closeMenu} href="/education">Education</Link></li>
            <li><Link className={`${styles.navLink} ${pathname === '/experience' ? styles.activelink : ''}`}
              onClick={closeMenu} href="/experience">Experience</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}