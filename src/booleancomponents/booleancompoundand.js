import React from "react";
import QuestionBaseClass from "../components/questionbaseclass";
import "bootstrap/dist/css/bootstrap.css";
import * as AppConstants from "../util/appconstants";

function booleanCompoundAnd(props) {
  // question will have 1 row and 2 columns for yes/no
  const bq = new QuestionBaseClass(props, 1, 2);
  console.log("boolean question base class", bq);
  bq.pointValue = 2;
  bq.rows = 1;
  let yes = 0;
  let no = 0;

  // 5 colors in AppConstants currently used (clear button colors not used)
  // the +2 skips the clear colors
  const randomColorIndex =
    Math.floor(Math.random() * AppConstants.USABLECOLORS) + 2;

  const color = AppConstants.BUTTONCOLORS[randomColorIndex];
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let displayColorIndex = randomColorIndex;
  let displayColorIndex2 = randomColorIndex;
  let displayNumber = randomNumber;
  const rightAnswer = Math.random() > 0.5 ? true : false;
  let notColor = "";
  let notColor2 = "";
  let notNumber = "";
  // console.log(
  //   "right answer = ",
  //   rightAnswer,
  //   displayNumber,
  //   randomNumber,
  //   displayColorIndex,
  //   randomColorIndex
  // );
  if (rightAnswer) {
    yes = 1;
    no = 0;
    if (Math.random() > 0.5) {
      displayColorIndex = randomColorIndex + 1;
      notColor = "!";
    }
    if (Math.random() > 0.5) {
      displayColorIndex2 = randomColorIndex + 1;
      notColor2 = "!";
    }
    if (Math.random() > 0.5) {
      displayNumber = randomNumber + 1;
      notNumber = "!";
    }
  } else {
    yes = 0;
    no = 1;
    if (Math.random() > 0.5) {
      if (Math.random() > 0.5) {
        //console.log("assign wrong color");
        displayColorIndex = randomColorIndex + 1;
      } else {
        notColor = "!";
      }
    } else {
      if (Math.random() > 0.75) {
        //console.log("assign wrong number");
        displayNumber = randomNumber + Math.floor(Math.random() * 3) + 1;
      } else {
        if (Math.random() > 0.5) {
          notNumber = "!";
        } else {
          notColor2 = "!";
        }
      }
    }
  }

  bq.buttonStates[0][0] = yes;
  bq.displayValues[0][0] = "true";
  bq.buttonStates[0][1] = no;
  bq.displayValues[0][1] = "false";
  const button = (
    <div className={"centered"}>
      <button className={"btn " + color}>{randomNumber}</button>
    </div>
  );
  bq.text = [
    button,
    `(  (${notColor}${AppConstants.COLORNAMES[displayColorIndex]} && ${notNumber}${displayNumber}) && (${notColor2}${AppConstants.COLORNAMES[displayColorIndex2]})  )`,
  ];
  return bq;
}

export default booleanCompoundAnd;
