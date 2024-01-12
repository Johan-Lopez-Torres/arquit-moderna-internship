import React from "react";
import styles from "./styles-component/Navbar.module.css";
import Link from "next/link";

const servicios: string = "servicios";
const planos: string = "servicios/planos";

const servicio=[
  {
    id:1,
    name:"FACHADA 3D",
    url:"servicios/fachada"
  },
  {
    id:2,
    name:"DISEÑO EXTERIOR E INTERIOR",
    url:"servicios/diseno"
  },
  {
    id:3,
    name:"CONSTRUCCIÓN DE OBRA",
    url:"servicios/construccion"
  },
  {
    id:4,
    name:"REMODELACIÓN DE OBRA",
    url:"servicios/remodelacion"
  },
  {
    id:5,
    name:"AMPLIACIÓN DE OBRA",
    url:"servicios/ampliacion"
  }
]


const planosServicios = [
  {
    id: 1,
    name: "DISTRIBUCIÓN",
    url: "servicios/planos/distribucion",
  },
  {
    id: 2,
    name: "CORTES Y ELEVACIONES",
    url: "servicios/planos/cortes-elevaciones",
  },
  {
    id: 3,
    name: "INSTALACIÓN SANITARIA (AGUA)",
    url: "servicios/planos/instalacion-sanitaria-agua",
  },
  {
    id: 4,
    name: "INSTALACIÓN SANITARIA (DESAGUE)",
    url: "servicios/planos/instalacion-sanitaria-desague",
  },
  {
    id: 5,
    name: "INSTALACIÓN ELÉCTRICA",
    url: "servicios/planos/instalacion-electrica",
  },
  {
    id: 6,
    name: "ESTRUCTURA - CIMENTACIÓN",
    url: "servicios/planos/estructura-cimentacion",
  },
  {
    id: 7,
    name: "ESTRUCTURA - ALIGERADO",
    url: "servicios/planos/estructura-aligerado",
  },
];

const navbarData = [
  {
    id: 1,
    name: "INICIO",
    url: "/",
  },
  {
    id: 2,
    name: "SERVICIOS",
    url: "/servicios",
  },
  {
    id: 3,
    name: "NOSOTROS",
    url: "/nosotros",
  },
  {
    id: 4,
    name: "TESTIMONIOS",
    url: "/testimonios",
  },
  {
    id: 5,
    name: "UBÍCANOS",
    url: "/ubicanos",
  },
  {
    id: 6,
    name: "CONTACTO",
    url: "/contacto",
  },
];

const Navbar = () => {
  return (
    <>
      <div className=" navbar bg-base-100 px-10 ">
        <div className="navbar-start">
          <div className="dropdown flex lg:justify-evenly">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              className={` ${styles.menu}   menu menu-vertical dropdown-content z-50 rounded-none sm:menu-horizontal `}
            >
              <li className=" ">
                <a href={` /${servicios}`}>SERVICIOS</a>
                <ul
                  className={` ${styles.submenu}  bg-slate-700 ml-1.5 p-0 flex z-50`}
                >
                  <li className=" ">
                    <a href={` /${planos}`}>PLANOS</a>
                    <ul
                      className={` ${styles.submenu2}  bg-slate-700   -ml-1  p-0   z-50 `}
                    >
                      {planosServicios.map((servicio) => (
                        <li className="mb-1" key={servicio.id}>
                          <Link href={`/${servicio.url}`}>
                            <h2>{servicio.name}</h2>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {
                    servicio.map((servicio)=>(
                      <li key={servicio.id}>
                        <Link href={`/${servicio.url}`}>
                          <h2>{servicio.name}</h2>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>

              <li>
                <Link href={"/"}>INICIO</Link>
              </li>
              <li>
                <Link href={"/servicios"}>CONTACTO</Link>
              </li>
              <li>
                <Link href={"/nosotros"}>NOSOTROS</Link>
              </li>
              <li>
                <Link href={"/testimonios"}>TESTIMONIOS</Link>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost text-3xl text-rose-600 font-extrabold pr-1 "
          >
            ARQUIT MODERNA
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={` ${styles.menu}  menu menu-vertical rounded-none sm:menu-horizontal font-bold `}
          >
            <li>
              <Link href={"/"}>INICIO</Link>
            </li>
            <li className=" ">
              <Link href={"/servicios"}>SERVICIOS</Link>{" "}
              <ul
                className={` ${styles.submenu}  bg-slate-700 justify-center p-0 flex z-50`}
              >
                <li className=" ">
                  <a href={` /${planos}`}>PLANOS</a>
                  <ul
                    className={` ${styles.submenu2}  bg-slate-700   -ml-1  p-0   z-50 `}
                  >
                    {planosServicios.map((servicio) => (
                      <li className="mb-1" key={servicio.id}>
                        <Link href={`/${servicio.url}`}>
                          <h2>{servicio.name}</h2>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href={` /${servicios}/fachada`}>FACHADA 3D</a>
                </li>
                <li>
                  <a href={` /${servicios}/diseno`}>
                    DISEÑO EXTERIOR E INTERIOR
                  </a>
                </li>
                <li>
                  <a href={` /${servicios}/construccion`}>
                    CONSTRUCCIÓN DE OBRA
                  </a>
                </li>
                <li>
                  <a href={` /${servicios}/remodelacion`}>
                    REMODELACIÓN DE OBRA
                  </a>
                </li>
                <li>
                  <a href={` /${servicios}/construccion`}>
                    CONSTRUCCIÓN DE OBRA
                  </a>
                </li>
                <li>
                  <a href={` /${servicios}/ampliacion`}>AMPLIACIÓN DE OBRA</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/nosotros"}>NOSOTROS</Link>
            </li>
            <li>
              <Link href={"/testimonios"}>TESTIMONIOS</Link>
            </li>
            <li>
              <Link href={"/ubicanos"}>UBÍCANOS</Link>
            </li>
            <li>
              <Link href={"/contacto"}>CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
