import React from "react";

export class QuestionBaseClass {
  constructor(props, rows, cols) {
    //console.log("quesiton base constructor props", props);
    this.props = props;
    this.disabled = [];
    this.buttonStates = [];
    this.displayValues = [];
    for (let row = 0; row < rows; ++row) {
      const disabledRow = [];
      const buttonStateRow = [];
      const displayValueRow = [];
      for (let col = 0; col < cols; ++col) {
        disabledRow.push(false);
        buttonStateRow.push(0);
        displayValueRow.push(col);
      }
      this.disabled.push(disabledRow);
      this.buttonStates.push(buttonStateRow);
      this.displayValues.push(displayValueRow);
    }
    this.handleButton = this.handleButton.bind(this);
    // console.log("display values", this.displayValues);
  }

  randomIncrementOrDecrement() {
    // determine probability distribution
    const temp = [1, 1, 1, 1, 1, 2, 2, 2, 3];
    return temp[Math.floor(Math.random() * temp.length)];
  }

  handleButton = (row, col) => {
    //console.log("button clicked: row col ", row, col, this);
    //let question = { ...this.state.question };
    // right choice made = 2, wrong choice made = 3
    const newState = (this.buttonStates[row][col] =
      this.buttonStates[row][col] === 1 ? 2 : 3);
    this.buttonStates[row][col] = newState;
    this.disabled[row][col] = true;

    //console.log("newStates ", this.buttonStates);
    if (newState === 3) {
      this.incorrect(false);
      return;
    }
    if (this.allCorrect()) {
      //console.log("all correct getting next question");

      this.props.incrementScore(this.pointValue);
      this.clearButtonStates();
      this.props.nextQuestion();
      return; // do not update grid if all correct
      // console.log("got new question", question);
    } else {
      this.props.addToTimer();
    }
    this.props.updateGrid();
  };

  incorrect(timedOut) {
    //console.log("incorrect timeout = ", timedOut);
    for (let row = 0; row < this.buttonStates.length; ++row) {
      for (let col = 0; col < this.buttonStates[0].length; ++col) {
        this.disabled[row][col] = true; // disable all the buttons
        // mark which buttons should have been selected
        if (this.buttonStates[row][col] === 1) {
          this.buttonStates[row][col] = 4;
        }
      }
    }

    this.props.updateGrid();

    this.props.gameOver(timedOut);
  }

  allCorrect() {
    //console.log("entering allcorrect method");

    for (let row = 0; row < this.buttonStates.length; ++row) {
      for (let col = 0; col < this.buttonStates[0].length; ++col) {
        if (this.buttonStates[row][col] === 1) {
          //console.log("not all correct yet");
          return false;
        }
      }
    }

    //console.log("all correct ");

    return true;
  }

  clearButtonStates() {
    for (let row = 0; row < this.buttonStates.length; ++row) {
      for (let col = 0; col < this.buttonStates[0].length; ++col) {
        this.buttonStates[row][col] = 0;
      }
    }
  }

  displayQuestion() {
    //console.log("display question: ", this.text);
    const array = [];
    for (let i = 0; i < this.text.length; ++i) {
      array.push(<h5 key={i}>{this.text[i]}</h5>);
    }
    return array;
  }
}

export default QuestionBaseClass;
