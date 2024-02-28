import React from "react";
import { CardServiceLanding } from "./Card";
import Stats from "./Stats";

const ServiciosLanding = () => {
  return (
    <>
      <div className="flex flex-col bg-[#1F2024] pb-20">
        <div className="flex flex-col justify-center mb-4 mt-20">
          <h1 className="font-semibold text-5xl  text-center text-white mb-9">
            Nuestros servicios
          </h1>
        </div>
        <div className="  grid grid-cols-1 mx-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center  gap-2 ">
          <CardServiceLanding />
        </div>
      </div>
    </>
  );
};

export default ServiciosLanding;
