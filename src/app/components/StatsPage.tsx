import React from "react";
import Stats from "./Stats";

const StatsPage = () => {
  return (
    <>
      <div className="h-screen  bg-negro ">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center  gap-7  ">
          <figure className="">
            <div className="flex justify-center">
              <img
                className="w-40 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/hogar.png"
                alt=""
              />
            </div>
            <Stats />
          </figure>
          <figure>
            <div className="flex justify-center">
              <img
                className="w-40 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/lapicero.png"
                alt=""
              />
            </div>
            <Stats />
          </figure>
          <figure>
            <div className="flex justify-center">
              <img
                className="w-40 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/usuarios.png"
                alt=""
              />
            </div>
            <Stats />
          </figure>
          <figure>
            <div className="flex justify-center">
              <img
                className="w-40 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150"
                src="/images/iconos/globo.png"
                alt=""
              />
            </div>
            <Stats />
          </figure>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
