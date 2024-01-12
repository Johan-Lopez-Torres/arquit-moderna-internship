import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full h-16 bg-rose-700 flex justify-center items-center">
            <h1 className="text-3xl font-extrabold text-slate-300">UBICANOS</h1>
      </div>
      {children}
    </>
  );
};

export default layout;
