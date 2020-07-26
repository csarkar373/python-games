import QuestionBaseClass from "../components/questionbaseclass";

function arrayQuestion1b(props) {
  // question will have 1 row and 8 columns
  const aq = new QuestionBaseClass(props, 1, 8);
  //console.log("array question base class", aq);
  aq.pointValue = 2;
  aq.rows = 1;
  const decrement = aq.randomIncrementOrDecrement();
  let lowerBound = Math.floor(Math.random() * 4);
  const upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
  aq.text = ["still under construction", "print( a[i] );"];

  for (let i = upperBound; i > lowerBound; i -= decrement) {
    aq.buttonStates[0][i] = 1;
  }
  return aq;
}

export default arrayQuestion1b;
