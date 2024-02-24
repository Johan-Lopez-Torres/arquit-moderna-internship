import React from "react";

const MisionVision = () => {
  return (
    <>
      <div className="flex bg-negro flex-col md:flex-row min-h-screen justify-center items-center  ">
        <div className=" w-full     md:w-1/2  p-12 ">
          <h1 className="text-center text-4xl text-rojo font-bold">
            MISION
          </h1>
          <p className="p-6 leading-10 text-xl mb-7">
          Ser reconocidos como líderes innovadores en el campo de la arquitectura, siendo una fuente de inspiración para la creación de espacios que mejoren la calidad de vida y respeten el entorno, tanto a nivel local como global. Nos esforzamos por ser pioneros en el diseño sostenible y en la integración de tecnologías emergentes para crear soluciones arquitectónicas vanguardistas y significativas.
          </p>
          <div className="flex justify-center">
            <div className="flex justify-center">
              {/* <div className="w-60 h-60 flex items-center justify-center rounded-full bg-[#E91E31]">
                <img
                  src="/images/iconos/banco.png"
                  className="w-36 h-36"
                  alt=""
                />
              </div> */}
              <div className="flex flex-row justify-center">
                <img className="w-48 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150" src="/images/iconos/banco.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full md:w-1/2  p-12 ">
          <h1 className="text-center text-4xl text-rojo font-bold">
            VISION
          </h1>
          <p className="p-6 leading-10 text-xl mb-7">
          Buscar el reconocimiento como líderes innovadores en la industria de la arquitectura, inspirando la creación de espacios que enriquezcan la calidad de vida y preserven el entorno a nivel local y global. Nos destacamos por ser pioneros en el diseño sostenible y la adopción de tecnologías emergentes, desarrollando soluciones arquitectónicas vanguardistas y de gran impacto.
          </p>
         
          <div className="flex flex-row justify-center">
            <img className="w-48 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150" src="/images/iconos/gorro.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MisionVision;
