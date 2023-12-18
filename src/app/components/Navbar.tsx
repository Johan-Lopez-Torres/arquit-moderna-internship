import React from "react";
import styles from "./styles-component/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className={` ${styles.menu}  menu menu-horizontal rounded-none `}>
            <li className=" ">
              <a href="/"  >PROGRAMACION</a>
              <ul className={` ${styles.submenu}  bg-slate-700 ml-1.5 p-0 flex`}>
                <li className=" ">
                  <a href="" className="w-full">
                    PLANOS
                  </a>
                  <ul
                    className={` ${styles.submenu2}  bg-slate-700   ml-0 p-0 `}
                  >
                    <li>
                      <a href="">REACT</a>
                    </li>
                    <li>
                      <a href="">vue</a>
                    </li>
                    <li>
                      <a href="">ANGULAR</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">BACKEND</a>
                  <ul className={` ${styles.submenu2}  bg-slate-700  ml-0 p-0`}>
                    <li>
                      <a href="">JAVA</a>
                    </li>
                    <li>
                      <a href="">PHP</a>
                    </li>
                    <li>
                      <a href="">NODE</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">About</a>
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
