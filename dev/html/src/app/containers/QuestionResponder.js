import React from "react";
import { connect } from 'react-redux'
import {
    singleQuestionAnswered,
    textQuestionAnswered,
    multipleQuestionAnswered, setRoutingFlag
} from '../actions'
import QuestionRadio from '../components/questions/QuestionRadio'


const QuestionSelector = ({question, answers, onAnswer, onRouteSet}) => {

    const handleQuestionAnswered = (question, answer, checked, text) => {
        if(question.setRoutingCondition){
            if(answer.setRoutingCondition){
                onRouteSet(answer.setRoutingCondition.key, answer.setRoutingCondition.value)
            } else {
                onRouteSet(question.setRoutingCondition.key, question.setRoutingCondition.defaultValue)
            }
        }

        onAnswer(question, answer, checked, text)
    };

    return (<QuestionRadio question={question} answers={answers} onAnswer={handleQuestionAnswered}  />)
};

const mapStateToProps = (state, ownProps) => {

    return {
        question: ownProps.question,
        answers: ownProps.answers
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAnswer: (question, answer, checked, text) => {
        if(question.questionTypeId === 2) return dispatch(multipleQuestionAnswered(question.questionId, answer.answerId, checked))
        if(question.questionTypeId === 3) return dispatch(textQuestionAnswered(question.questionId, answer.answerId, text));
        return dispatch(singleQuestionAnswered(question.questionId, answer.answerId));
    },
    onRouteSet: (key, value) => dispatch(setRoutingFlag(key, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionSelector)