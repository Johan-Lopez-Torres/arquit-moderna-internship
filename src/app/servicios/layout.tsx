import React from "react";
import PageWrapper from "../components/PageWrapper";
import Cuadro from "../components/cuadro";

type LayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PageWrapper>
        <Cuadro />

        {children}
      </PageWrapper>
    </>
  );
};

export default layout;
