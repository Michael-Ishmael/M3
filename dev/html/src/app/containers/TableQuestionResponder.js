import React from "react";
import { connect } from 'react-redux'
import {
    singleQuestionAnswered,
    textQuestionAnswered,
    multipleQuestionAnswered
} from '../actions'
import TabledRadios from "../components/questions/TabledRadios";


const TableQuestionSelector = ({questions, answers, onAnswer}) => {

    return (<TabledRadios questions={questions} answers={answers} onAnswer={onAnswer}  />)
};

const mapStateToProps = (state, ownProps) => {

    return {
        questions: ownProps.questions,
        answers: ownProps.answers,
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
)(TableQuestionSelector)