import React from 'react'
import PropTypes from 'prop-types'
import ResponseCheck from "../responses/ResponseCheck";

const SingleRowCheck = ({question, answers, onAnswer}) => (
    <div className="answer-container text-center row justify-content-center">
        { answers.map(a => (
            <div key={a.answerId} className="d-inline-block">
            <ResponseCheck

            answerId={a.answerId}
            onChecked={(checked) => onAnswer(a.answerId, checked)}
            text={a.text}
            checkType={question.questionTypeId === 2 ? "checkbox" : "radio"}
            checked={a.checked} /></div>
        )) }
    </div>
);

SingleRowCheck.propTypes = {
    question: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool
    })).isRequired
};

export default SingleRowCheck