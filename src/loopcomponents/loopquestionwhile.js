import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestionWhile(props) {
  // question will have 1 row and 8 columns
  const lq = new QuestionBaseClass(props, 1, 8);
  console.log("loop question base class", lq);
  lq.pointValue = 1;
  lq.rows = 1;
  // increment is 1,2 or 3
  const lowerBound = Math.floor(Math.random() * 4);
  let upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
  // bug fix 7/26/20 must limit loop length to no more than 7
  // so added lowerBound > 0
  const equalsChar = Math.random() > 0.5 && lowerBound > 0 ? "=" : "";

  lq.text = [
    "i = " + lowerBound,
    "while  i <" + equalsChar + " " + upperBound + ":",
    '   print("Hello!")',
    "   i += 1",
  ];
  if (equalsChar === "=") {
    ++upperBound;
  }
  let index = lowerBound;
  let counter = 0;
  while (index < upperBound) {
    console.log("counter = ", counter);
    ++counter;
    ++index;
  }
  lq.buttonStates[0][counter] = 1;
  return lq;
}

export default loopQuestionWhile;
