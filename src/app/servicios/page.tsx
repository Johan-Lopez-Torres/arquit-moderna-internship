"use client";
import React from "react";
import { CardService } from "../components/Card";
import PageWrapper from "../components/PageWrapper";

const Page = () => {
  return (
    <>
      <PageWrapper>
        <div className="m-12">
          <div className="flex flex-row justify-center">
            <a
              href="#"
              className="btn btn-success w-11/12 text-slate-100 font-extrabold text-xl"
            >
              PLANOS
            </a>
          </div>
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-evenly justify-items-center my-10 gap-8 mx-10">
            <CardService />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Page;
