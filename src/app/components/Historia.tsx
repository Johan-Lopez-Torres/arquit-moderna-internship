import Image from "next/image";
import React from "react";

const Historia = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen p-10 gap-3" >
        <div className=" lg:1/2  mr-5">
          <Image
            className="w-full  h-full object-cover rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:opacity-60 duration-150"
            src="/images/proyectos/limpieza_tanques/tanques (10).jpeg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 bg-footer rounded-2xl p-6">
          <h1 className="text-center font-extrabold text-3xl mb-3 bg-">HISTORIA</h1>
          <p className="p-4 text-lg leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A maiores
            aperiam eos! Exercitationem ducimus culpa perferendis dolore
            distinctio, tempora quo nulla? Repellendus architecto ipsum magnam
            accusantium perferendis, harum in placeat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. In omnis repellat recusandae
            numquam modi autem nemo eaque. Ea, deserunt aspernatur voluptatum,
            minus earum inventore delectus, minima iste doloribus explicabo
            ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo tempora, corrupti magni soluta, culpa consectetur earum
            praesentium enim ea quaerat voluptatibus voluptatum optio et
            sapiente quibusdam ipsum alias? Neque, magni?
          </p>
        </div>
      </div>
    </>
  );
};

export default Historia;
