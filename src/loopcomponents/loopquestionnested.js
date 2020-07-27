import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestionNested(props) {
  console.log("loop question nested");
  // question will have 1 row and 10 columns
  const lq = new QuestionBaseClass(props, 1, 8);

  lq.pointValue = 3;
  lq.rows = 1;
  // increment is 1 or 2
  let count = 0;
  do {
    let incrementOuter = lq.randomIncrementOrDecrement();
    let lowerBoundOuter = Math.floor(Math.random() * 4);
    let upperBoundOuter =
      Math.floor(Math.random() * (8 - lowerBoundOuter)) + lowerBoundOuter;

    let incrementInner = lq.randomIncrementOrDecrement();
    let lowerBoundInner = Math.floor(Math.random() * 4);
    let upperBoundInner =
      Math.floor(Math.random() * (8 - lowerBoundInner)) + lowerBoundInner;

    lq.text = [
      "for i in range ( " +
        lowerBoundOuter +
        ", " +
        upperBoundOuter +
        ", " +
        incrementOuter +
        " ):",
      "   for j in range (" +
        lowerBoundInner +
        ", " +
        upperBoundInner +
        ", " +
        incrementInner +
        " ):",
      '      print("Hello")',
    ];

    count = 0; // reset to zero for every do/while iteration
    for (let i = lowerBoundOuter; i < upperBoundOuter; i += incrementOuter) {
      for (let j = lowerBoundInner; j < upperBoundInner; j += incrementInner) {
        ++count;
      }
    }
  } while (count > 7);

  console.log("button states, right answer", lq.buttonStates, count);
  lq.buttonStates[0][count] = 1;

  return lq;
}

export default loopQuestionNested;
