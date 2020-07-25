import QuestionBaseClass from "../components/questionbaseclass";

function arrayQuestion2r(props) {
  // question will have 1 row and 8 columns
  const aq = new QuestionBaseClass(props, 3, 8);
  //console.log("array question base class", aq);
  aq.pointValue = 3;
  aq.rows = 3;
  // increment is 1 or 2
  const incrementRow = 1;
  const lowerBoundRow = Math.floor(Math.random() * 2);
  let upperBoundRow =
    Math.floor(Math.random() * (3 - lowerBoundRow)) + lowerBoundRow;

  const incrementCol = aq.randomIncrementOrDecrement();
  const lowerBoundCol = Math.floor(Math.random() * 4);
  let upperBoundCol =
    Math.floor(Math.random() * (7 - lowerBoundCol)) + lowerBoundCol;

  const equalsCharRow =
    Math.random() > 0.5 || upperBoundRow === lowerBoundRow ? "=" : "";
  const equalsCharCol =
    Math.random() > 0.5 || upperBoundCol === lowerBoundCol ? "=" : "";

  aq.text = [
    "for(int r=" +
      lowerBoundRow +
      "; r <" +
      equalsCharRow +
      " " +
      upperBoundRow +
      "; r+=" +
      incrementRow +
      ") {",
    "   for(int c=" +
      lowerBoundCol +
      "; c <" +
      equalsCharCol +
      " " +
      upperBoundCol +
      "; c+=" +
      incrementCol +
      ") {",
    "      System.out.print( a[r][c] );",
    "   }",
    "}",
  ];
  if (equalsCharRow === "=") {
    ++upperBoundRow;
  }
  if (equalsCharCol === "=") {
    ++upperBoundCol;
  }
  //console.log("button states", aq.buttonStates);
  for (let r = lowerBoundRow; r < upperBoundRow; r += incrementRow) {
    for (let c = lowerBoundCol; c < upperBoundCol; c += incrementCol) {
      aq.buttonStates[r][c] = 1;
    }
  }
  return aq;
}

export default arrayQuestion2r;
