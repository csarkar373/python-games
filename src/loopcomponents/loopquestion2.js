import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestion2(props) {
  // question will have 1 row and 8 columns

  const lq = new QuestionBaseClass(props, 1, 8);
  //console.log("array question base class", lq);
  lq.pointValue = 1;
  lq.rows = 1;
  // increment is 1,2 or 3
  const increment = lq.randomIncrementOrDecrement();
  const lowerBound = Math.floor(Math.random() * upperBound);
  let upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
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
  let index = 0;
  for (let i = lowerBound; i < upperBound; i += increment) {
    ++index;
  }
  lq.buttonStates[0][index] = 1;
  return lq;
}

export default loopQuestion2;
