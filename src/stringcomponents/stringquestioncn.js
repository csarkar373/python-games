import QuestionBaseClass from "../components/questionbaseclass";
import * as StringConstants from "./stringconstants";

function stringQuestionCN(props) {
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
  sq.pointValue = 1;
  sq.rows = 1;
  const upperBound = Math.floor(Math.random() * (currentWord.length - 1)) + 1;
  for (let i = 0; i < upperBound; ++i) {
    sq.buttonStates[0][i] = 1;
  }
  sq.text = [`string = "${currentWord}"`, `print(string[  : ${upperBound} ])`];
  return sq;
}

export default stringQuestionCN;
