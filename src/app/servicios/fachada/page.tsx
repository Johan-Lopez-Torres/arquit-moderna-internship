import GridLayoutServicios from "@/app/components/GridLayoutServicios";
import React from "react";
import DataServicios from "@data/Servicios.json";
import { WrapperPage } from "@/app/components/utils";

const imagenes = DataServicios[1].GridLayoutProps;
const strings = DataServicios[1].GridLayoutProps;

const page = () => {
  return (
    <>
      <WrapperPage>
        <GridLayoutServicios
          imagen1={imagenes.imagenes[0].src}
          imagen2={imagenes.imagenes[1].src}
          imagen3={imagenes.imagenes[2].src}
          texto={strings.texto}
          titulo={strings.titulo}
        />
      </WrapperPage>
    </>
  );
};

export default page;
