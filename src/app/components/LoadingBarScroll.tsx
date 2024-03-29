"use client";
import { motion, useScroll, useSpring } from "framer-motion";

import React from "react";

const LoadingBarScroll = async () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    
  });
  return (
    <>
      <motion.div className="progress-bar z-50  " style={{ scaleX, backgroundColor: "#FF0055"  }}></motion.div>
    </>
  );
};

export default LoadingBarScroll;
