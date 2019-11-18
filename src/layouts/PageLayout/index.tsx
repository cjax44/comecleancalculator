import React from "react";
import { PageLayoutContainer } from "./style";
import { Header } from "../../components/Header";
import { DrugDropdown } from "../../components/DrugDropdown";
import { Calculator } from "../../components/Calculator";

export const PageLayoutWrapper = (props: any) => {
  return (
    <PageLayoutContainer>
      <Header />
      <Calculator />
    </PageLayoutContainer>
  );
};
