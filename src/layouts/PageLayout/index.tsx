import React from "react";
import { PageLayoutContainer } from "./style";
import { Header } from "../../components/Header";
import { Calculator } from "../../components/Calculator";

export const PageLayoutWrapper = (props: any) => {
  return (
    <PageLayoutContainer>
      <Header />
      <Calculator />
    </PageLayoutContainer>
  );
};
