import * as RelationalConstants from "./relationalconstants";
import RelationalQuestionGreater from "./relationalquestiongreater";
import RelationalQuestionLesser from "./relationalquestionlesser";
import RelationalQuestionAnd from "./relationalquestionand";
import RelationalQuestionOr from "./relationalquestionor";
import RelationalQchallenge1 from "./relationalqchallenge1";
import RelationalQchallenge2 from "./relationalqchallenge2";
import RelationalQchallenge3 from "./relationalqchallenge3";

export class RelationalQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.compound = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === RelationalConstants.COMPOUNDOPTIONID) {
          this.compound = option.checked;
          console.log("changing compound option to ", this.compound);
        }
        if (option.id === RelationalConstants.CHALLENGEOPTIONID) {
          this.challenge = option.checked;
          console.log("changing compound option to ", this.challenge);
        }
      }
    } else {
      // mixed game
      this.compound = true;
      this.challenge = true;
    }
  }

  getQuestion(props) {
    //console.log("getQuestion loops 2D", this.loops, this.twod);

    let questionTypes = [RelationalQuestionGreater, RelationalQuestionLesser];

    // add compound?
    if (this.compound) {
      questionTypes.push(RelationalQuestionAnd);
      questionTypes.push(RelationalQuestionAnd);
      questionTypes.push(RelationalQuestionOr);
      questionTypes.push(RelationalQuestionOr);
    }

    // add challenge
    if (this.challenge) {
      questionTypes = [];
      questionTypes.push(RelationalQchallenge1);
      questionTypes.push(RelationalQchallenge2);
      questionTypes.push(RelationalQchallenge3);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);
    //const question = new RelationalQuestionLesser(props);
    //const question = new relationalQuestionGreater(props);
    //const question = new RelationalQuestionAnd(props);
    //const question = new RelationalQuestionOr(props);
    //const question = new RelationalQchallenge3(props);
    //console.log("getQuestion", question);
    return question;
  }
}
