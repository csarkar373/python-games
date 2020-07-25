import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestion1(props) {
  // question will have 1 row and 8 columns
  const lq = new QuestionBaseClass(props, 1, 8);
  //console.log("array question base class", lq);
  lq.pointValue = 1;
  lq.rows = 1;
  // increment is 1,2 or 3
  const increment = lq.randomIncrementOrDecrement();
  const lowerBound = Math.floor(Math.random() * 4);
  let upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
  const equalsChar = Math.random() > 0.5 ? "=" : "";
  lq.text = [
    "for(int i=" +
      lowerBound +
      "; i <" +
      equalsChar +
      " " +
      upperBound +
      "; i+=" +
      increment +
      ") {",
    '   System.out.println("Hello!");',
    "}",
  ];
  if (equalsChar === "=") {
    ++upperBound;
  }
  let index = 0;
  for (let i = lowerBound; i < upperBound; i += increment) {
    ++index;
  }
  lq.buttonStates[0][index] = 1;
  return lq;
}

export default loopQuestion1;
