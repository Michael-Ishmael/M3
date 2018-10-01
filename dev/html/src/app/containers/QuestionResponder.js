import React from "react";
import { connect } from 'react-redux'
import {
    singleQuestionAnswered,
    textQuestionAnswered,
    multipleQuestionAnswered
} from '../actions'
import Question from '../components/questions/Question'


const QuestionSelector = ({question, answers, classNames, onAnswer}) => {

    return (<Question question={question} answers={answers} classNames={ classNames} onAnswer={onAnswer}  />)
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
        if(question.questionTypeId === 2) return dispatch(multipleQuestionAnswered(question.questionId, answerId, checked))
        if(question.questionTypeId === 3) return dispatch(textQuestionAnswered(question.questionId, answerId, text));
        return dispatch(singleQuestionAnswered(question.questionId, answerId));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionSelector)