import React from "react";
import {
  SvgCasa,
  SvgFacebook,
  SvgGmail,
  SvgTwitter,
  SvgWhatsapp,
  SvgYoutube,
} from "./SvgIcons";

const NavbarSecundario = () => {
  return (
    <>
      <div className="navbar bg-neutral min-h-min h-12 ">
        <div className="flex-1 gap-6 flex-row">
          <ul className="flex flex-row gap-7 ml-5 items-center">
            <li className="flex flex-row items-center gap-2  md:visible invisible">
              <SvgCasa width={20} height={20} />
              Nuevo Chimbote - Perú{" "}
            </li>
            <li className="flex flex-row items-center gap-2">
              <SvgWhatsapp width={20} height={20} />
              969419221
            </li>

            <li className="flex flex-row items-center gap-2">
              <SvgGmail width={20} height={20} />
              sangers.corp@gmail.com
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 display  sm:invisible md:invisible lg:visible  ">
            <li>
              <a href="https://twitter.com/" target="_blank">
                <SvgTwitter width={30} height={30} />
              </a>{" "}
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <SvgYoutube width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <SvgFacebook width={30} height={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarSecundario;
