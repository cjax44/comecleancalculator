import React from "react";
import { CalcWrapper } from "./style";
import { DrugDropdown } from "../DrugDropdown";

export const Calculator = (props: any) => {
  return (
    <CalcWrapper>
      <DrugDropdown />
    </CalcWrapper>
  );
};
