"use client";

import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
];

const BentoGrid = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useEffect(() => {
    () => {
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <main className={`${styles.main}  `}>
        <div className={styles.spacer}> </div>
        <div ref={container} className={`rounded-xl ${styles.gallery} `}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y} />
          <Column images={[images[9], images[10], images[11]]} y={y2} />
        </div>
        <div className={styles.spacer}> </div>
      </main>
    </>
  );
};

export default BentoGrid;

type ColumnProps = {
  images: string[];
  y?: any;
};

const Column = ({ images, y = 0 }: ColumnProps) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((image: string, index: number) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${image}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
