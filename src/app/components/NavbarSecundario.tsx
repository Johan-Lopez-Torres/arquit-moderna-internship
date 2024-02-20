import React from "react";
import { BotonLogoProps } from "../utils/props";

import {
  SvgCasa,
  SvgFacebook,
  SvgGmail,
  SvgTwitter,
  SvgWhatsapp,
  SvgYoutube,
} from "./SvgIcons";

const BotonLogo: React.FC<BotonLogoProps> = ({ href, src, alt, className }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className={` ${className} w-16 transition ease-in-out delay-150   hover:scale-60 hover:opacity-60 duration-150`}
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

const NavbarSecundario = () => {
  return (
    <>
      <div className="navbar bg-neutral min-h-min h-12 ">
        <div className="flex-1 gap-6 flex-row">
          <ul className="flex flex-row gap-7 ml-5 items-center">
            <li className="flex flex-row items-center gap-2  md:visible invisible font-bold">
              <SvgCasa width={20} height={20} />
              Av. Pacifico Mz C1 Lt 3A - URB Casuarinas II Etapa - 4to Piso
            </li>
            <li className="flex flex-row items-center gap-2 font-bold">
              <SvgWhatsapp width={20} height={20} />
              998871436
            </li>

            <li className="flex flex-row items-center gap-2 font-bold">
              <SvgGmail width={20} height={20} />
              arquit.moderna@gmail.com
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 display  sm:invisible md:invisible lg:visible   ">
            <li>
              <BotonLogo
                href="https://www.facebook.com/arquitmoderna.oficial"
                src="facebook.png"
                alt="facebook"
              />
            </li>
            <li>
              <BotonLogo
                href="https://www.instagram.com/arquit.moderna/"
                src="instagram.png"
                alt="twitter"
              />
            </li>
            <li>
              <BotonLogo
                href="https://www.tiktok.com/@arquitmoderna?lang=es"
                src="tik-tok.png"
                alt="twitter"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarSecundario;
