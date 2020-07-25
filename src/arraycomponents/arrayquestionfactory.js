import * as ArrayConstants from "./arrayconstants";
import arrayQuestion1 from "./arrayquestion1";
import arrayQuestion1r from "./arrayquestion1r";
import arrayQuestion1b from "./arrayquestion1b";
import arrayQuestion2 from "./arrayquestion2";
import arrayQuestion2r from "./arrayquestion2r";

export class ArrayQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.loops = false;
      this.twod = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === ArrayConstants.LOOPSOPTIONID) {
          this.loops = option.checked;
          // console.log("changing loops option to ", this.loops);
        }
        if (option.id === ArrayConstants.TWODOPTIONID) {
          this.twod = option.checked;
          // console.log("changing 2D option to ", this.twod);
        }
      }
    } else {
      // mixed game
      this.loops = true;
      this.twod = true;
    }
  }

  getQuestion(props) {
    //console.log("getquestion props", props);

    //console.log("getQuestion loops 2D", this.loops, this.twod);

    let questionTypes = [arrayQuestion1];

    // add loops?
    if (this.loops) {
      questionTypes.push(arrayQuestion1r);
      questionTypes.push(arrayQuestion1b);
    }

    // add 2D?
    if (this.twod) {
      questionTypes.push(arrayQuestion2);
      questionTypes.push(arrayQuestion2);
    }

    // add 2D with loops?
    if (this.loops && this.twod) {
      questionTypes.push(arrayQuestion2r);
      questionTypes.push(arrayQuestion2r);
      questionTypes.push(arrayQuestion2r);
      questionTypes.push(arrayQuestion2r);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);
    //console.log("creating question in factory", question);
    //const question = new arrayQuestion1(props);
    //const question = new arrayQuestion1b(props);
    //const question = new arrayQuestion2();
    //const question = new arrayQuestion2r();
    //console.log("getQuestion", question);
    return question;
  }
}
