"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 text-gray-400 font-semibold py-3 relative">
        <div className="flex-1">
          <Link
            href={"/"}
            className="btn btn-ghost text-2xl text-rose-600 font-extrabold"
          >
            ARQUIT MODERNA
          </Link>
        </div>
        <div className="flex-none relative">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link href={"/"}>INICIO</Link>
            </li>
            <li>
              <Link
                href={"servicios"}
                className="dropdown dropdown-hover relative"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                SERVICIOS
                <ul
                  tabIndex={0}
                  className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-full left-0 ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <a>PLANOS</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </Link>
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
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none"></ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
