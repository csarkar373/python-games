import QuestionBaseClass from "../components/questionbaseclass";
import * as StringConstants from "./stringconstants";

function stringQuestionNCN(props) {
  //pick a word from the word pool at random
  const wordIndex = StringConstants.WORDPOOL.length;
  const currentWord =
    StringConstants.WORDPOOL[Math.floor(Math.random() * wordIndex)];
  // question will have 1 row and 8 columns
  const sq = new QuestionBaseClass(props, 1, currentWord.length);
  // adjust the button display values
  for (let i = 0; i < currentWord.length; ++i) {
    sq.displayValues[0][i] = currentWord.substring(i, i + 1);
  }
  //console.log("array question base class", sq);
  sq.pointValue = 2;
  sq.rows = 1;
  const length = currentWord.length;
  const lowerBound = Math.floor((Math.random() * length) / 2);
  let upperBound =
    Math.floor(Math.random() * (length - lowerBound)) + lowerBound + 1;
  for (let i = lowerBound; i < upperBound; ++i) {
    sq.buttonStates[0][i] = 1;
  }

  sq.text = [
    `string = "${currentWord}"`,
    `print(string[ ${lowerBound} : ${upperBound} ])`,
  ];
  return sq;
}

export default stringQuestionNCN;
