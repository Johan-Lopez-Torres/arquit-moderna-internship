import React from "react";
import Stats from "./Stats";

const StatsPage = () => {
  return (
    <>
      <div className=" min-h-screen md:h-screen  bg-rojo ">
        <h1 className="text-5xl text-center text-white font-bold py-6">
          ¿Por qué elegirnos?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center  gap-7 py-8 ">
          <div className="border-4 border-white py-4 px-10 rounded-2xl">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <Stats />
          </div>
          <div className="border-4 border-white py-4 px-10 rounded-2xl">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/lapicero.png"
                alt=""
              />
            </div>
            <Stats />
          </div>
          <div className="border-4 border-white py-4 px-10 rounded-2xl">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/usuarios.png"
                alt=""
              />
            </div>
            <Stats />
          </div>
          <div className="border-4 border-white py-4 px-10 rounded-2xl">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/globo.png"
                alt=""
              />
            </div>
            <Stats />
          </div>
          <div className="border-4 border-white py-4 px-10 rounded-2xl">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <Stats />
          </div>
          <div className="border-4 border-white py-4 px-10 rounded-2xl">
            <div className="flex justify-center  ">
              <img
                className="w-28 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <Stats />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
