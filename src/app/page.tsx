/* "use client";
 */
//Componentes
import Hero from "./components/Hero";
import DemoSlider from "./components/CarouselPrincipal";
import dataSlider from "@data/carouselData.json";

//Librerias
import ServiciosLanding from "./components/ServiciosLanding";
import MisionVision from "./components/MisionVision";
import PageWrapper from "./components/PageWrapper";
import StatsPage from "./components/StatsPage";
import { Hero2 } from "./components/Hero2";
import AboutUs from "./components/AboutUs";

const Page = async () => {
  return (
    <>
      <PageWrapper>
        <Hero2 />
        <StatsPage />
        <AboutUs />
        {/*         <Hero />
         */}
        <DemoSlider data={dataSlider} />
        {/*       <BentoGrid />
         */}{" "}
        <ServiciosLanding />
        <MisionVision />
      </PageWrapper>
    </>
  );
};

export default Page;
