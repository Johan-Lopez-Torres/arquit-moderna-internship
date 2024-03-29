
"use server";
import GridLayoutServicios from "@/app/components/GridLayoutServicios";
import DataServicios from "@data/Servicios.json";
import React from "react";

//Imagenes y string de la pagina
const imagenes = DataServicios[0].GridLayoutProps;
const strings = DataServicios[0].GridLayoutProps;

const page = () => {
  return (
    <div className=" m-16 mt-2 ">
      <GridLayoutServicios
        imagen1={imagenes.imagenes[0].src}
        imagen2={imagenes.imagenes[1].src}
        imagen3={imagenes.imagenes[2].src}
        texto={strings.texto}
        titulo={strings.titulo}
      />
    </div>
  );
};

export default page;
