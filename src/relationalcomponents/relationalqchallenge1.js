// format (x > a || x < b && !(x > c))

import QuestionBaseClass from "../components/questionbaseclass";

function relationalQchallenge1(props) {
  // dataSize currently between 2 and 4, inclusive
  const dataSize = Math.floor(Math.random() * 3) + 2;
  //const dataSize = 6; // debug
  // question will have 1 row and dataSize + 2 columns for All/None
  const rq = new QuestionBaseClass(props, 1, dataSize + 2);
  //console.log("array question base class", rq);
  rq.pointValue = 5;
  rq.rows = 1;
  let all = 1;
  let none = 1;

  let opGT = Math.floor(Math.random() * 100);
  let opLT = Math.floor(Math.random() * 100);
  let opNE = Math.floor(Math.random() * 100);

  if (opLT > opGT) {
    const temp = opGT;
    opGT = opLT;
    opLT = temp;
  }

  if (opNE > opLT) {
    const temp = opLT;
    opLT = opNE;
    opNE = temp;
  }

  const equalSignGT = Math.random() > 0.5 ? "=" : "";
  const adjustedOpGT = equalSignGT === "=" ? opGT - 1 : opGT;

  const equalSignLT = Math.random() > 0.5 ? "=" : "";
  const adjustedOpLT = equalSignLT === "=" ? opLT + 1 : opLT;

  for (let i = 1; i <= dataSize; ++i) {
    const buttonValue = Math.floor(Math.random() * 100);
    rq.displayValues[0][i] = buttonValue;
    if (
      buttonValue > adjustedOpGT ||
      (buttonValue < adjustedOpLT && !(buttonValue > opNE))
    ) {
      rq.buttonStates[0][i] = 1;
      none = 0;
    } else {
      all = 0;
    }
  }
  if (all) {
    for (let i = 1; i <= dataSize; ++i) {
      rq.buttonStates[0][i] = 0;
    }
  }
  rq.buttonStates[0][0] = none;
  rq.displayValues[0][0] = "None";
  rq.buttonStates[0][dataSize + 1] = all;
  rq.displayValues[0][dataSize + 1] = "All";
  rq.text = [
    `(x >${equalSignGT} ${opGT} || ` +
      `x <${equalSignLT} ${opLT} && !(x >${opNE}))`,
  ];
  return rq;
}

export default relationalQchallenge1;
