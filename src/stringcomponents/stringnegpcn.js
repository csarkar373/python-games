import QuestionBaseClass from "../components/questionbaseclass";
//import * as StringConstants from "./stringconstants";

function stringQuestionNegPCN(props) {
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
  const lowerBound = Math.floor((Math.random() * currentWord.length) / 2);
  let upperBound =
    Math.floor(Math.random() * (currentWord.length - lowerBound - 1)) +
    lowerBound +
    1;

  for (let i = lowerBound; i < upperBound; i += 1) {
    sq.buttonStates[0][i] = 1;
  }
  upperBound = upperBound - currentWord.length;
  sq.text = [
    'string = "' + currentWord + '"',
    "print( string[" + lowerBound + ":" + upperBound + " ])",
  ];
  return sq;
}

export default stringQuestionNegPCN;
