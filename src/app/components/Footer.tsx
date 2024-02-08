import Link from "next/link";
import React from "react";
import { SvgFacebook, SvgTwitter, SvgYoutube } from "./SvgIcons";
import FooterData from "@data/FooterData.json";

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
            <a href="#" target="_blank">
              <SvgTwitter 
              width={70}
              height={70}
              />
            </a>
            <a href="#" target="_blank" className="mx-8">
              <SvgYoutube
              width={70}
              height={70}
              />
            </a>
            <a href="#" target="_blank">
              <SvgFacebook
              width={70}
              height={70}
              />
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-4 px-10">
          <div className="main">
            <h1 className="mb-3 font-extrabold text-xl">ARQUIT MODERNA</h1>
            <p className="text-left font-medium">{description}</p>
          </div>
          <div>
            <div className="servicios y contacto">
                <h1 className="font-extrabold text-xl mb-3">SERVICIOS</h1>
                <ul className="text-left list-disc">
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
          </div>
          <div>
            <h1 className="font-extrabold text-xl mb-2 ">NOSOTROS</h1>
            <ul className="text-md pl-3">
              {
                FooterData.Nosotros.map((nosotros) => (
                  <li className="text-left list-disc  mb-2" key={nosotros.id}>
                    <Link href={`/nosotros/${nosotros.nombre}`}>
                      <h2>{nosotros.nombre}</h2>
                    </Link>
                  </li>
                ))
              }
            </ul>
            <h1 className="font-bold text-lg mt-5 text-left">
              RUC 20610659021 <br /> JP Consulting E.I.R.L
            </h1>
          </div>
          <div className="flex flex-col  ">
            <h1 className="mb-5 font-extrabold text-xl mb- ">CONTÁCTENOS</h1>
            <ul className=" mb-6">
              {FooterData.ContactoInfo.map((contacto) => (
                <li className="text-left " key={contacto.id}>
                  <Link href={`/nosotros/${contacto.nombre}`}>
                    <h2>{contacto.nombre} </h2>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="contacto">
              <button className="btn bg-rose-700 hover:bg-purple min-h-min h-10 text-xs ">
                {" "}
                CONTACTANOS
              </button>
            </div>
          </div>
        </div>

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
