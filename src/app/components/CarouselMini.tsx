"use client";

import { Virtual, Navigation, Pagination } from "swiper/modules";
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
      <div className=" flex flex-col gap-12 justify-center items-center min-h-screen m-14 ">
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".swiper-paginations",
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          navigation={true}
          style={{ height: "100%" }}
          virtual
        >
          {slides}
          
          <div className="swiper-paginations mt-16">dfdf</div>

        </Swiper>
      </div>
    </>
  );
};

export default SliderPrincipal;
