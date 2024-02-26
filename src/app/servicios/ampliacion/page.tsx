import React from "react";
import GridLayoutServicios from "@/app/components/GridLayoutServicios";
import DataServicios from "@data/Servicios.json";
import { WrapperPage } from "@/app/components/utils";

//Imagenes y string de la pagina
const imagenes = DataServicios[5].GridLayoutProps;
const strings = DataServicios[5].GridLayoutProps;

const page = () => {
  return (
    <WrapperPage>
      <GridLayoutServicios
        imagen1={imagenes.imagenes[0].src}
        imagen2={imagenes.imagenes[1].src}
        imagen3={imagenes.imagenes[2].src}
        texto={strings.texto}
        titulo={strings.titulo}
      />
    </WrapperPage>
  );
};

export default page;
