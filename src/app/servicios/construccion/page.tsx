import React from 'react'
import GridLayoutServicios from "@/app/components/GridLayoutServicios";
import DataServicios from "@data/Servicios.json";


//Imagenes y string de la pagina
const imagenes = DataServicios[3].GridLayoutProps;
const strings = DataServicios[3].GridLayoutProps;


const page = () => {
  return (
    <div className=" m-16 ">
    <GridLayoutServicios
      imagen1={imagenes.imagenes[0].src}
      imagen2={imagenes.imagenes[1].src}
      imagen3={imagenes.imagenes[2].src}
      texto={strings.texto}
      titulo={strings.titulo}
    />
  </div>
  )
}

export default page