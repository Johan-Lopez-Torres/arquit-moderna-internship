"use client";
import React from "react";
import { CardService } from "../components/Card";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <div className="m-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.3, 0.8, 0.7, 1.01],
          }}
        >
          <div className="flex flex-row justify-center">
            <a
              href="#"
              className="btn btn-success w-11/12 text-slate-100 font-extrabold text-xl"
            >
              PLANOS
            </a>
          </div>

          <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-evenly justify-items-center my-10 gap-8 mx-10">
            <CardService />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
