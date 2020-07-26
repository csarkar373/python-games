import QuestionBaseClass from "../components/questionbaseclass";
//import * as StringConstants from "./stringconstants";

function stringQuestionNegN(props) {
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
  const index = (Math.floor(Math.random() * currentWord.length) + 1) * -1;

  sq.text = ['string = "' + currentWord + '"', "print(string[ " + index + " ]"];
  sq.buttonStates[0][currentWord.length + index] = 1;
  return sq;
}

export default stringQuestionNegN;
