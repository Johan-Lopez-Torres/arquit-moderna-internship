"use server";
import React from "react";

const images = [
  "domus (1).png",
  "domus (2).png",
  "domus (3).png",
  "domus (4).png",
  "domus (5).png",
  "domus (6).png",
  "domus (7).png",
  "domus (8).png",
  "domus (9).png",
  "domus (10).png",
  "domus (11).png",
  "domus (12).png",
  "domus (13).png",
  "domus (14).png",
  "domus (15).png",
  "domus (16).png",
  "domus (17).png",
  "domus (18).png",
  "domus (19).png",
  "domus (20).png",
  "domus (21).png",
  /* "../proyecto_gadiel/gadiel (1).png",
  "../proyecto_gadiel/gadiel (2).png",
  "../proyecto_gadiel/gadiel (3).png",
  "../proyecto_gadiel/gadiel (4).png",
  "../proyecto_gadiel/gadiel (5).png",
  "../proyecto_gadiel/gadiel (6).png",
  "../proyecto_gadiel/gadiel (7).png",
  "../proyecto_gadiel/gadiel (8).png",
  "../proyecto_gadiel/gadiel (9).png",
  "../proyecto_gadiel/gadiel (10).png", */
  "../proyecto_ecuador/ecuador (1).jpeg",
  "../proyecto_ecuador/ecuador (2).jpeg",
  "../proyecto_ecuador/ecuador (3).jpeg",
  "../proyecto_ecuador/ecuador (4).jpeg",
  "../proyecto_ecuador/ecuador (5).jpeg",
  "../proyecto_ecuador/ecuador (6).jpeg",
  "../proyecto_ecuador/ecuador (7).jpeg",
  "../proyecto_ecuador/ecuador (8).jpeg",
  "../proyecto_ecuador/ecuador (9).jpeg",
  "../proyecto_ecuador/ecuador (10).jpeg",
  "../proyecto_ecuador/ecuador (11).jpeg",
  "../proyecto_ecuador/ecuador (12).jpeg",
  "../proyecto_ecuador/ecuador (13).jpeg",

];

const images2 = [
  "../proyecto_gadiel/gadiel (1).png",
  "../proyecto_gadiel/gadiel (2).png",
  "../proyecto_gadiel/gadiel (3).png",
  "../proyecto_gadiel/gadiel (4).png",
  "../proyecto_gadiel/gadiel (5).png",
  "../proyecto_gadiel/gadiel (6).png",
  "../proyecto_gadiel/gadiel (7).png",
  "../proyecto_gadiel/gadiel (8).png",
  "../proyecto_gadiel/gadiel (9).png",
  "../proyecto_gadiel/gadiel (10).png",
]



const path = "/images/proyectos/proyecto_domus/";

const page = () => {
  return (
    <>
      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8  ">
        {images.map((image, index) => (
            <div key={index} className="relative mb-6  ">
              <img
                src={`${path}${image}`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 bg-negro bg-opacity-70 text-white">
                <h1 className="font-bold text-md">Proyecto Domus</h1>
              </div>
            </div>
          ))}
           {images2.map((image, index) => (
            <div key={index} className="relative mb-6  ">
              <img
                src={`${path}${image}`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 bg-purple bg-opacity-70 text-white">
                <h1 className="font-bold text-md">Proyecto Gadiel</h1>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default page;
