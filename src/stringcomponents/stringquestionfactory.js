import * as StringConstants from "./stringconstants";
import StringQuestion1 from "./stringquestion1";
import StringQuestion1r from "./stringquestion1r";
import StringQuestion1s from "./stringquestion1s";
import StringQuestion1loop from "./stringquestion1loop";

export class StringQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.loops = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === StringConstants.LOOPSOPTIONID) {
          this.loops = option.checked;
          // console.log("changing loops option to ", this.loops);
        }
      }
    } else {
      // mixed game
      this.loops = true;
    }
  }

  getQuestion(props) {
    //console.log("getQuestion loops 2D", this.loops, this.twod);

    let questionTypes = [
      StringQuestion1,
      StringQuestion1s,
      StringQuestion1r,
      StringQuestion1r,
      StringQuestion1r,
    ];

    // add loops?
    if (this.loops) {
      questionTypes.push(StringQuestion1loop);
      questionTypes.push(StringQuestion1loop);
      questionTypes.push(StringQuestion1loop);
      questionTypes.push(StringQuestion1loop);
      questionTypes.push(StringQuestion1loop);
    }

    const random = Math.floor(Math.random() * questionTypes.length);

    const question = new questionTypes[random](props);
    //const question = new StringQuestion1(props);
    //const question = new StringQuestion1r(props);
    //const question = new StringQuestion1s(props);
    //const question = new StringQuestion1loop(props);
    //console.log("getQuestion", question);
    return question;
  }
}
