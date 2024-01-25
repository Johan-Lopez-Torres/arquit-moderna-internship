import Image from "next/image";
import React from "react";

const Historia = () => {
  return (
    <>
      <div className="flex flex-row h-screen p-10">
        <div className="w-1/2 mr-5">
          <Image
            className="w-full  h-full object-cover rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:opacity-60 duration-150"
            src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-center font-extrabold text-3xl mb-3">HISTORIA</h1>
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
