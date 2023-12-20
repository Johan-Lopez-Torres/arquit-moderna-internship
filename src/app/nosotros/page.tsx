"use client";

import React from "react";
import { CardEmployee } from "../components/Card";
import { motion } from "framer-motion";

const page = () => {
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
          > <div className="flex flex-row justify-center">
          <a
            href="#"
            className="btn btn-success w-11/12 text-slate-100 font-extrabold text-xl"
          >
            PLANOS
          </a>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 m-12   min-h-screen justify-items-center ">
          <CardEmployee />
        </div>
        </motion.div>
     </div>
    </>
  );
};

export default page;
