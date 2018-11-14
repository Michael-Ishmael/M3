import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ResponseText from "../responses/ResponseText";
import SingleRowCheck from "./SingleRowCheck";
import TwoColumnCheckWide from "./TwoColumnCheckWide";
import TwoColumnCheckNarrow from "./TwoColumnCheckNarrow";
import {splitParagraphs} from "../../services/util";
import SingleColumn from "./SingleColumn";
import scrollToComponent from 'react-scroll-to-component';
import AutoComplete from "../responses/AutoComplete";

const QuestionTemplates = {
    SINGLE_COLUMN_NARROW: "SINGLE_COLUMN_NARROW",
    SINGLE_COLUMN_WIDE: "SINGLE_COLUMN_WIDE",
    SINGLE_ROW: "SINGLE_ROW",
    TWO_COLUMN_NARROW: "TWO_COLUMN_NARROW",
    THREE_COLUMN: "THREE_COLUMN",
    TWO_COLUMN_WIDE: "TWO_COLUMN_WIDE",
    AUTO_COMPLETE: "AUTO_COMPLETE",
    TEXT_INPUT: "TEXT_INPUT",
};

class Question extends Component {

    constructor(props) {
        super(props);
        this.validationErrorSet = false;
    }

    componentDidUpdate() {
        if (this.props.showValidation && this.props.isError && this.errorItem) {
            scrollToComponent(this.errorItem, {offset: 0, align: 'middle', duration: 250});
        }

    }

    render() {

        const handleCheck = (answerId, checked) => {
            this.props.onAnswer(this.props.question, answerId, checked)
        };

        const handleText = (answerId, text) => {
            if (text && text.trim()) this.props.onAnswer(this.props.question, answerId, false, text)
        };

        let body;
        switch (this.props.question.template) {
            case QuestionTemplates.SINGLE_ROW:
                body = (<SingleRowCheck question={this.props.question} answers={this.props.answers}
                                        onAnswer={handleCheck}/>);
                break;
            case QuestionTemplates.TWO_COLUMN_WIDE:
                body = (<TwoColumnCheckWide question={this.props.question} answers={this.props.answers}
                                            onAnswer={handleCheck}/>);
                break;
            case QuestionTemplates.SINGLE_COLUMN_NARROW:
                body = (<SingleColumn question={this.props.question} answers={this.props.answers} onAnswer={handleCheck}
                                      offset={2}/>);
                break;
            case QuestionTemplates.SINGLE_COLUMN_WIDE:
                body = (<SingleColumn question={this.props.question} answers={this.props.answers} onAnswer={handleCheck}
                                      offset={1}/>);
                break;
            case QuestionTemplates.AUTO_COMPLETE:
                body = (<AutoComplete question={this.props.question} answers={this.props.answers} onAnswer={handleCheck}
                                      />);

                /*
                let answer = this.props.answers.find(a => a.questionId === this.props.question.questionId);
                let val = answer.responseText ? answer.responseText : "";
                body = (<ResponseText answerId={answer.answerId} responseText={val} answerText={answer.text}
                                      handleTextAnswer={handleText}/>);*/
                break;
            case QuestionTemplates.TWO_COLUMN_NARROW:
            default:
                body = (<TwoColumnCheckNarrow question={this.props.question} answers={this.props.answers}
                                              onAnswer={handleCheck}/>);
                break;

        }

        return (
            <div className="question-container ">
                <div className="question-text-container row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                        {

                            splitParagraphs(this.props.question.text).map((pText, i) => {

                                if (i === 0) {
                                    const errorRow = this.props.showValidation && this.props.isError;
                                    let errorClass = errorRow ? " row-error" : "";
                                    return (<h2 key={i} className={"question" + errorClass} ref={(tr) => {
                                        if (errorRow) this.errorItem = tr;
                                    }}>{pText}</h2>)
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
                    {body}
                </div>
            </div>
        );
    };
}


Question.propTypes = {
    question: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool,
    })).isRequired,
    onAnswer: PropTypes.func.isRequired,
    showValidation: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default Question