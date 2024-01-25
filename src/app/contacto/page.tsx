
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="sm:min-h-screen md:h-screen   flex-row flex px-20 py-5 my-8 sm:flex-col md:flex-row lg:flex-row  items-center ">
        <div className="w-1/2  h-full ">
          <div className=" flex flex-col justify-center  overflow-hidden h-full w-full    ">
            <div className="h-full w-full p-6  bg-base-300 rounded-md rounded-r-none shadow-md  ">
              <h1 className="text-3xl font-semibold text-center text-white ">
                CONTÁCTANOS
              </h1>
              <form className="space-y-4">
                <div>
                  <label className="label">
                    <span className="text-base label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full input input-bordered "
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full input input-bordered"
                  />
                </div>
              </form>
              <button className="btn text-white bg-rose-600 mt-7  btn-block hover:bg-violet-800">
                SEND MESSAGE{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full bg-black ">
          <Image
            className="w-full h-full  object-cover object-left rounded-lg opacity-60 rounded-l-none"
            src="https://www.mstholding.com/blog/wp-content/uploads/2020/03/iStock-808364658-e1584002771559.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default page;
