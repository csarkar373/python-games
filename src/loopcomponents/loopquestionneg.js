import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestionNeg(props) {
  // question will have 1 row and 8 columns
  let upperBound = 8;
  const lq = new QuestionBaseClass(props, 1, upperBound);
  //console.log("array question base class", lq);
  lq.pointValue = 1;
  lq.rows = 1;
  // increment is 1,2 or 3
  const increment = lq.randomIncrementOrDecrement();
  let lowerBound = Math.floor(Math.random() * upperBound);

  let index = 0;
  for (let i = lowerBound; i < upperBound; i += increment) {
    ++index;
  }
  lq.buttonStates[0][index] = 1;
  upperBound = upperBound - 8;
  lq.text = [
    "for x in range(" +
      lowerBound +
      ", " +
      upperBound +
      ", " +
      increment +
      "):",
    '   print("Hello!")',
  ];
  return lq;
}

export default loopQuestionNeg;
