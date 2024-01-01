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
        <div className="hero-overlay  "></div>
        <div className="hero-content text-center text-neutral-content opacity-100 ">
          <div className="max-w-5xl 			">
            <h1 className="mb-5 text-5xl font-extrabold ">
              <span className="text-4xl text-rose-500 font-medium ">
                SOMOS UN EQUIPO{" "}
              </span  >
              <br /> <span className="font-light text-slate-200 ">DE PROFESIONALES EN</span>{" "}
              <br /> <span className="text-white">DISEÑOS DE PROYECTOS</span> <br />{" "}
              <span className="text-slate-200">ARQUITECTONICOS</span>{" "}
            </h1>
            <p className="mb-5 text-white font-bold"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
