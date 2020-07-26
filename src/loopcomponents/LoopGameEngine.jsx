import React, { Component } from "react";
import { LoopQuestionFactory } from "./loopquestionfactory";
import GameEngine from "../components/GameEngine";
import * as LoopConstants from "./loopconstants";

const LOOPOPTIONS = [
  {
    id: LoopConstants.WHILEOPTIONID,
    label: "While",
    checked: LoopConstants.DEFAULTWHILEOPTION,
  },
  {
    id: LoopConstants.NEGATIVESOPTIONID,
    label: "Negatives",
    checked: LoopConstants.DEFAULTNEGATIVESOPTION,
  },
  {
    id: LoopConstants.NESTEDOPTIONID,
    label: "Nested",
    checked: LoopConstants.DEFAULTNESTEDOPTION,
  },
];

class LoopGameEngine extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      options: LOOPOPTIONS,
      qf: LoopQuestionFactory,
      maxtime: LoopConstants.MAXTIME,
      addtime: LoopConstants.ADDTIME,
    };
  }

  handleOptions = (options, id, checked) => {
    console.log("options have changed ", options, id, checked);
    this.setState({ options });
  };

  render() {
    //console.log("Loops game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={LoopConstants.LOOPGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
        <h6>How many times will "Hello" be printed?</h6>
      </div>
    );
  }
}

export default LoopGameEngine;
