import React from "react";

const Cuadro = () => {
  return (
    <>
      <div className="w-full  py-6 mx-auto loopple-min-height-78vh text-slate-500 px-14 ">
        <div className="flex flex-wrap -mx-3 removable ">
          <div className="w-full max-w-full px-3 mb-4 sm:w-full sm:flex-none ">
            <div className=" shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl  p-4 mb-4  ">
              <div
                className="relative h-full overflow-hidden bg-cover py-6 rounded-xl  "
                style={{
                  backgroundImage: "url(/images/proyectos/ruta_unida/2.png)",
                }}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-800 to-slate-800 opacity-60"></span>
                <div className="relative z-10 flex flex-col flex-auto h-full p-4 ">
                  <h2 className="pt-2 mb-6 font-bold text-gray-300 text-lg sm:text-3xl text-end">
                    Diseño, innovación <br /> y calidad en cada proyecto
                  </h2>
                  <div>
                    <h1 className=" p-5 text-3xl sm:text-4xl md:text-6xl md:pl-44   text-white font-extrabold">
                      SERVICIOS
                    </h1>
                  </div>

                  <div className="flex flex-row justify-end">
                    <a
                      className="btn btn-error  mt-auto mb-0  leading-normal text-white font-bold group text-size-sm text-end"
                      href="/servicios"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuadro;
