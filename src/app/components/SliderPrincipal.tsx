"use client";


import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SliderPrincipalProps {}

const SliderPrincipal: React.FC<SliderPrincipalProps> = () => {
  const [swiperRef, setSwiperRef] = useState<any | null>(null);
  const appendNumber = useRef<number>(500);
  const prependNumber = useRef<number>(1);

  // Create array with 500 slides
  const [slides, setSlides] = useState<string[]>(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef?.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index: number) => {
    swiperRef?.slideTo(index - 1, 0);
  };

  return (
    <>
      <div className='min-h-screen'>
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            virtual
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide key={slideContent} virtualIndex={index}>
                {slideContent}
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="append-buttons">
            <button onClick={() => prepend()} className="prepend-2-slides">
              Prepend 2 Slides
            </button>
            <button onClick={() => slideTo(1)} className="prepend-slide">
              Slide 1
            </button>
            <button onClick={() => slideTo(250)} className="slide-250">
              Slide 250
            </button>
            <button onClick={() => slideTo(500)} className="slide-500">
              Slide 500
            </button>
            <button onClick={() => append()} className="append-slides">
              Append Slide
            </button>
          </p>
      </div>
    </>
  );
};

export default SliderPrincipal;
