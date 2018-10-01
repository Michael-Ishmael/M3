import React from 'react'
import PropTypes from 'prop-types'
import ResponseCheck from "../responses/ResponseCheck";

const TwoColumnCheckNarrow = ({question, answers, onAnswer}) => (
            <div className="answer-container text-center row justify-content-center">
                <div className="col-10 col-lg-8">
                    <div className="row justify-content-center">
                        {answers.map((a, i) => {
                            let offsetClass = ""; // i % 2 === 0 ? " offset-md-1" : "";
                            return <div key={a.answerId} className={"col-5 text-left" + offsetClass}>
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

TwoColumnCheckNarrow.propTypes = {
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

export default TwoColumnCheckNarrow