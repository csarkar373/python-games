import * as LoopConstants from "./loopconstants";
import loopQuestion1 from "./loopquestion1";
import loopQuestion2 from "./loopquestion2";
import loopQuestionNeg from "./loopquestionneg";
import loopQuestionNested from "./loopquestionnested";
import loopQuestionWhile from "./loopquestionwhile";

export class LoopQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.negatives = false;
      this.while = false;
      this.nested = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === LoopConstants.NEGATIVESOPTIONID) {
          this.negatives = option.checked;
          // console.log("changing negatives option to ", this.negatives);
        }
        if (option.id === LoopConstants.WHILEOPTIONID) {
          this.while = option.checked;
          // console.log("changing do while option to ", this.nested);
        }
        if (option.id === LoopConstants.NESTEDOPTIONID) {
          this.nested = option.checked;
          // console.log("changing nested option to ", this.nested);
        }
      }
    } else {
      // mixed game
      this.negatives = true;
      this.while = true;
      this.nested = true;
    }
  }

  getQuestion(props) {
    //console.log("getquestion props", props);

    //console.log("getQuestion negatives nested", this.negatives, this.nested);

    let questionTypes = [loopQuestion1, loopQuestion2];

    // add do while?
    if (this.while) {
      questionTypes.push(loopQuestionWhile);
      questionTypes.push(loopQuestionWhile);
      questionTypes.push(loopQuestionWhile);
    }

    // add negatives?
    if (this.negatives) {
      questionTypes.push(loopQuestionNeg);
      questionTypes.push(loopQuestionNeg);
      questionTypes.push(loopQuestionNeg);
    }

    // add nested
    if (this.nested) {
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
    }

    //const random = Math.floor(Math.random() * questionTypes.length);
    //const question = new questionTypes[random](props);
    //console.log("creating question in factory", question);
    //const question = new loopQuestion1(props);
    //const question = new loopQuestion1b(props);
    //const question = new loopQuestionNested(props);
    const question = new loopQuestionWhile(props);
    //console.log("getQuestion", question);
    return question;
  }
}
