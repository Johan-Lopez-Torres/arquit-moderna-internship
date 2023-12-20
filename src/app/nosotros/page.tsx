import React from "react";
import { CardEmployee } from "../components/Card";

const page = () => {
  return (
    <>
      <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 m-12   min-h-screen justify-items-center ">
        <CardEmployee />
      </div>
    </>
  );
};

export default page;
