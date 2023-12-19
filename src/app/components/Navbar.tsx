import React from "react";
import styles from "./styles-component/Navbar.module.css";
import Link from "next/link";

const servicios: string = "servicios";
const planos: string = "servicios/planos";

const Navbar = () => {
  return (
    <>
      <div className=" navbar bg-base-100 px-10 ">
        <div className="flex-1">
          <a
            href="/"
            className="btn btn-ghost text-2xl text-rose-600 font-extrabold"
          >
            ARQUIT MODERNA
          </a>
        </div>
        <div className="flex-none">
          <ul className={` ${styles.menu}  menu menu-horizontal rounded-none `}>
            <li className=" ">
              <a href="/">PROGRAMACION</a>
              <ul
                className={` ${styles.submenu}  bg-slate-700 ml-1.5 p-0 flex z-50`}
              >
                <li className=" ">
                  <a href="#" className="w-full">
                    PLANOS
                  </a>
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
              <Link href={"/servicios"}>SERVICIOS</Link>
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
