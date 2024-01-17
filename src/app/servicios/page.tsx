"use client";
import React from "react";
import { CardService } from "../components/Card";
import PageWrapper from "../components/PageWrapper";

const Page = () => {
  return (
    <>
      <PageWrapper>
        <div className="m-12 ">
          {/* <div className="divider  divider-accent mb-14 ">
            <h1 className="text-2xl font-semibold">PLANOS</h1>
          </div> */}
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-8 ">
            <CardService />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Page;
