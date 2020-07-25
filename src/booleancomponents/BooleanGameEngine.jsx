import React, { Component } from "react";
import { BooleanQuestionFactory } from "./booleanquestionfactory";
import GameEngine from "../components/GameEngine";
import * as BooleanConstants from "./booleanconstants";

const BOOLEANOPTIONS = [
  {
    id: BooleanConstants.COMPOUNDOPTIONID,
    label: "Compound",
    checked: BooleanConstants.DEFAULTCOMPOUNDSOPTION,
  },
  {
    id: BooleanConstants.CHALLENGEOPTIONID,
    label: "Challenge",
    checked: BooleanConstants.DEFAULTCHALLENGESOPTION,
  },
];

class BooleanGameEngine extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      options: BOOLEANOPTIONS,
      qf: BooleanQuestionFactory,
      compound: BooleanConstants.DEFAULTCOMPOUNDSOPTION,
      maxtime: BooleanConstants.MAXTIME,
      addtime: BooleanConstants.ADDTIME,
    };
  }

  handleOptions = (options, id, checked) => {
    console.log("options have changed", options, id, checked);
    // timer and label options are handled here.
    // other options are used by the question factory
    switch (id) {
      case BooleanConstants.COMPOUNDOPTIONID:
        let compound = checked;
        this.setState({ compound, options });
        return;
      default:
        console.log("unknown option in Boolean game engine");
        break;
    }
    this.setState({ options });
  };

  render() {
    //console.log("disBoolean game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={BooleanConstants.BOOLEANGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          timer={this.state.timer}
          labels={true}
          compound={this.state.compound}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
        <h6>Click true if the button matches the boolean expresion.</h6>
      </div>
    );
  }
}

export default BooleanGameEngine;
