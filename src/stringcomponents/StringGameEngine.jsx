import React, { Component } from "react";
import GameEngine from "../components/GameEngine";
import * as StringConstants from "./stringconstants";
import { StringQuestionFactory } from "./stringquestionfactory";

const STRINGOPTIONS = [
  { id: StringConstants.LOOPSOPTIONID, label: "Loops", checked: false },
];

class StringGameEngine extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      options: STRINGOPTIONS,
      qf: StringQuestionFactory,
      labels: StringConstants.DEFAULTLABELSOPTION,
      maxtime: StringConstants.MAXTIME,
      addtime: StringConstants.ADDTIME,
    };
  }

  handleOptions = (options, id, checked) => {
    console.log("options have changed", options, id, checked);
    // timer and label options are handled here.
    // other options are used by the question factory
    switch (id) {
      case StringConstants.LABELSOPTIONID:
        let labels = checked;
        this.setState({ labels, options });
        return;
      default:
        console.log("unknown option in string game engine");
        break;
    }
    this.setState({ options });
  };

  render() {
    //console.log("disarray game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={StringConstants.STRINGGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          labels={this.state.labels}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
        <h6>Select all the letters that are part of the substring.</h6>
      </div>
    );
  }
}

export default StringGameEngine;
