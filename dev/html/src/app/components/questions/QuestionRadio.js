import React from 'react'
import PropTypes from 'prop-types'
import ResponseCheck from "../responses/ResponseCheck";


const QuestionRadio = ({question, answers, onAnswer}) => {

    const handleCheck = (answer, checked) => {

            onAnswer(question, answer, checked)

    };

    const handleText = (answer, text, e) => {
        if(text && text.trim()) onAnswer(question, answer, false, text)
    };

    let getResponseCheck = (answer) => <ResponseCheck
        key={answer.answerId}
        answerId={answer.answerId}
        onChecked={(checked) => handleCheck(answer, checked)}
        text={answer.text}
        checkType={question.questionTypeId === 2 ? "checkbox" : "radio"}
        checked={answer.checked}
    />;

    let body;
    if(question.questionTypeId === 3){
        let answer = answers.find(a => a.questionId === question.questionId);
        let val = answer.responseText ?  answer.responseText : "";
        body = <input type="text" value={val} onChange={(e) => handleText(answer, e.target.value, e)}/>
    } else {
        if(answers.length < 6){
            body = <div className="form-group">
                {
                    answers.map(getResponseCheck)

                }
            </div>
        } else {
            const split = Math.ceil(answers.length / 2);
            const firstHalf = answers.slice(0, split + 1);
            const secondHalf = answers.slice(split, answers.length);
            body = <div className="row">
                <div className="col">
                    {
                        firstHalf.map(getResponseCheck)
                    }
                </div>
                <div className="col">
                    {
                        secondHalf.map(getResponseCheck)
                    }
                </div>
            </div>
        }
    }

    return (
        <div>
            <div className="form-group">
                { question.text }
            </div>
            { body }
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