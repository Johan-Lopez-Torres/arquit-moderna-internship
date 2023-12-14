"use client";

import {
  Virtual,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import servicesData from "@data/services.json";

interface SliderPrincipalProps {}

const SliderPrincipal: React.FC<SliderPrincipalProps> = () => {
  const slides = servicesData.map((service, index) => (
    <SwiperSlide
      className="rounded-3xl "
      key={service.key}
      virtualIndex={index}
    >
      <div className="card card-compact w-full bg-base-100 shadow-xl  ">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {service.name} </h2>
          <p>{service.description} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <div className=" flex flex-col  justify-center items-center min-h-screen m-14  ">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Virtual, Navigation, Pagination, Autoplay, Keyboard]}
          pagination={{
            type: "bullets",
            clickable: true,
            el: ".swiper-paginacion",
          }}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 50,
            pauseOnMouseEnter: true,
          }}
          speed={1200}
          style={{ height: "100%" }}
          virtual
        >
          {slides}
 
          <div className="swiper-paginacion flex justify-center "></div>

        </Swiper>

      </div>
    </>
  );
};

export default SliderPrincipal;
