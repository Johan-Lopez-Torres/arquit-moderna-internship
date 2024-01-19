import Image from "next/image";
import React from "react";

const image1: string =
  "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2: string =
  "https://images.unsplash.com/photo-1663811396500-d128a4df7369?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image3: string =
  "https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const texto: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore vel aut, exercitationem, voluptate, ea minus repellendus soluta praesentium molestiae veniam cum? Nisi maiores sint aut eligendi, explicabo asperiores nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus saepe blanditiis commodi nihil corporis. Reiciendis, sit nulla quo delectus commodi repellendus quibusdam mollitia. Accusamus doloremque ex magni voluptatem temporibus?";

const titulo: string = "Lorem ipsum dolor sit amet consectetur.";

const ImageComponent = ({ image }: { image: string }) => {
  return (
    <>
      <Image
        src={image}
        alt="Picture of the author"
        className="object-cover h-full w-full   rounded-xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:opacity-60 duration-150 "
        width={500}
        height={500}
      />
    </>
  );
};

const GridLayoutServicios = () => {
  return (
    <>
      {/* IMAGENES GRID */}
      <div className="  text-white">
        <div className="grid gap-5  lg:max-h-screen  grid-cols-2 grid-rows-5 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-6">
          <div className="col-span-1 row-span-2 sm:col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3">
            <ImageComponent image={image1} />
          </div>
          <div className="md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-3 lg:row-start-4">
            <ImageComponent image={image2} />
          </div>
          <div className="md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-3 lg:row-start-4">
            <ImageComponent image={image3} />
          </div>

          {/* TEXTO GRID */}
          <div
            className="p-16 col-span-2 row-span-3 row-start-1 sm:col-span-2 sm:row-span-2 sm:row-start-1 md:col-span-3 md:row-span-2 md:row-start-1 lg:col-span-3 lg:row-span-6 bg-base-300 rounded-xl"
          >
            <h1 className="text-center font-extrabold text-3xl pb-4">
              {titulo}
            </h1>
            <p className="leading-loose">{texto}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayoutServicios;
