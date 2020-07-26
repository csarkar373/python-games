import QuestionBaseClass from "../components/questionbaseclass";
//import * as StringConstants from "./stringconstants";

function stringQuestionNeg3(props) {
  //pick a word from the word pool at random
  //const wordIndex = StringConstants.WORDPOOL.length;
  // const currentWord =
  // StringConstants.WORDPOOL[Math.floor(Math.random() * wordIndex)];
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
  const increment = sq.randomIncrementOrDecrement();
  const lowerBound = Math.floor((Math.random() * currentWord.length) / 2);
  let upperBound =
    Math.floor(Math.random() * (currentWord.length - lowerBound)) + lowerBound;
  sq.text = [
    'String word = "' + currentWord + '";',
    'Strings s = "";',
    "for(int i=" +
      lowerBound +
      "; i <" +
      upperBound +
      "; i+=" +
      increment +
      ") {",
    "   s += word.substring(i, i+1); ",
    "}",
  ];

  for (let i = lowerBound; i < upperBound; i += increment) {
    sq.buttonStates[0][i] = 1;
  }
  return sq;
}

export default stringQuestionNeg3;
