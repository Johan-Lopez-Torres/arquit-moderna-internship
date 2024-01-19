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
            <p className="mb-5  font-extrabold  leading-9 ">
              <span className="text-5xl text-pink font-bold  ">
                SOMOS UN EQUIPO{" "}
              </span>
              <br />{" "}
              <span className="font-bold text-white  text-5xl">
                DE PROFESIONALES EN
              </span>{" "}
              <br /> <span className=" text-5xl ">DISEÑOS DE PROYECTOS</span>{" "}
              <br />{" "}
              <span className="text-white font-bold text-5xl">ARQUITECTÓNICOS</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
