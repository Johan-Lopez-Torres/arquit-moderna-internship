
"use client"; // <===== REQUIRED

//Componentes
import Hero from "./components/Hero";
import SliderPrincipal from "@components/CarouselMini";
import TextoDifuminado from "./components/sub-componentes/TextoDifuminado";
import DemoSlider from "./components/CarouselGrande";
import dataSlider from "@data/carouselGrande.json";

//Librerias
import { motion, useScroll, useSpring } from "framer-motion";

const Page = async () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar z-50" style={{ scaleX }} />
      <Hero />
      <SliderPrincipal />
      <TextoDifuminado />
      <DemoSlider data={dataSlider} />
    </>
  );
};

export default Page;
