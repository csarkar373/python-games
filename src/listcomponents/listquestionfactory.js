import * as ListConstants from "./listconstants";
import listQuestion1 from "./listquestion1";
import listQuestionNCN from "./listncn";
import listQuestionNC from "./listnc";
//import listQuestion1neg from "./listquestion1neg";
import listQuestion2 from "./listquestion2";
import listQuestion2r from "./listquestion2r";

export class ListQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.loops = false;
      this.twod = false;
      this.negative = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === ListConstants.LOOPSOPTIONID) {
          this.loops = option.checked;
          // console.log("changing loops option to ", this.loops);
        }
        if (option.id === ListConstants.TWODOPTIONID) {
          this.twod = option.checked;
          // console.log("changing 2D option to ", this.twod);
        }
        if (option.id === ListConstants.NEGATIVEOPTIONID) {
          this.negative = option.checked;
          // console.log("changing 2D option to ", this.twod);
        }
      }
    } else {
      // mixed game
      this.loops = true;
      this.twod = true;
      this.negative = true;
    }
  }

  getQuestion(props) {
    //console.log("getquestion props", props);

    //console.log("getQuestion loops 2D", this.loops, this.twod);

    let questionTypes = [listQuestion1];

    // add loops?
    if (this.loops) {
      questionTypes.push(listQuestionNCN);
      questionTypes.push(listQuestionNC);
      //questionTypes.push(listQuestion1b);
    }

    // add 2D?
    if (this.twod) {
      questionTypes.push(listQuestion2);
      questionTypes.push(listQuestion2);
    }

    // add 2D with loops?
    if (this.loops && this.twod) {
      questionTypes.push(listQuestion2r);
      questionTypes.push(listQuestion2r);
      questionTypes.push(listQuestion2r);
      questionTypes.push(listQuestion2r);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);
    //console.log("creating question in factory", question);
    //const question = new listQuestion1(props);
    //const question = new listQuestionNCN(props);
    //const question = new listQuestion2();
    //const question = new listQuestion2r();
    //console.log("getQuestion", question);
    return question;
  }
}
