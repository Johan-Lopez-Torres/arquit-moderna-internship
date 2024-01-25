import Link from "next/link";
import React from "react";
import styles from "./styles-component/Footer.module.scss";
import { SvgFacebook, SvgTwitter, SvgVisa, SvgYoutube } from "./SvgBoilerplate";

const servicios = [
  {
    id: 1,
    nombre: "Planos",
  },
  {
    id: 2,
    nombre: "Fachada 3D",
  },
  {
    id: 3,
    nombre: "Diseño exterior e interior",
  },
  {
    id: 4,
    nombre: "Construccioón de obra",
  },
  {
    id: 5,
    nombre: "Remodelación de obra",
  },
  {
    id: 6,
    nombre: "Ampliación de obra",
  },
];

const contactoInfo = [
  {
    id: 1,
    nombre: "Av. Pacífico Centro Ferretero | Tienda N° 62",
  },
  {
    id: 2,
    nombre: "93432432",
  },
  {
    id: 3,
    nombre: "sangers.corp@gmail.com",
  },
];

const description: String =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at velit architecto officiis rem. Quaerat adipisci ipsam, aspernatur explicabo sed ipsa! Atque explicabo nihil rem, quas alias in repudiandae assumenda?";

const Footer = () => {
  return (
    <>
      <footer
        className={`bg-neutral footer footer-center   text-base-content rounded  mt-10`}
      >
        <nav className="">
          <div className="grid grid-flow-col gap-4 pt-10">
            <a>
              <SvgTwitter />
            </a>
            <a className="mx-8">
              <SvgYoutube />
            </a>
            <a>
              <SvgFacebook />
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-4 px-10">
          <div className="">
            <h1 className="mb-3 font-extrabold text-xl">ARQUIT MODERNA</h1>
            <p className="text-left font-medium">{description}</p>
          </div>
          <div>
            <div className="servicios y contacto">
              <div className="">
                <h1 className="font-extrabold text-xl mb-3">SERVICIOS</h1>
                <ul className="text-left list-disc">
                  {servicios.map((servicio) => (
                    <li className="mb-1" key={servicio.id}>
                      <Link href={`/servicios/${servicio.nombre}`}>
                        <h2>{servicio.nombre}</h2>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-xl  ">NOSOTROS</h1>
            <ul className="text-md">
              <li>Mision y visión</li>
              <li>Historia</li>
              <li>Equipo</li>
              <li></li>
            </ul>
            <h1 className="font-bold text-lg  ">NOSOTROS</h1>
            <h1 className="font-bold text-lg  ">NOSOTROS</h1>

          
          </div>
          <div className="flex flex-col content-around ">
            <h1 className="mb-3 font-extrabold text-xl ">CONTÁCTENOS</h1>
            <ul className="mb-4">
              {contactoInfo.map((contacto) => (
                <li className="text-left " key={contacto.id}>
                  <Link href={`/nosotros/${contacto.nombre}`}>
                    <h2>{contacto.nombre} </h2>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="contacto">
              <button className="btn bg-rose-700 min-h-min h-10 text-xs">
                {" "}
                CONTACTANOS
              </button>
            </div>
          </div>
        </div>
        <SvgVisa />

        <aside className="w-full h-14  border-t-4 border-indigo-500 p-0">
          <p className="text-md font-extrabold">
            Copyright © 2024 - All right reserved by ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
