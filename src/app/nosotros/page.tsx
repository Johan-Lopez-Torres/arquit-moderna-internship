import React from "react";
import { CardEmployee } from "../components/Card";

const page = () => {
  return (
    <>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-11 m-9   min-h-screen ">
        <CardEmployee />
      </div>
    </>
  );
};

export default page;
