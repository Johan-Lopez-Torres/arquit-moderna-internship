"use client";
import React from "react";
import NavbarData from "@data/NavbarDataRefactorizado.json";
interface Link {
  id: number;
  name: string;
  url: string;
  servicios?: Link[];
  TiposPlanos?: Link[];
}

const NavbarMejorado: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Tu Marca</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 z-50">
            {NavbarData.NavbarLinks.map((link: Link) => (
              <li key={link.id}>
                {link.servicios || link.TiposPlanos ? (
                  <details>
                    <summary>
                      <a href={link.url}>{link.name}</a>
                    </summary>
                    <ul className="menu">
                      {link.servicios && (
                        <li>
                          <ul className="menu">
                            {link.servicios.map((servicio: Link) => (
                              <li key={servicio.id}>
                                <a href={servicio.url}>{servicio.name}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}

                      {link.TiposPlanos && (
                        <li>
                          <details>
                            <summary>{link.name}</summary>
                            <ul className="menu">
                              {link.TiposPlanos.map((tipoPlano: Link) => (
                                <li key={tipoPlano.id}>
                                  <a href={tipoPlano.url}>{tipoPlano.name}</a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      )}
                    </ul>
                  </details>
                ) : (
                  <a href={link.url}>{link.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMejorado;
