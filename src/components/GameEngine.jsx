import React, { Component } from "react";
import Timer from "../components/Timer";
import Options from "../components/Options";
import ScoreKeeper from "../components/ScoreKeeper";
import Question from "../components/Question";
import "bootstrap/dist/css/bootstrap.css";
import * as AppConstants from "../util/appconstants";
import "../css/GameEngine.css";
import rightAnswer from "../sound/rightAnswer.wav";
import wrongAnswer from "../sound/wrongAnswer.mp3";
import timerExpired from "../sound/timerExpired.wav";
import { Howl, Howler } from "howler";

const GLOBALOPTIONS = [
  {
    id: AppConstants.SOUNDOPTIONID,
    label: "Sound",
    checked: AppConstants.DEFAULTSOUNDOPTION,
  },
  {
    id: AppConstants.TIMEROPTIONID,
    label: "Timer",
    checked: AppConstants.DEFAULTTIMEROPTION,
  },
];

class GameEngine extends Component {
  state = {};

  constructor(props) {
    super(props);
    //const qf = new this.props.questionFactory(this.props.options);
    const qf = new this.props.qf(this.props.options);
    this.state = { qf: qf, options: GLOBALOPTIONS };
    this.myScoreKeeperRef = React.createRef();
    this.myTimerRef = React.createRef();
    this.myQuestionRef = React.createRef();
    this.incrementScore = this.incrementScore.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.addToTimer = this.addToTimer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.timerTimeOut = this.timerTimeOut.bind(this);
    this.gameOver = this.gameOver.bind(this);
    //console.log("exiting game engine constructor");
  }

  playSound = (s) => {
    const sound = new Howl({ src: [s] });
    // is the sound enabled?
    if (this.getOptionValue(AppConstants.SOUNDOPTIONID)) {
      //console.log("playing sound");
      sound.play();
    }
  };

  getOptionValue(id) {
    let options = [...this.state.options];
    for (let i = 0; i < options.length; ++i) {
      if (options[i].id === id) return options[i].checked;
    }
    console.log("unknown option id supplied", id, options);
    return false; // option not found
  }

  handleOptions = (options, id, checked) => {
    this.setState(options);
  };

  handleRestart = () => {
    console.log("restart was pressed");
    this.myScoreKeeperRef.current.resetScore();
    // restart the timer?
    if (this.getOptionValue(AppConstants.TIMEROPTIONID)) {
      this.myTimerRef.current.resetTimer();
    }
    const qf = new this.props.qf(this.props.options);
    // bug fix: since qf will not get upated in state for a while
    // use the local copy of the new qf to restart the question sequence
    this.myQuestionRef.current.restart(qf);
    this.setState({ qf });
  };

  gameOver = (timedOut) => {
    //console.log("game over timeout = ", timedOut);
    // user loses this game but switches to new type of game ...
    // do not allow old score to stay but continue to display
    // old score until RESTART or new game is selected
    this.myScoreKeeperRef.current.resetGlobalScore();
    if (!timedOut) this.playSound(wrongAnswer);
    if (this.getOptionValue(AppConstants.TIMEROPTIONID)) {
      this.myTimerRef.current.stopTimer();
    }
  };

  nextQuestion = () => {
    //console.log("game engine next question qref=", this.myQuestionRef);
    const qf = new this.props.qf(this.props.options);
    this.myQuestionRef.current.nextQuestion(qf);
    this.setState({ qf: qf });
  };

  incrementScore(increment = 1) {
    this.playSound(rightAnswer);
    //console.log("game engine increment score", this.myScoreKeeperRef);
    if (this.getOptionValue(AppConstants.TIMEROPTIONID))
      this.myTimerRef.current.resetTimer();
    this.myScoreKeeperRef.current.incrementScore(increment);
  }

  timerTimeOut() {
    //console.log("Timer has timed out.");
    this.playSound(timerExpired);
    this.myQuestionRef.current.timeout();
    this.myTimerRef.current.stopTimer();
  }

  updateGrid() {
    this.myQuestionRef.current.updateGrid();
  }

  addToTimer() {
    if (this.getOptionValue(AppConstants.TIMEROPTIONID))
      this.myTimerRef.current.addToTimer();
  }

  makeTimer() {
    // console.log(
    //   "make timer option =",
    //   this.getOptionValue(AppConstants.TIMEROPTIONID)
    // );
    if (this.getOptionValue(AppConstants.TIMEROPTIONID)) {
      return (
        <Timer
          ref={this.myTimerRef}
          maxtime={this.props.maxtime}
          addtime={this.props.addtime}
          timeout={this.timerTimeOut}
          autoStart={false}
        />
      );
    }
  }

  render() {
    //console.log("game engine ", this.props.title);
    Howler.volume(1.0);
    return (
      <div className="gameEngine">
        <h4>{this.props.title}</h4>
        <div>
          {/*  global options (for all games) */}
          <Options options={GLOBALOPTIONS} onChange={this.handleOptions} />
          {/* options specific to the current game */}
          <Options
            options={this.props.options}
            onChange={this.props.handleOptions}
          />
        </div>
        <ScoreKeeper ref={this.myScoreKeeperRef} />
        <Question
          ref={this.myQuestionRef}
          options={this.props.options}
          labels={this.props.labels}
          qf={this.state.qf}
          nextQuestion={this.nextQuestion}
          updateGrid={this.updateGrid}
          incrementScore={this.incrementScore}
          gameOver={this.gameOver}
          addToTimer={this.addToTimer}
        />
        <button
          onClick={this.handleRestart}
          className="btn btn-danger m-2 btn-lg"
        >
          Restart
        </button>
        {this.makeTimer()}
      </div>
    );
  }
}

export default GameEngine;
