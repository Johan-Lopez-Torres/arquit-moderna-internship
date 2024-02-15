import React from "react";
import { CardServiceLanding } from "./Card";
import Stats from "./Stats";

const ServiciosLanding = () => {
  return (
    <>
      <div className="flex flex-col  ">
        <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center mb-14 gap-7 m-20">
          <figure>
            <img className="w-40" src="/images/iconos/hogar.png" alt="" />
            <Stats />
          </figure>

          <figure>
            <img className="w-40" src="/images/iconos/lapicero.png" alt="" />
            <Stats />
          </figure>
          <figure>
            <img className="w-40" src="/images/iconos/usuarios.png" alt="" />
            <Stats />
          </figure>
          <figure>
            <img className="w-40" src="/images/iconos/globo.png" alt="" />
            <Stats />
          </figure>
        </div>
        <figure>
          <div className="flex justify-center mb-8">
            <h1 className="font-semibold text-4xl text-slate-200">
              NUESTROS SERVICIOS
            </h1>
          </div>
        </figure>
        <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center m-12 gap-5 ">
          <CardServiceLanding />
        </div>
      </div>
    </>
  );
};

export default ServiciosLanding;
