import React from "react";
import Stats from "./Stats";

const StatsPage = () => {
  return (
    <>
      <div className=" min-h-screen lg:h-screen  bg-rojo  ">
        <h1 className="text-5xl text-center text-white font-bold pt-8 pb-0">
          ¿Por qué elegirnos?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center  gap-7 pt-16 ">
          <div className="border-4 border-white py-4 px-4 rounded-2xl ">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <div className="stat p-0">
              <div className="stat-figure text-primary"></div>
              
              <div className="stat-value text-xl text-white flex justify-center pt-4">
                Experiencia y Profesionalismo
              </div>
              
            </div>
          </div>
          <div className="border-4 border-white py-4 px-4 rounded-2xl ">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <div className="stat p-0">
              <div className="stat-figure text-primary"></div>
              
              <div className="stat-value text-xl text-white flex justify-center pt-4">
                Diseño Personalizado
              </div>
              
            </div>
          </div>
          <div className="border-4 border-white py-4 px-4 rounded-2xl ">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/gorro.png"
                alt=""
              />
            </div>
            <div className="stat p-0">
              <div className="stat-figure text-primary"></div>
              
              <div className="stat-value text-xl text-white flex justify-center pt-4">
                Transparencia y Comunicación
              </div>
              
            </div>
          </div>
          <div className="border-4 border-white py-4 px-4 rounded-2xl ">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/lapicero.png"
                alt=""
              />
            </div>
            <div className="stat p-0">
              <div className="stat-figure text-primary"></div>
              
              <div className="stat-value text-xl text-white flex justify-center pt-4">
                Excelencia en la Ejecución
              </div>
              
            </div>
          </div>
          <div className="border-4 border-white py-4 px-4 rounded-2xl ">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <div className="stat p-0">
              <div className="stat-figure text-primary"></div>
              
              <div className="stat-value text-xl text-white flex justify-center pt-4 ">
                Satisfacción del Cliente
              </div>
              
            </div>
          </div>
          <div className="border-4 border-white py-4 px-4 rounded-2xl ">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/lapicero.png"
                alt=""
              />
            </div>
            <div className="stat p-0">
              <div className="stat-figure text-primary"></div>
              
              <div className="stat-value text-xl text-white flex justify-center pt-4">
                Experiencia y Profesionalismo
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
