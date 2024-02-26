import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

export const WrapperPage: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div className="m-12 mt-0">
        {children}
      </div>
    </>
  );
};

export const WrapperLayout = () => {
  return (
    <>
      <div></div>
    </>
  );
};
