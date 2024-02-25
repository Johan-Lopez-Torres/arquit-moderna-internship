import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full h-16  flex justify-center items-center mt-3">
            <h1 className="text-3xl font-extrabold text-slate-300">UBÍCANOS</h1>
      </div>
      {children}
    </>
  );
};

export default layout;


/* import React from 'react'

const layout = () => {
  return (
    <div>layout</div>
  )
}

export default layout */