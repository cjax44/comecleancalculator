import React, { useEffect, Props } from "react";
import { DropDownSectionBG, HeaderContainer } from "./style";
import { DrugSelector } from "./DrugSelector";
import { DateSelector } from "./DateSelector";

export const DrugDropdown = () => {
  useEffect(() => {
    if (DrugSelector) {
    }
  });

  // function addDays(date, days) {
  //   var result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  // }

  return (
    <DropDownSectionBG>
      <HeaderContainer>Select a Drug</HeaderContainer>
      <DrugSelector />
      <HeaderContainer>Select a Date</HeaderContainer>
      <DateSelector />
      <HeaderContainer>You will be clean by:</HeaderContainer>
    </DropDownSectionBG>
  );
};
