import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen z-[1] min-w-screen  py-0 my-0"
        style={{
          backgroundImage:
            "url(https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2016-01/100x100_prefab_01.jpg?VersionId=VgFgdH9RaNMSpVeURWjI_99.EVkLUDre&itok=F2QL2XJZ)",
        }}
      >
        <div className="hero-overlay backdrop-blur-[2px] bg-black/50   "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-extrabold ">
              <span className="text-2xl text-rose-400 font-medium">
                SOMOS UN EQUIPO{" "}
              </span>
              <br /> <span className="font-light">DE PROFESIONALES EN</span>{" "}
              <br /> <span>DISEÑOS DE PROYECTOS</span> <br />{" "}
              <span>ARQUITECTONICOS</span>{" "}
            </h1>
            <p className="mb-5 text-white font-bold"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
