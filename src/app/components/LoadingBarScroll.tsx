import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

import React from "react";

const LoadingBarScroll = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="progress-bar z-50"
          style={{ scaleX }}
        >
            {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default LoadingBarScroll;
