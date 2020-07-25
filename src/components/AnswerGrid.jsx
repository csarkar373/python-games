import React, { Component } from "react";
import GridButton from "./GridButton";
class AnswerGrid extends Component {
  state = {};
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    // console.log("answer grid constructor", this.props);
  }

  makeButtons() {
    const rows = this.props.question.buttonStates.length;
    const cols = this.props.question.buttonStates[0].length;

    //console.log("make buttons display values", this.props);

    let array = [];
    let buttonKey = 0;
    for (let row = 0; row < rows; ++row) {
      let nextRow = [];
      for (let col = 0; col < cols; ++col) {
        nextRow.push(
          <GridButton
            key={buttonKey++}
            onClick={this.props.question.handleButton}
            disabled={this.props.question.disabled[row][col]}
            value={this.props.question.buttonStates[row][col]}
            displayValue={this.props.question.displayValues[row][col]}
            display={this.props.display}
            row={row}
            col={col}
          />
        );
      }
      array.push(<div key={row}>{nextRow}</div>);
    }
    return array;
  }

  render() {
    //console.log("rendering answergrid");
    return this.makeButtons();
  }
}

export default AnswerGrid;
