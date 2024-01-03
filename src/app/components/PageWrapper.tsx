"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
