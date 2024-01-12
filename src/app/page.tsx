"use client"; // <===== REQUIRED

//Componentes
import Hero from "./components/Hero";
import DemoSlider from "./components/CarouselPrincipal";
import dataSlider from "@data/carouselData.json";


//Librerias
import { motion, useScroll, useSpring } from "framer-motion";
import CarouselTest from "./components/CarouselTest";
import BentoGrid from "./ScrollGrid/page";
import ServiciosLanding from "./components/ServiciosLanding";
import MisionVision from "./components/MisionVision";
import PageWrapper from "./components/PageWrapper";

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
      <PageWrapper >

      <Hero />
      <DemoSlider data={dataSlider} />
      <BentoGrid />
      <MisionVision />
      <ServiciosLanding />
      </PageWrapper>

    </>
  );
};

export default Page;
