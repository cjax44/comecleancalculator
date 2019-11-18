import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { DrugDropdown } from "./components/DrugDropdown";
import { Calculator } from "./components/Calculator";
import { PageLayoutWrapper } from "./layouts/PageLayout";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <PageLayoutWrapper />
    </React.Fragment>
  );
};

export default App;
