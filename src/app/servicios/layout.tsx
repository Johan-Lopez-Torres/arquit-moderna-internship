import React from "react";
import PageWrapper from "../components/PageWrapper";

type LayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PageWrapper>
        <div className="w-full h-16 bg-rose-700 flex justify-center items-center">
              <h1 className="text-3xl font-extrabold text-slate-300">SERVICIOS</h1>
        </div>
        {children}
      </PageWrapper>
    </>
  );
};

export default layout;
