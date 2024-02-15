import React from "react";
import FooterData from "@data/FooterData.json";
import { SvgFacebook, SvgTwitter, SvgYoutube } from "./SvgIcons";
import Link from "next/link";

const FooterEnhaced: React.FC = () => {
  return (
    <>
      <div className="bg-neutral p-11 pb-0">
        <nav className="mb-9">
          <div className="flex flex-row justify-center ">
            <a href="#" target="_blank">
              <SvgTwitter width={70} height={70} />
            </a>
            <a href="#" target="_blank" className="mx-8">
              <SvgYoutube width={70} height={70} />
            </a>
            <a href="#" target="_blank">
              <SvgFacebook width={70} height={70} />
            </a>
          </div>
        </nav>
        <div className="pb-6">
          <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-11 mt-6 ">
            <div className="">
              <h1 className="mb-3 font-extrabold text-xl text-center">
                ARQUIT MODERNA
              </h1>
              <p className="px-12 pt-0 sm:p-11 sm:pt-0 lg:p-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laboriosam cumque fugiat praesentium, et, nostrum,
                impedit possimus perspiciatis at voluptatum modi necessitatibus
                assumenda esse inventore labore vero iusto repellendus nihil?
              </p>
            </div>
            <div className="ml-12">
              <h1 className="font-extrabold text-xl mb-3 text-center">
                SERVICIOS
              </h1>
              <ul className="text-left list-disc ml-4">
                {FooterData.servicios.map((servicio) => (
                  <li className="mb-1" key={servicio.id}>
                    <Link href={`/servicios/${servicio.nombre}`}>
                      <h2 className="text-md link link-hover">
                        {servicio.nombre}
                      </h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-extrabold text-xl mb-2 text-center  ">
                NOSOTROS
              </h1>
              <ul className="text-md pl-3">
                {FooterData.Nosotros.map((nosotros) => (
                  <li
                    className="text-left list-disc   ml-11 "
                    key={nosotros.id}
                  >
                    <Link href={`/nosotros/${nosotros.nombre}`}>
                      <h2>{nosotros.nombre}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="mb-5 font-extrabold text-xl mb- text-center ">
                CONTÁCTENOS
              </h1>
              <ul className=" mb-6 px-8">
                {FooterData.ContactoInfo.map((contacto) => (
                  <li className="text-left " key={contacto.id}>
                    <Link href={`/nosotros/${contacto.nombre}`}>
                      <h2>{contacto.nombre} </h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <aside className="flex bg-neutral justify-center items-center w-full h-14  border-t-4 border-indigo-500   ">
        <p className="text-md font-extrabold">
          Copyright © 2024 - All right reserved by ACME Industries Ltd
        </p>
      </aside>
    </>
  );
};

export default FooterEnhaced;
