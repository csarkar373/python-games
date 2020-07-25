import React, { Component } from "react";
class CheckBox extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { id: props.id };
  }

  handleCheckBox = (e) => {
    this.props.onClick(this.state.id, e.target.checked);
  };

  render() {
    return (
      <span className="m-2">
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleCheckBox}
        />
        {this.props.label}
      </span>
    );
  }
}

export default CheckBox;
