import QuestionBaseClass from "../components/questionbaseclass";

function arrayQuestion2(props) {
  // question will have 1 row and 8 columns
  const aq = new QuestionBaseClass(props, 3, 8);
  //console.log("array question base class", aq);
  aq.pointValue = 3;
  aq.rows = 3;
  const row = Math.floor(Math.random() * aq.buttonStates.length);
  const col = Math.floor(Math.random() * aq.buttonStates[0].length);
  aq.buttonStates[row][col] = 1;
  //this.buttonIds = [0, 1, 2, 3, 4, 5, 6, 7];
  aq.text = [`print( c[${row}][${col}] );`];
  return aq;
}

export default arrayQuestion2;
