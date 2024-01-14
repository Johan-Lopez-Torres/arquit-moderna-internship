import Image from "next/image";
import React from "react";

const imageString: string =
  "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80";

const page = () => {
  return (
    <div className="m-12">
      <div className="grid grid-rows-3 grid-col-2 grid-flow-col gap-14 min-h-screen  ">
        <div className="row-span-3   bg-blue-500 w-full h-full rounded-xl flex items-center ">
          <section className="py-8 px-8 flex flex-col gap-2 ">
            <h1 className="text-2xl font-extrabold font-serif text-slate-800 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </h1>
            <p className="text-2xl font-extrabold font-mono text-rose-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab
              illo.
            </p>
            <div className="flex  justify-center">
              <Image className="w-1/2 " src={imageString} alt="paisaje" />{" "}
            </div>
          </section>
        </div>
        <div className="col-span-2     bg-success  w-full h-full rounded-2xl">
          <section className="py-8 px-12">
            <h1 className="font-extrabold text-xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 1{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab
              illo.
            </p>
          </section>
        </div>
          <div className="row-span-2 col-span-2    bg-secondary   w-full h-full  ">
            <h1 className="font-gotham text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab
              illo.
            </p>
          </div>
      </div>
    </div>
  );
};

export default page;
