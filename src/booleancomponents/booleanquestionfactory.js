import * as BooleanConstants from "./booleanconstants";
import BooleanBasicAnd from "./booleanbasicand";
import BooleanBasicOr from "./booleanbasicor";
import BooleanCompoundAnd from "./booleancompoundand";
import BooleanCompoundOr from "./booleancompoundor";
import BooleanChallenge1 from "./booleanchallenge1";
import BooleanChallengeOr1 from "./booleanchallengeor1";
import BooleanChallengeAnd1 from "./booleanchallengeand1";

export class BooleanQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.compound = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === BooleanConstants.COMPOUNDOPTIONID) {
          this.compound = option.checked;
          //console.log("changing compound option to", this.compound);
        }
        if (option.id === BooleanConstants.CHALLENGEOPTIONID) {
          this.challenge = option.checked;
          // console.log("changing compound option to ", this.challenge);
        }
      }
    } else {
      this.compound = true;
      this.challenge = true;
    }
  }

  getQuestion(props) {
    //console.log("getQuestion loops 2D", this.loops, this.twod);

    let questionTypes = [BooleanBasicAnd, BooleanBasicOr];

    // add compound?
    if (this.compound) {
      questionTypes.push(BooleanCompoundAnd);
      questionTypes.push(BooleanCompoundAnd);
      questionTypes.push(BooleanCompoundAnd);
      questionTypes.push(BooleanCompoundOr);
      questionTypes.push(BooleanCompoundOr);
      questionTypes.push(BooleanCompoundOr);
    }

    // add challenge
    if (this.challenge) {
      questionTypes = [];
      questionTypes.push(BooleanChallenge1);
      questionTypes.push(BooleanChallengeOr1);
      questionTypes.push(BooleanChallengeAnd1);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);

    //const question = new BooleanBasicOr(props);
    //const question = new BooleanBasicAnd(props);
    //const question = new BooleanCompoundAnd(props);
    //const question = new BooleanCompoundOr(props);
    //const question = new BooleanChallengeOr1(props);
    //const question = new BooleanChallengeAnd1(props);
    console.log("getQuestion", question);
    return question;
  }
}
