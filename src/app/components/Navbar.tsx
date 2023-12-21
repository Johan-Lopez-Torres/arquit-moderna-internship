import React from "react";
import styles from "./styles-component/Navbar.module.css";
import Link from "next/link";

const servicios: string = "servicios";
const planos: string = "servicios/planos";

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
                      <li>
                        <a href="#">DISTRIBUCIÓN</a>
                      </li>
                      <li>
                        <a href="">CORTES Y ELEVACIONES</a>
                      </li>
                      <li>
                        <a href="">INSTALACIÓN SANITARIA (AGUA)</a>
                      </li>
                      <li>
                        <a href="">INSTALACIÓN SANITARIA (DESAGUE)</a>
                      </li>
                      <li>
                        <a href="">INSTALACIÓN ELÉCTRICA</a>
                      </li>
                      <li>
                        <a href="">ESTRUCTURA - CIMENTACIÓN</a>
                      </li>
                      <li>
                        <a href="">ESTRUCTURA - ALIGERADO</a>
                      </li>
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
            className="btn btn-ghost text-2xl text-rose-600 font-extrabold pr-1 "
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
                    <li>
                      <a href="#">DISTRIBUCIÓN</a>
                    </li>
                    <li>
                      <a href="">CORTES Y ELEVACIONES</a>
                    </li>
                    <li>
                      <a href="">INSTALACIÓN SANITARIA (AGUA)</a>
                    </li>
                    <li>
                      <a href="">INSTALACIÓN SANITARIA (DESAGUE)</a>
                    </li>
                    <li>
                      <a href="">INSTALACIÓN ELÉCTRICA</a>
                    </li>
                    <li>
                      <a href="">ESTRUCTURA - CIMENTACIÓN</a>
                    </li>
                    <li>
                      <a href="">ESTRUCTURA - ALIGERADO</a>
                    </li>
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
              <Link href={"/contacto"}>CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
