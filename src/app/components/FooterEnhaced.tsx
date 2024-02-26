import React from "react";
import FooterData from "@data/FooterData.json";
import { SvgFacebook, SvgTwitter, SvgYoutube } from "./SvgIcons";
import Link from "next/link";

type BotonLogoProps = {
  href: string;
  src: string;
  alt: string;
  className?: string;
};

const BotonLogo: React.FC<BotonLogoProps> = ({ href, src, alt, className }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className={` ${className} w-20 transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-60 hover:opacity-60 duration-150 `}
      >
        <div>
          <img
            className="flex items-center"
            src={`/images/iconos/${src}`}
            alt={alt}
          />
        </div>
      </a>
    </>
  );
};

const FooterEnhaced: React.FC = () => {
  return (
    <>
      <div className="bg-footer p-11 pb-0 pt-20">
        <nav className="mb-9">
          <div className="flex flex-row justify-center  gap-9 ">
            <BotonLogo
              href="https://www.facebook.com/?locale=es_LA"
              src="facebook.png"
              alt="facebook"
            />
            <BotonLogo
              href="https://www.facebook.com/?locale=es_LA"
              src="instagram.png"
              alt="facebook"
            />
            <BotonLogo
              href="https://www.facebook.com/?locale=es_LA"
              src="tik-tok.png"
              alt="facebook"
            />
              <BotonLogo
              href="https://api.whatsapp.com/send?phone=%2B51998871436&data=ARDrhoj9pEKqn5WDajfYErOm7tKsugwN_DgT1NVgLh2wODVZG6PGW3MeRCZVpZ53yHIf5rtGLd_VC6ookbk6uBMvF09mJQSHkA77sJvmG_cehxFR0REXX3CTNAnDiVDUFs5JiMTMCa83Q-zGEQkUauhknA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3LylAZ_n7I_6fdCmDD93NL4BrRocyEM_kGU7o-yLIlw_SrSJ2AZ-qEoKs"
              src="whatsapp.png"
              alt="facebook"
            />
          </div>
        </nav>
        <div className="">
          <div className="grid   sm:grid-cols-2 lg:grid-cols-4 gap-11 mt-6 ">
            <div className="mb-6 px-8">
              <a href="/">
                <h1 className="mb-3 font-extrabold text-xl text-center link link-hover">
                  ARQUIT MODERNA
                </h1>
              </a>
              <p className="px-12 pt-0 sm:p-11 sm:pt-0 lg:p-0">
                Nuestra pasión por el diseño innovador se refleja en cada
                proyecto que emprendemos. Desde residencias privadas hasta
                complejos comerciales, nuestro equipo de expertos en
                arquitectura trabaja incansablemente para crear espacios que
                inspiren, eleven y perduren en el tiempo. Confía en nosotros
                para convertir tus ideas en realidad.
              </p>
            </div>
            <div className="ml-12">
              <a href="/servicios">
                <h1 className="font-extrabold text-xl mb-3 text-center link link-hover">
                  SERVICIOS
                </h1>
              </a>
              <ul className="text-left list-disc ml-4">
                {FooterData.servicios.map((servicio) => (
                  <li className="mb-1" key={servicio.id}>
                    <Link href={`/servicios/${servicio.path}`}>
                      <h2 className="text-md link link-hover">
                        {servicio.nombre}
                      </h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a href="#">
                <h1 className="font-extrabold text-xl mb-2 text-center  link link-hover">
                  NOSOTROS
                </h1>
              </a>
              <ul className="text-md pl-3">
                {FooterData.Nosotros.map((nosotros) => (
                  <li
                    className="text-left list-disc   ml-11 "
                    key={nosotros.id}
                  >
                    <Link href={`/nosotros/${nosotros.nombre}`}>
                      <h2 className="link link-hover">{nosotros.nombre}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a href="/contacto">
                <h1 className="mb-5 font-extrabold text-xl mb- text-center link link-hover">
                  CONTÁCTENOS
                </h1>
              </a>
              <ul className=" mb-6 px-8">
                {FooterData.ContactoInfo.map((contacto) => (
                  <li className="text-left " key={contacto.id}>
                    <Link href={`${contacto.nombre}`}>
                      <h2 className="link link-hover">{contacto.nombre} </h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <nav className="text-center text-2xl">
          <h1 className="mb-4 font-bold text-indigo-500">Pagos confiables a través de: </h1>
          <div className="flex flex-row justify-center  gap-9 ">
            <BotonLogo
              href="https://www.facebook.com/?locale=es_LA"
              src="../tarjetas/tarjeta (1).png"
              alt="facebook"
              className="w-28"
            />
            <BotonLogo
              href="https://www.facebook.com/?locale=es_LA"
              src="../tarjetas/tarjeta (2).png"
              alt="facebook"
              className="w-28"
            />
            <BotonLogo
              href="https://www.facebook.com/?locale=es_LA"
              src="../tarjetas/tarjeta (3).png"
              alt="facebook"
              className="w-28"
            />
          
          </div>
        </nav>
      </div>

      <aside className="flex bg-footer justify-center items-center w-full h-14  border-t-4 border-rojo   ">
        <p className="text-md font-extrabold text-center">
          Copyright © 2024 - All right reserved by ACME Industries Ltd
        </p>
      </aside>
    </>
  );
};

export default FooterEnhaced;
