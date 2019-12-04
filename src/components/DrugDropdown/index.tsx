import React from "react";
import { DropDownSectionBG, HeaderContainer } from "./style";
import { DrugSelector } from "./DrugSelector";
import { DateSelector } from "./DateSelector";

export const DrugDropdown = () => {
  return (
    <DropDownSectionBG>
      <HeaderContainer>
        <h1>Select a Drug</h1>
      </HeaderContainer>
      <DrugSelector />
      <HeaderContainer>
        <h1>Select a Date</h1>
      </HeaderContainer>
      <DateSelector />
      <HeaderContainer>
        <h1>You will be clean by: </h1>
      </HeaderContainer>
    </DropDownSectionBG>
  );
};
