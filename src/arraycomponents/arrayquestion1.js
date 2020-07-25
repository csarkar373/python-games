import QuestionBaseClass from "../components/questionbaseclass";

function arrayQuestion1(props) {
  // question will have 1 row and 8 columns
  const aq = new QuestionBaseClass(props, 1, 8);
  // console.log("array question base class props", props);
  aq.pointValue = 1;
  aq.rows = 1;
  // question1 will have 1 row and 8 columns
  const index = Math.floor(Math.random() * aq.buttonStates[0].length);
  aq.buttonStates[0][index] = 1;
  aq.text = [`System.out.print( a[${index}] );`];
  //console.log("array question1 created aq = ", aq);
  return aq;
}

export default arrayQuestion1;
