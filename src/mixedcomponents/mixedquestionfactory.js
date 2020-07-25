import { ArrayQuestionFactory } from "../arraycomponents/arrayquestionfactory";
import { BooleanQuestionFactory } from "../booleancomponents/booleanquestionfactory";
import { RelationalQuestionFactory } from "../relationalcomponents/relationalquestionfactory";
import { StringQuestionFactory } from "../stringcomponents/stringquestionfactory";
import { LoopQuestionFactory } from "../loopcomponents/loopquestionfactory";

export class MixedQuestionFactory {
  constructor(options) {
    console.log("mixedquestion factory constructor");
  }

  getQuestion(props) {
    const factories = [
      ArrayQuestionFactory,
      BooleanQuestionFactory,
      RelationalQuestionFactory,
      StringQuestionFactory,
      LoopQuestionFactory,
    ];
    const factory = new factories[
      Math.floor(Math.random() * factories.length)
    ]();
    console.log("factory=", factory);
    const question = factory.getQuestion(props);
    console.log("mixed question =", question);
    return question;
  }
}
