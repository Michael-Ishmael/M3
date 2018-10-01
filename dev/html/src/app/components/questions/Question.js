import React from 'react'
import PropTypes from 'prop-types'
import ResponseCheck from "../responses/ResponseCheck";
import ResponseText from "../responses/ResponseText";
import SingleRowCheck from "./SingleRowCheck";
import TwoColumnCheckWide from "./TwoColumnCheckWide";
import TwoColumnCheckNarrow from "./TwoColumnCheckNarrow";
import {splitParagraphs} from "../../services/util";
import SingleColumn from "./SingleColumn";

const QuestionTemplates = {
    SINGLE_COLUMN_NARROW: "SINGLE_COLUMN_NARROW",
    SINGLE_COLUMN_WIDE: "SINGLE_COLUMN_WIDE",
    SINGLE_ROW: "SINGLE_ROW",
    TWO_COLUMN_NARROW: "TWO_COLUMN_NARROW",
    THREE_COLUMN: "THREE_COLUMN",
    TWO_COLUMN_WIDE: "TWO_COLUMN_WIDE",
    TEXT_INPUT: "TEXT_INPUT",
};

const Question = ({question, answers, onAnswer}) => {

    const handleCheck = (answerId, checked) => {
        onAnswer(question, answerId, checked)
    };

    const handleText = (answerId, text) => {
        if(text && text.trim()) onAnswer(question, answerId, false, text)
    };

    let body;
    switch (question.template) {
        case QuestionTemplates.SINGLE_ROW:
            body = (<SingleRowCheck question={question} answers={answers} onAnswer={handleCheck} />);
            break;
        case QuestionTemplates.TWO_COLUMN_WIDE:
            body = (<TwoColumnCheckWide question={question} answers={answers} onAnswer={handleCheck} />);
            break;
        case QuestionTemplates.SINGLE_COLUMN_NARROW:
            body = (<SingleColumn question={question} answers={answers} onAnswer={handleCheck} offset={2} />);
            break;
        case QuestionTemplates.SINGLE_COLUMN_WIDE:
            body = (<SingleColumn question={question} answers={answers} onAnswer={handleCheck} offset={1} />);
            break;
        case QuestionTemplates.TEXT_INPUT:
            let answer = answers.find(a => a.questionId === question.questionId);
            let val = answer.responseText ?  answer.responseText : "";
            body = (<ResponseText answerId={answer.answerId} responseText={val} answerText={answer.text} handleTextAnswer={handleText} />);
            break;
        case QuestionTemplates.TWO_COLUMN_NARROW:
        default:
            body = (<TwoColumnCheckNarrow question={question} answers={answers} onAnswer={handleCheck} />);
            break;

    }
    return (
        <div className="question-container ">
                <div className="question-text-container row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                {

                    splitParagraphs(question.text).map((pText, i) => {
                        if(i===0){
                            return (<h2 key={i} className="question">{pText}</h2>)
                        } else {

                        }
                        let pClass = i > 0 ? "sml" : "";
                        return (
                            <p key={i} className={pClass}>
                                {pText}
                            </p>)
                    })
                }
                    </div>
                </div>
                <div className="row justify-content-center">
                    { body }
                </div>
        </div>
    );
};


Question.propTypes = {
    question: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default Question