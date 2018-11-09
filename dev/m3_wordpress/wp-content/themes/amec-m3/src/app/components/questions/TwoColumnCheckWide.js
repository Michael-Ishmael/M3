import React from 'react'
import PropTypes from 'prop-types'
import ResponseCheck from "../responses/ResponseCheck";

const TwoColumnCheckWide = ({question, answers, onAnswer}) => {

    return (
        <div className="justify-content-center row">
            <div className="col-12" style={{maxWidth: '960px'}}>
                <div className="answer-container text-center row ">
                    {answers.map((a, i) => {
                        let offsetClass = i % 2 === 0 ? " col-md-4 offset-md-2" : " col-md-5";
                        return <div key={a.answerId} className={"col-6 text-left" + offsetClass}>
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

TwoColumnCheckWide.propTypes = {
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

export default TwoColumnCheckWide