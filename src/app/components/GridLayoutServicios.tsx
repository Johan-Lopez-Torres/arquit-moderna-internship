import Image from "next/image";
import React from "react";

const image1: string =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2: string =
  "https://plus.unsplash.com/premium_photo-1674635139152-267f57d9845a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image3: string =
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore vel aut, exercitationem, voluptate, ea minus repellendus soluta praesentium molestiae veniam cum? Nisi maiores sint aut eligendi, explicabo asperiores nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus saepe blanditiis commodi nihil corporis. Reiciendis, sit nulla quo delectus commodi repellendus quibusdam mollitia. Accusamus doloremque ex magni voluptatem temporibus?";

const GridLayoutServicios = () => {
  return (
    <>
      <div className="m-14 2xl:m-auto   sm:min-h-screen md:h-screen lg:h-screen  text-black  p-6  max-w-[1500px]">
        <div className="grid gap-5 grid-cols-2 grid-rows-5 sm:h-screen sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-4  lg:grid-cols-5 lg:grid-rows-6   ">
          <div className=" col-span-1 row-span-2 sm:col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3  bg-yellow-300 ">
            <Image
              src={image1}
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover h-full w-full   rounded-3xl"
            />
          </div>
          <div className=" md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-3 lg:row-start-4   bg-red-500">
            <Image
              src={image2}
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
          <div className=" md:row-span-2 md:col-span-1 lg:col-span-1 lg:row-span-3 lg:row-start-4 bg-green-500">
            <Image
              src={image3}
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="p-8 col-span-2 row-span-3 row-start-1  sm:col-span-2 sm:row-span-2 sm:row-start-1  md:col-span-3 md:row-span-2 md:row-start-1  lg:col-span-3 lg:row-span-6 bg-violet-400 ">
            <h1 className="text-center font-extrabold text-2xl pb-4">
              Lorem ipsum, dolor sit amet consectetur .
            </h1>
            <p className="leading-loose">
              {texto}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayoutServicios;
