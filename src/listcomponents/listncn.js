import QuestionBaseClass from "../components/questionbaseclass";

function listQuestionNCN(props) {
  // question will have 1 row and 8 columns
  const aq = new QuestionBaseClass(props, 1, 8);
  //console.log("array question base class", aq);
  aq.pointValue = 2;
  aq.rows = 1;
  // increment is 1,2 or 3
  const increment = aq.randomIncrementOrDecrement();
  const lowerBound = Math.floor(Math.random() * 4);
  let upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
  aq.text = ["print( a[ " + lowerBound + ":" + upperBound + " ]) "];
  for (let i = lowerBound; i < upperBound; i += increment) {
    aq.buttonStates[0][i] = 1;
  }
  return aq;
}

export default listQuestionNCN;
