import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen p-10 gap-3">
        <div className=" w-1/2 mr-5 ">
          <img
            className="w-full h-full object-cover p-3  rounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:opacity-60 duration-150"
            src="/images/proyectos/limpieza_tanques/tanques (10).jpeg"
            alt=""
          />
        </div>
        <div className=" w-1/2 bg-footer rounded-2xl p-6">
          <h1 className="text-center font-extrabold text-3xl mb-3 ">
            Arquit Moderna
          </h1>
          <p className="p-4 text-lg leading-relaxed">
            Somos una empresa comprometida con la excelencia en cada proyecto,
            garantizando la satisfacción y tranquilidad de nuestros clientes.
            Ofrecemos servicios integrales de arquitectura, desde diseño y
            planificación hasta ejecución y supervisión, cumpliendo con los más
            altos estándares de calidad y cumplimiento normativo. Confía en
            nosotros para hacer realidad tus ideas arquitectónicas con
            profesionalismo y dedicación
          </p>
          <div className="flex flex-col items-center gap-8  md:flex-row md:gap-12 justify-center  ">
            <div className="flex flex-col  gap-3 justify-center items-center w-32">
              <h1 className="text-xl font-bold text-center">
                Satisfaccion asegurada
              </h1>
              <img
                className="w-40  justify-center"
                src="/images/asesoramiento.png"
                alt=""
              />
            </div>
            <div className="flex flex-col  gap-3 justify-center items-center   w-32">
              <h1 className="text-xl font-bold text-center">
                Asesoramiento personalizado
              </h1>
              <img
                className="w-40  justify-center"
                src="/images/asesoramiento.png"
                alt=""
              />
            </div>
            <div className="flex flex-col  gap-3 justify-center items-center   w-32">
              <h1 className="text-xl font-bold text-center">
                Cotizacion gratuita
              </h1>
              <img
                className="w-40  justify-center"
                src="/images/asesoramiento.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
