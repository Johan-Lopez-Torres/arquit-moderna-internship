import React from "react";
import { CardCustomer } from "../components/Card";
import PageWrapper from "../components/PageWrapper";

const page = () => {
  return (
    <>
      <PageWrapper>
        <div className="m-12">
          <div className="divider  divider-accent mb-14 ">
            <h1 className="text-2xl font-semibold">TESTIMONIOS</h1>
          </div>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3   justify-items-center gap-12 ">
            <CardCustomer />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default page;
