/* "use client";
 */
//Componentes
import Hero from "./components/Hero";
import DemoSlider from "./components/CarouselPrincipal";
import dataSlider from "@data/carouselData.json";

//Librerias
import BentoGrid from "./ScrollGrid/page";
import ServiciosLanding from "./components/ServiciosLanding";
import MisionVision from "./components/MisionVision";
import PageWrapper from "./components/PageWrapper";

const Page = async () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <DemoSlider data={dataSlider} />
        {/*       <BentoGrid />
         */}{" "}
        <MisionVision />
        <ServiciosLanding />
      </PageWrapper>
    </>
  );
};

export default Page;
