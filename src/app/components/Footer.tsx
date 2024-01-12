import Link from "next/link";
import React from "react";
import styles from "./styles-component/Footer.module.scss";

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
        className={`bg-neutral footer footer-center p-10  text-base-content rounded bg mt-10`}
      >
        <nav className="">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="mx-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-4 ">
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
            <h1 className="font-extrabold text-xl ">NOSOTROS</h1>
            <ul>
              <li>Mision y visión</li>
              <li>Historia</li>
              <li>Equipo</li>
              <li></li>
            </ul>
          </div>
          <div className="flex flex-col content-around">
            <h1 className="mb-3">CONTÁCTENOS</h1>
            <ul className="mb-4">
              {contactoInfo.map((contacto) => (
                <li key={contacto.id}>
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
        <svg
          enable-background="new 0 0 780 500"
          height="100"
          viewBox="0 0 780 500"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001"
            fill="white"
          />
          <path
            d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"
            fill="white"
          />
        </svg>
      
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
