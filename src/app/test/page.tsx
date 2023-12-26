import React from "react";

const page = () => {
  return (
    <>
      <div className="m-12 min-h-screen text-black  p-8 ">
        <div className="grid   w-full h-full sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-5  gap-6">
          <div className="sm:col-span-3  md:col-span-4  lg:col-span-2 lg:row-span-5  grid lg:grid-cols-2 lg:grid-rows-5 gap-6 ">
            <div className="md:col-span-3  lg:col-span-2 lg:row-span-2 bg-green-600 rounded-lg border-teal-500 border-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30">
              <img
                src="https://images.unsplash.com/photo-1701364406051-156d47df2477?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="   grid   lg:grid-cols-2 lg:grid-rows-4  lg:col-span-2 lg:row-span-3  gap-6">
              <div className="  col-span-1 row-span-4 bg-yellow-500 rounded-lg border-teal-500 border-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30">
                <img
                  src="https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover rounded-lg border-purple"
                />
              </div>
              <div className=" col-span-1 row-span-4  grid gap-6  ">
                <div className="col-span-2 row-span-2 bg-red-600 rounded-lg border-teal-500 border-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30">
                  <img
                    src="https://images.unsplash.com/photo-1682685794690-dea7c8847a50?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className=" col-span-2 row-span-2 bg-pink-600 rounded-lg border-teal-500 border-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1701206896251-8c47cfe95bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-4  md:col-span-3 lg:col-span-3 lg:row-span-5 rounded-lg p-11 text-white">
            <h1 className="text-4xl font-extrabold text-center mb-6 ">
              TITULO DEL GRID
            </h1>
            <p className="leading-10 text-sm mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              repellat suscipit accusantium architecto facilis, tenetur nostrum
              est corrupti veritatis tempore perferendis temporibus recusandae
              consequuntur debitis consequatur vel veniam itaque ad?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Natus repellat
              suscipit accusantium architecto facilis, tenetur nostrum est
              corrupti veritatis tempore perferendis temporibus recusandae
              consequuntur debitis consequatur vel veniam itaque ad?
            </p>
            <div className="flex flex-row justify-around  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-32 h-32"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-32 h-32"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-32 h-32"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
