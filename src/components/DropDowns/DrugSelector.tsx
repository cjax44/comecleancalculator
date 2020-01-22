import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const defaultOption = options[0];

export class DrugSelector extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Dropdown
        value={defaultOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
