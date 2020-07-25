import * as LoopConstants from "./loopconstants";
import loopQuestion1 from "./loopquestion1";
import loopQuestion1b from "./loopquestion1b";
import loopQuestionNested from "./loopquestionnested";
import loopQuestionDo from "./loopquestiondo";

export class LoopQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.backwards = false;
      this.do = false;
      this.nested = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === LoopConstants.BACKWARDSOPTIONID) {
          this.backwards = option.checked;
          // console.log("changing backwards option to ", this.backwards);
        }
        if (option.id === LoopConstants.DOOPTIONID) {
          this.do = option.checked;
          // console.log("changing do while option to ", this.nested);
        }
        if (option.id === LoopConstants.NESTEDOPTIONID) {
          this.nested = option.checked;
          // console.log("changing nested option to ", this.nested);
        }
      }
    } else {
      // mixed game
      this.backwards = true;
      this.do = true;
      this.nested = true;
    }
  }

  getQuestion(props) {
    //console.log("getquestion props", props);

    //console.log("getQuestion backwards nested", this.backwards, this.nested);

    let questionTypes = [loopQuestion1];

    // add backwards?
    if (this.backwards) {
      questionTypes.push(loopQuestion1b);
      questionTypes.push(loopQuestion1b);
    }

    // add do while?
    if (this.do) {
      questionTypes.push(loopQuestionDo);
      questionTypes.push(loopQuestionDo);
    }

    // add nested
    if (this.nested) {
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);
    //console.log("creating question in factory", question);
    //const question = new loopQuestion1(props);
    //const question = new loopQuestion1b(props);
    //const question = new loopQuestionNested(props);
    // const question = new loopQuestionDo(props);
    //console.log("getQuestion", question);
    return question;
  }
}
