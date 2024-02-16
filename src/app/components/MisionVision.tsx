import React from "react";

const MisionVision = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen justify-center items-center  ">
        <div className=" w-full     md:w-1/2  p-12 ">
          <h1 className="text-center text-4xl text-slate-100 font-bold">
            MISION
          </h1>
          <p className="p-6 leading-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            assumenda nam non saepe? Eius, inventore hic ducimus non, est fuga
            ipsam dolores neque quaerat assumenda a adipisci provident delectus.
            Exercitationem!
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
          <h1 className="text-center text-4xl text-slate-100 font-bold">
            VISION
          </h1>
          <p className="p-6 leading-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            assumenda nam non saepe? Eius, inventore hic ducimus non, est fuga
            ipsam dolores neque quaerat assumenda a adipisci provident delectus.
            Exercitationem!
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
