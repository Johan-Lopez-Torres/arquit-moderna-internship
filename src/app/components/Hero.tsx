import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen z-[1] min-w-screen  py-0 my-0 brightness-90 	"
        style={{
          backgroundImage:
            "url(https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2016-01/100x100_prefab_01.jpg?VersionId=VgFgdH9RaNMSpVeURWjI_99.EVkLUDre&itok=F2QL2XJZ)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content opacity-100 ">
          <div className="max-w-5xl 	backdrop-blur-sm  		">
            <p className="mb-5 text-5xl font-extrabold  leading-tight ">
              <span className="text-4xl text-rose-700 font-bold  ">
                SOMOS UN EQUIPO{" "}
              </span>
              <br />{" "}
              <span className="font-light text-slate-200 ">
                DE PROFESIONALES EN
              </span>{" "}
              <br /> <span className="text-white ">DISEÑOS DE PROYECTOS</span>{" "}
              <br />{" "}
              <span className="text-slate-200 font-light">ARQUITECTÓNICOS</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
