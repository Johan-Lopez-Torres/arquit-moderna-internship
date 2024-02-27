"use client";

import Image from "next/image";
import React from "react";

const ImageComponent = ({ image }: { image: string }) => {
  return (
    <>
      <img
        src={image}
        alt="Picture of the author"
        className="object-cover h-full w-full   rounded-xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:opacity-80 duration-100    border-teal-600 hover:border-4 "
      />
    </>
  );
};

type GridLayoutServiciosProps = {
  imagen1: string;
  imagen2: string;
  imagen3: string;
  texto: string;
  titulo: string;
};

const GridLayoutServicios: React.FC<GridLayoutServiciosProps> = ({
  imagen1,
  imagen2,
  imagen3,
  texto,
  titulo,
}) => {
  return (
    <>
      {/* IMAGENES GRID */}
      <div className="  text-white">
        <div className="grid gap-8 grid-cols-1 grid-rows-5	    sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-4  lg:max-h-screen lg:grid-cols-5 lg:grid-rows-6">
          <div className="col-span-1 row-span-1 sm:col-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3 ">
            <ImageComponent image={imagen1} />
          </div>
          {/** Ocultar los divs en pantallas más pequeñas que sm */}
          <style jsx>{`
            @media (max-width: 640px) {
              .hide-on-mobile {
                display: none;
              }
            }
          `}</style>
          <div className="hide-on-mobile col-span-1 md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-3 lg:row-start-4">
            <ImageComponent image={imagen2} />
          </div>
          <div className="hide-on-mobile col-span-1 md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-3 lg:row-start-4">
            <ImageComponent image={imagen3} />
          </div>

          {/* TEXTO GRID */}
          <div className=" p-16 col-span-1 row-span-5 row-start-1 sm:col-span-2 sm:row-span-2 sm:row-start-1 md:col-span-3 md:row-span-2 md:row-start-1 lg:col-span-3 lg:row-span-6 bg-[#242526] rounded-xl">
            <h1 className="text-center font-extrabold text-3xl pb-4">
              {titulo}
            </h1>
            <p className="leading-loose">{texto}</p>
            <div className="flex flex-col items-center gap-8  md:flex-row md:gap-12 justify-center pt-20 ">
              <div className="flex flex-col  gap-3 justify-center items-center w-64">
                <h1 className="text-xl font-bold text-center">
                  Satisfaccion asegurada
                </h1>
                <img
                  className="w-40  justify-center"
                  src="/images/satisfaccion.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col  gap-3 justify-center items-center  w-64">
                <h1 className="text-xl font-bold text-center">
                  Asesoramiento personalizado
                </h1>
                <img
                  className="w-40  justify-center"
                  src="/images/asesoramiento.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col  gap-3 justify-center items-center  w-64">
                <h1 className="text-xl font-bold text-center">
                  Cotizacion gratuita
                </h1>
                <img
                  className="w-40  justify-center"
                  src="/images/cotizacion.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayoutServicios;
