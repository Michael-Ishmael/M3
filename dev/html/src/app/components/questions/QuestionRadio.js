import React from 'react'
import PropTypes from 'prop-types'
import ResponseRadio from "../responses/ResponseRadio";


const QuestionRadio = ({question, answers, onAnswer}) => {

    const handleCheck = (answer, checked) => {
        if(checked){
            onAnswer(question, answer)
        }
    };


    return (
        <div>
            <div className="form-group">
                { question.text }
            </div>
            <div className="form-group">
                {
                    answers.map(answer =>
                        <ResponseRadio
                            key={answer.answerId}
                            answerId={answer.answerId}
                            onChecked={(checked) => handleCheck(answer, checked)}
                            text={answer.text}
                            checked={answer.checked}
                        />
                    )
                }
            </div>
        </div>
    );
};


QuestionRadio.propTypes = {
    text: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired
};

export default QuestionRadio