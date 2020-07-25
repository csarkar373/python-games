// format ( !(x > a) || !(x < b) && !(x > c))

import QuestionBaseClass from "../components/questionbaseclass";

function relationalQchallenge3(props) {
  // dataSize currently between 2 and 4, inclusive
  const dataSize = Math.floor(Math.random() * 3) + 2;
  //const dataSize = 6; // debug
  // question will have 1 row and dataSize + 2 columns for All/None
  const aq = new QuestionBaseClass(props, 1, dataSize + 2);
  //console.log("array question base class", aq);
  aq.pointValue = 5;
  aq.rows = 1;
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

  if (opLT > opNE) {
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
    aq.displayValues[0][i] = buttonValue;
    if (
      !(buttonValue > adjustedOpGT) ||
      (!(buttonValue < adjustedOpLT) && !(buttonValue > opNE))
    ) {
      aq.buttonStates[0][i] = 1;
      none = 0;
    } else {
      all = 0;
    }
  }
  if (all) {
    for (let i = 1; i <= dataSize; ++i) {
      aq.buttonStates[0][i] = 0;
    }
  }
  aq.buttonStates[0][0] = none;
  aq.displayValues[0][0] = "None";
  aq.buttonStates[0][dataSize + 1] = all;
  aq.displayValues[0][dataSize + 1] = "All";
  aq.text = [
    `(!(x >${equalSignGT} ${opGT}) || ` +
      `!(x <${equalSignLT} ${opLT}) && !(x >${opNE}))`,
  ];
  return aq;
}

export default relationalQchallenge3;
