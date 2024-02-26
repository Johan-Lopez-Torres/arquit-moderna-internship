"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./styles-component/CarouselGrande.module.css";

// Our custom button component
import SliderButtons from "./componentes-simples/SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full ">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            className={`${style.swiper}`}
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{
              reverseDirection: true,
              delay: 800,
            }}
            speed={500}
            loop={true}
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            keyboard={{
              enabled: true,
            }}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className="h-full w-full absolute left-0 top-0 "
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${image} )`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-50"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-rojo">
                      {title}
                    </p>
                    {buttons.length > 0 ? (
                      <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
