import React from 'react'
import PropTypes from 'prop-types'
import ResponseCheck from "../responses/ResponseCheck";

const SingleColumn = ({question, answers, onAnswer, offset = 0}) => {

    let offsetClass = (offset < 0 || offset > 11) ? "" : " offset-" + offset;

    return (
        <div className="answer-container text-center row justify-content-center">

            <div className={"col-7" + offsetClass}>
                <div className="row justify-content-center">
                    {answers.map((a, i) => {
                        let offsetClass = ""; // i % 2 === 0 ? " offset-md-1" : "";
                        return <div key={a.answerId} className={"col-12 text-left" + offsetClass}>
                            <ResponseCheck
                                answerId={a.answerId}
                                onChecked={(checked) => onAnswer(a.answerId, checked)}
                                text={a.text}
                                checkType={question.questionTypeId === 2 ? "checkbox" : "radio"}
                                checked={a.checked}/></div>;
                    })
                    }
                </div>
            </div>
        </div>

    );
};

SingleColumn.propTypes = {
    question: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool
    })).isRequired,
    onAnswer: PropTypes.func.isRequired,
    offset: PropTypes.number

};

export default SingleColumn