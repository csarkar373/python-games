import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestionDo(props) {
  // question will have 1 row and 8 columns
  const lq = new QuestionBaseClass(props, 1, 8);
  console.log("loop question base class", lq);
  lq.pointValue = 1;
  lq.rows = 1;
  // increment is 1,2 or 3
  const lowerBound = Math.floor(Math.random() * 4);
  let upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
  const equalsChar = Math.random() > 0.5 ? "=" : "";
  lq.text = [
    "int i=" + lowerBound + ";",
    "do {",
    '   System.out.println("Hello!");',
    "} while (++i <" + equalsChar + " " + upperBound + ");",
  ];
  if (equalsChar === "=") {
    ++upperBound;
  }
  let index = lowerBound;
  let counter = 0;
  do {
    ++counter;
    console.log("counter = ", counter);
  } while (++index < upperBound);
  lq.buttonStates[0][counter] = 1;
  return lq;
}

export default loopQuestionDo;
