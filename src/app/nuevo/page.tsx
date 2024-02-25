import React from "react";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl px-3 py-3 rounded-2xl bg-clip-border">
        <div className="relative">
          <a className="block shadow-xl rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1587333383258-bca5d8b58914?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGFuaW1hdGlvbnxlbnwwfDB8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="img-blur-shadow"
              className="max-w-full shadow-soft-2xl rounded-2xl"
            />
          </a>
        </div>
        <div className="flex-auto px-1 pt-6">
          <p className="relative z-10 mb-2 leading-normal text-transparent bg-slate-700 text-sm bg-clip-text">
            Camera
          </p>
          <a href="javascript:;">
            <h5>By Loopple</h5>
          </a>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
            >
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
