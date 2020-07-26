import * as StringConstants from "./stringconstants";
import StringQuestionCN from "./stringquestioncn";
import StringQuestionNCN from "./stringquestionncn";
import StringQuestionNC from "./stringquestionnc";
import StringQuestionNegN from "./stringnegn";
import StringQuestionNegPCN from "./stringnegpcn";
import StringQuestionNegNCN from "./stringnegncn";
import StringQuestionNegNC from "./stringnegnc";

export class StringQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.negatives = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === StringConstants.NEGATIVESOPTIONID) {
          this.negatives = option.checked;
          // console.log("changing negatives option to ", this.negatives);
        }
      }
    } else {
      // mixed game
      this.negatives = true;
    }
  }

  getQuestion(props) {
    //console.log("getQuestion negatives 2D", this.negatives, this.twod);

    let questionTypes = [
      StringQuestionCN,
      StringQuestionNC,
      StringQuestionNCN,
      StringQuestionNCN,
      StringQuestionNCN,
    ];

    // add negatives?
    if (this.negatives) {
      questionTypes.push(StringQuestionNegN);
      questionTypes.push(StringQuestionNegN);
      questionTypes.push(StringQuestionNegPCN);
      questionTypes.push(StringQuestionNegPCN);
      questionTypes.push(StringQuestionNegNC);
      questionTypes.push(StringQuestionNegNC);
      questionTypes.push(StringQuestionNegNCN);
      questionTypes.push(StringQuestionNegNCN);
      questionTypes.push(StringQuestionNegNCN);
      questionTypes.push(StringQuestionNegNCN);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);

    //const question = new StringQuestion1(props);
    //const question = new StringQuestionNCN(props);
    //const question = new StringQuestionNC(props);
    //const question = new StringQuestionNegN(props);
    //const question = new StringQuestionNegPCN(props);
    //const question = new StringQuestionNegNCN(props);
    //const question = new StringQuestionNegNC(props);
    //console.log("getQuestion", question);
    return question;
  }
}
