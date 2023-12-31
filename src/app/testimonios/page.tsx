import React from "react";
import { CardCustomer } from "../components/Card";

const page = () => {
  return (
    <>
      <div className="m-12">
        <div className="flex flex-row justify-center mb-12">
              <a
                href="#"
                className="btn btn-success w-full text-slate-100 font-extrabold text-xl"
              >
                PLANOS
              </a>
            </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3   justify-items-center gap-12 ">
        
          <CardCustomer />
        </div>
      </div>
    </>
  );
};

export default page;
