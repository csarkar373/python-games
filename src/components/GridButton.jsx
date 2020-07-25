import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as AppConstants from "../util/appconstants";
import "../css/gridbutton.css";

class GridButton extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { row: this.props.row, col: this.props.col };
  }

  getButtonClasses() {
    //bug fix 7/17/20: added shadow-none to remove focus when clicked
    const buttonClasses = "gb btn btn-sm ";
    //console.log(buttonClasses + buttonColors[this.props.value]);
    return buttonClasses + AppConstants.BUTTONCOLORS[this.props.value];
  }

  buttonClicked() {
    const { row, col } = this.state;
    //console.log("button clicked: props ", this.props);
    this.props.onClick(row, col);
  }

  displayButton() {
    const display =
      this.props.display === undefined ? true : this.props.display;
    if (display) {
      return this.props.displayValue;
    } else {
      return "*";
    }
  }

  render() {
    //console.log("rendering gridbutton");
    return (
      <button
        key={this.props.id}
        disabled={this.props.disabled}
        className={this.getButtonClasses()}
        /* className={"btn btn-sm m-2 btn-primary "} */
        onClick={() => this.buttonClicked()}
      >
        {this.displayButton()}
      </button>
    );
  }
}

export default GridButton;
