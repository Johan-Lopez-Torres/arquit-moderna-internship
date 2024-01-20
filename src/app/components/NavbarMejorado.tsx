"use client";
import React from "react";
import NavbarData from "@data/NavbarDataRefactorizado.json";

interface TipoPlano {
  id: number;
  name: string;
  url: string;
}

interface Servicio {
  id: number;
  name: string;
  url: string;
  TiposPlanos?: TipoPlano[];
}

interface NavbarLink {
  id: number;
  name: string;
  url: string;
  servicios?: Servicio[];
}

const NavbarMejorado: React.FC = () => {
  return (
    <>
      {/* imagen - icono - responsividad */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        {/* enlaces del navbar */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {NavbarData.NavbarLinks.map((navbarlink: NavbarLink) => (
              <li key={navbarlink.id}>
                <a className="btn btn-ghost">{navbarlink.name}</a>
                {navbarlink.name === "SERVICIOS" && (
                  <ul className="menu  bg-base-100 rounded-t-none">
                    {navbarlink.servicios?.map((servicio: Servicio) => (
                      <li key={servicio.id}>
                        <a className="btn btn-ghost">{servicio.name}</a>
                        {servicio.TiposPlanos && (
                          <ul className="menu  bg-base-100 rounded-t-none">
                            {servicio.TiposPlanos.map(
                              (tipoPlano: TipoPlano) => (
                                <li key={tipoPlano.id}>
                                  <a className="btn btn-ghost">
                                    {tipoPlano.name}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMejorado;
