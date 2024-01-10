import Link from "next/link";
import React from "react";
import styles from "./styles-component/Footer.module.scss"

const Footer = () => {
  return (
    <>
      <footer
        className={`bg-neutral footer footer-center p-10  text-base-content rounded bg mt-10`}
      >
        <div className="grid grid-cols-4 ">
          <div className="">
            <h1>ARQUIT MODERNA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis at velit architecto officiis rem. Quaerat adipisci
              ipsam, aspernatur explicabo sed ipsa! Atque explicabo nihil rem,
              quas alias in repudiandae assumenda?
            </p>
          </div>
          <div>
            <div className="servicios y contacto">
              <div className="servicos">
                <h1>SERVICIOS</h1>
                <ul>
                  <li>orem ipsum dolor sit amet consectetur</li>
                  <li>orem ipsum dolor sit amet consectetur</li>
                  <li>orem ipsum dolor sit amet consectetur</li>
                  <li>orem ipsum dolor sit amet consectetur</li>
                </ul>
              </div>
              <div className="contacto">
                <button className="btn bg-rose-700"> CONTACTANOS</button>
              </div>
            </div>
          </div>
          <div>NOSOTROS</div>
          <div className="flex flex-col content-around">
              <h1 className="mb-3">CONTÁCTENOS</h1>
            <ul >
              <li>
                <a href="">Av. Pacífico Centro Ferretero | Tienda N° 62</a>
              </li>
              <li>
                <a href="">93432432</a>
              </li>
              <li>
                <a>sangers.corp@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
