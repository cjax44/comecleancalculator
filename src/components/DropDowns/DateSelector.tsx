import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export class DateSelector extends React.Component {
  state = {
    selectedOption: options[0]
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
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
