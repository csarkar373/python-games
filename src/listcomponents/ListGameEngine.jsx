import React, { Component } from "react";
import { ListQuestionFactory } from "./listquestionfactory";
import GameEngine from "../components/GameEngine";
import * as ListConstants from "./listconstants";

const LISTOPTIONS = [
  {
    id: ListConstants.LABELSOPTIONID,
    label: "Labels",
    checked: ListConstants.DEFAULTLABELSOPTION,
  },
  { id: ListConstants.LOOPSOPTIONID, label: "Loops", checked: false },
  { id: ListConstants.TWODOPTIONID, label: "2D", checked: false },
];

class ListGameEngine extends Component {
  state = {};

  constructor(props) {
    super(props);

    let labels = this.getLabelChecked();
    //console.log("list game constructor labels=", labels);
    this.state = {
      options: LISTOPTIONS,
      qf: ListQuestionFactory,
      labels: labels,
      maxtime: ListConstants.MAXTIME,
      addtime: ListConstants.ADDTIME,
    };
  }

  getLabelChecked() {
    //console.log("getLabelIndex returning");
    for (let i = 0; i < LISTOPTIONS.length; ++i) {
      if (LISTOPTIONS[i].id === ListConstants.LABELSOPTIONID)
        return LISTOPTIONS[i].checked;
    }
  }

  handleOptions = (options, id, checked) => {
    //console.log("options have changed ", options, id, checked);
    // label option is handled here.
    // other options are used by the question factory
    switch (id) {
      case ListConstants.LABELSOPTIONID:
        let labels = checked;
        this.setState({ labels, options });
        return;
      default:
        //console.log("option id in list game engine =", id);
        break;
    }
    this.setState({ options });
  };

  render() {
    //console.log("list game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={ListConstants.LISTGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          labels={this.state.labels}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
        <h6>Click only on the list cells that are printed.</h6>
      </div>
    );
  }
}

export default ListGameEngine;
