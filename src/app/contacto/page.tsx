import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex-col flex px-20 py-5 my-8 sm:flex-col md:flex-row lg:flex-row  items-center gap-6 ">
        <div className="w-1/2  h-full ">
          <div className=" flex flex-col justify-center  overflow-hidden h-full w-full  max-h-[1250px]  ">
            <div className="h-full w-full p-6  bg-base-300 rounded-md rounded-r-none shadow-md  ">
              <h1 className="text-3xl font-semibold text-center text-white ">
                CONTÁCTANOS
              </h1>
              <form
                action="https://formsubmit.co/arquit.moderna@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="label">
                    <span className="text-base label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    className="w-full input input-bordered "
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    className="w-full input input-bordered "
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="text-base label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Telefono</span>
                  </label>
                  <input
                    name="telefono"
                    placeholder="Telefono XXX-XXX-XXX"
                    className="w-full input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Asunto</span>
                  </label>
                  <input
                    name="asunto"
                    placeholder="Asunto"
                    className="w-full input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Mensaje</span>
                  </label>
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    className="w-full h-32 input input-bordered"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn text-white bg-rose-600 mt-7  btn-block hover:bg-violet-800"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full bg-black max-h-[1250px]">
          <img
            className="object-cover object-left rounded-lg opacity-60 rounded-l-none max-h-[1250px]"
            src="https://www.mstholding.com/blog/wp-content/uploads/2020/03/iStock-808364658-e1584002771559.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default page;
