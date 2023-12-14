import React from 'react'
import DemoSlider from '../components/CarouselGrande'
import DataSlide from "@data/carouselGrande.json"


const page = () => {
  return (
    <>
    <DemoSlider data={DataSlide } />
    </>
  )
}

export default page