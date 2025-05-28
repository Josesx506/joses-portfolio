"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from '@/styles/motion/timeline.module.css';


export function Timeline({ avatarUrl }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 5%", "start 5%"], //Start scroll anim when you're 5% away from the top of viewport
  });

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.div
        className={styles.avatarWrapper}
        style={{
          top: 0,
          height: "100%",
          y: useTransform(scrollYProgress, [0, 1], ["100%", "0%"]),
        }}
      >
        <div className={styles.avatarImageContainer}>
          <Image src={avatarUrl} alt="Profile" fill className={styles.avatarImageFill} />
        </div>
      </motion.div>
      <div className={styles.timelineBar}>
        <motion.div
          className={styles.timelineProgress}
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </div>
  );
}