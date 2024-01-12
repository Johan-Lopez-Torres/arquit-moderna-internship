"use client";

import React from "react";
import { CardEmployee } from "../../components/Card";
import PageWrapper from "../../components/PageWrapper";

const page = () => {
  return (
    <>
      <PageWrapper>
        <div className="flex justify-center">
          <div className="m-12 mt-3 max-w-[1500px] ">
            {/* <div className="divider divider-accent mb-14 ">
            <h1 className="text-2xl font-semibold">NOSOTROS</h1>
            </div> */}
            <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 m-12   min-h-screen justify-items-center ">
              <CardEmployee />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default page;
