import React from "react";

const page = () => {
  return (
    <div className="m-12">
      <div className="grid grid-rows-3 grid-col-2 grid-flow-col gap-4 min-h-screen  ">
        <div className="row-span-3   bg-blue-500 w-full h-full ">
          <section className="py-8 px-8">
            <h1 className ="text-2xl font-extrabold font-serif text-slate-800 " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p className="text-2xl font-extrabold font-mono text-rose-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab
              illo.
            </p>
          </section>
        </div>
        <div className="col-span-2    bg-success  w-full h-full">
          <section className="py-8 px-12">
            <h1 className ="font-extrabold text-xl font-">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab
              illo.
            </p>
          </section>
        </div>
        <div className="row-span-2 col-span-2    bg-secondary   w-full h-full">
          <h1 className="font-gotham text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
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
