// format (a && b || c && d)

import React from "react";
import QuestionBaseClass from "../components/questionbaseclass";
import "bootstrap/dist/css/bootstrap.css";
import * as AppConstants from "../util/appconstants";

function booleanChallengeOr1(props) {
  // question will have 1 row and 2 columns for yes/no
  const bq = new QuestionBaseClass(props, 1, 2);
  console.log("boolean question base class", bq);
  bq.pointValue = 4;
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
  let displayNumber2 = randomNumber;
  const rightAnswer = Math.random() > 0.5 ? true : false;
  let notColor = "";
  let notColor2 = "";
  let notNumber = "";
  let notNumber2 = "";

  const split = Math.random();
  if (rightAnswer) {
    yes = 1;
    no = 0;

    if (split < 0.2) {
      notNumber = "!";
      ++displayColorIndex2;
      notNumber2 = "!";
    }
    if (split >= 0.2 && split < 0.4) {
      ++displayColorIndex;
      notColor = "!";
      displayNumber += 2;
      notColor2 = "!";
      notNumber2 = "!";
    }
    if (split >= 0.4 && split < 0.6) {
      ++displayColorIndex;
      displayNumber += 2;
      notColor2 = "!";
      ++displayNumber2;
      notNumber2 = "!";
    }
    if (split >= 0.6 && split < 0.8) {
      ++displayColorIndex;
      notColor2 = "!";
      notNumber2 = "!";
    }
    if (split >= 0.8) {
      ++displayColorIndex;
      ++displayNumber2;
      notColor2 = "!";
      ++displayColorIndex2;
      notNumber2 = "!";
    }
  }
  if (!rightAnswer) {
    yes = 0;
    no = 1;
    if (split < 0.2) {
      ++displayColorIndex;
      ++displayNumber;
      notColor2 = "!";
      notNumber2 = "!";
    }
    if (split >= 0.2 && split < 0.4) {
      ++displayColorIndex;
      notNumber = "!";
      notColor2 = "!";
      notNumber2 = "!";
    }
    if (split >= 0.4 && split < 0.6) {
      notColor = "!";
      notNumber = "!";
      ++displayColorIndex2;
      --displayNumber2;
    }
    if (split >= 0.6 && split < 0.8) {
      notColor = "!";
      displayNumber += 2;
      notColor2 = "!";
      ++displayNumber2;
    }
    if (split >= 0.8) {
      notColor = "!";
      displayNumber += 2;
      notColor2 = "!";
      notNumber2 = "!";
    }
  }
  bq.buttonStates[0][0] = yes;
  bq.displayValues[0][0] = "true";
  bq.buttonStates[0][1] = no;
  bq.displayValues[0][1] = "false";
  console.log(
    "right answer = ",
    color,
    rightAnswer,
    displayNumber,
    randomNumber,
    displayColorIndex,
    randomColorIndex
  );
  const button = (
    <div className={"centered"}>
      <button className={"btn " + color}>{randomNumber}</button>
    </div>
  );
  bq.text = [
    button,
    `(  ${notColor}${AppConstants.COLORNAMES[displayColorIndex]} || ${notNumber}${displayNumber} || ${notColor2}${AppConstants.COLORNAMES[displayColorIndex2]} || ${notNumber2}${displayNumber2}  )`,
  ];
  return bq;
}

export default booleanChallengeOr1;
