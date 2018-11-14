import React from "react";
import { connect } from 'react-redux'
import {
    singleQuestionAnswered,
    textQuestionAnswered,
    multipleQuestionAnswered, saveResponse
} from '../actions'
import Question from '../components/questions/Question'


const QuestionSelector = ({question, answers, classNames, onAnswer, showValidation, isError}) => {

    return (<Question question={question} answers={answers} classNames={ classNames} onAnswer={onAnswer} showValidation={showValidation} isError={isError} />)
};

const mapStateToProps = (state, ownProps) => {

    return {
        question: ownProps.question,
        answers: ownProps.answers,
        classNames: ownProps.classNames
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer: (question, answerId, checked, text) => {
        const response = {
            questionnaireId: ownProps.questionnaireId,
            questionId: question.questionId,
            questionTypeId: question.questionTypeId,
            answerId,
            answerText: text,
            checked
        };

        return dispatch(saveResponse(response));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionSelector)