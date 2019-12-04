import React, { useState } from "react";
import { CalcWrapper } from "./style";
import { DrugDropdown } from "../DrugDropdown";

export const Calculator = () => {
  const today = new Date();
  const [dateTaken, setDateTaken] = useState(today);

  return (
    <CalcWrapper>
      <DrugDropdown />
    </CalcWrapper>
  );
};
