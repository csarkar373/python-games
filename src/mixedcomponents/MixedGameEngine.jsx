import React, { Component } from "react";
import GameEngine from "../components/GameEngine";
import * as MixedConstants from "./mixedconstants";
import { MixedQuestionFactory } from "./mixedquestionfactory";

class MixedGameEngine extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      qf: MixedQuestionFactory,

      maxtime: MixedConstants.MAXTIME,
      addtime: MixedConstants.ADDTIME,
    };
  }

  render() {
    //console.log("disarray game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={MixedConstants.MIXEDGAMETITLE}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
      </div>
    );
  }
}

export default MixedGameEngine;
