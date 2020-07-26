import QuestionBaseClass from "../components/questionbaseclass";
//import * as StringConstants from "./stringconstants";

function stringQuestionNegNC(props) {
  const currentWord = "ABCDEFGH";
  // question will have 1 row and 8 columns
  const sq = new QuestionBaseClass(props, 1, currentWord.length);
  // adjust the button display values
  for (let i = 0; i < currentWord.length; ++i) {
    sq.displayValues[0][i] = currentWord.substring(i, i + 1);
  }
  //console.log("array question base class", sq);
  sq.pointValue = 3;
  sq.rows = 1;
  let lowerBound = Math.floor(Math.random() * currentWord.length);
  let upperBound = currentWord.length;
  for (let i = lowerBound; i < upperBound; i += 1) {
    sq.buttonStates[0][i] = 1;
  }

  lowerBound = lowerBound - currentWord.length;
  upperBound = upperBound - currentWord.length;
  sq.text = [
    'string = "' + currentWord + '"',
    "print(string[ " + lowerBound + ": ])",
  ];
  return sq;
}

export default stringQuestionNegNC;
