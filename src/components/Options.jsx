import React, { Component } from "react";
import Checkbox from "../components/CheckBox";
import "../css/Options.css";

class Options extends Component {
  handleOption = (id, checked) => {
    //console.log("checkbox clicked id, checked", id, checked);
    const options = [...this.props.options];
    // console.log("options ", options);
    for (let i = 0; i < options.length; ++i) {
      if (options[i].id === id) {
        options[i].checked = checked;
      }
    }
    //console.log("options class options", options);

    this.props.onChange(options, id, checked);
  };

  render() {
    let options = [];
    if (this.props.options) {
      options = [...this.props.options];
    }
    // console.log(options);

    return (
      <div className="options">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            onClick={this.handleOption}
            checked={option.checked}
            id={option.id}
            label={option.label}
          />
        ))}
      </div>
    );
  }
}

export default Options;
