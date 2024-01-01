import React from "react";
import { CardServiceLanding } from "./Card";
import Stats from "./Stats";

const ServiciosLanding = () => {
  return (
    <>
      <div className="flex flex-col  ">
        <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center mb-14 gap-7 m-44">
          <figure>
            <img
              src="https://jpconsultoriatesis.com/wp-content/uploads/2023/03/1.png"
              alt=""
            />
            <Stats />
          </figure>

          <figure>
            <img
              src="https://jpconsultoriatesis.com/wp-content/uploads/2023/03/3.png"
              alt=""
            />
            <Stats />
          </figure>
          <figure>
            <img
              src="https://jpconsultoriatesis.com/wp-content/uploads/2023/03/4.png"
              alt=""
            />
            <Stats />
          </figure>
          <figure>
            <img
              src="https://jpconsultoriatesis.com/wp-content/uploads/2023/03/2.png"
              alt=""
            />
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
