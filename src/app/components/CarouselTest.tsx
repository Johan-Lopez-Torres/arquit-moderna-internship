"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import style from "./styles-component/CarouselTest.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import servicesData from "@data/Servicios.json";
import Image from "next/image";

// import required modules
interface SliderPrincipalProps {
    
}

 const CarouselTest: React.FC<SliderPrincipalProps> = () => {
  const slides = servicesData.map((service, index) => (
    <SwiperSlide
      className="rounded-3xl  h-full"
      key={service.key}
      virtualIndex={index}
    >
      <div className="card card-compact w-full bg-base-100 shadow-xl   ">
        <figure>
          <Image
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {service.name} </h2>
          <p>{service.description} </p>
          
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <div className={`${style.swiper } mx-10`}  >
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            navigation={true}
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={false}

            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className=" "
          >
            {slides}
          </Swiper>
      </div>
    </>
  );
  
}


export default CarouselTest;