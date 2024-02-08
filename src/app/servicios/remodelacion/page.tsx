import GridLayoutServicios from "@/app/components/GridLayoutServicios";
import React from "react";
import DataServicioGrid from "@data/Servicios.json";

const imagenes = DataServicioGrid[4].GridLayoutProps.imagenes;
const strings = DataServicioGrid[4].GridLayoutProps;

const page = () => {
  return (
    <div className="m-16">
      <GridLayoutServicios
        imagen1={imagenes[0].src}
        imagen2={imagenes[1].src}
        imagen3={imagenes[2].src}
        texto={strings.texto}
        titulo={strings.titulo}
      />
    </div>
  );
};

export default page;
