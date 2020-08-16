import React, { Component } from "react";

// shared across games
let globalScore = 0;

class ScoreKeeper extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { score: globalScore };
    this.myButtonRef = React.createRef();
  }

  incrementScore(increment = 1) {
    //console.log("button = ", this.myButtonRef.current);
    this.myButtonRef.current.click();
    globalScore += increment;
    this.setState({ score: globalScore });
  }

  handleClick = () => {
    // console.log("score button was clicked.");
    // move focus to scoreboard (and away from answer buttons)
    this.myButtonRef.current.focus();
  };

  resetGlobalScore() {
    //console.log("resetting global score to 0");
    globalScore = 0;
  }

  resetScore() {
    globalScore = 0;
    this.setState({ score: globalScore });
  }

  getScore() {
    return this.state.score;
  }

  render() {
    return (
      <div>
        <button
          // autoFocus
          ref={this.myButtonRef}
          onClick={this.handleClick}
          className="btn btn-danger btn-lg m-2"
        >
          Score = {this.state.score}
        </button>
      </div>
    );
  }
}

export default ScoreKeeper;
