import React from 'react'
import PropTypes from 'prop-types'
import ResponseTableRadio from "../responses/ResponseTableRadio";

const TabledRadios = ({questions, answers, onAnswer}) => {

    const answerCell = (question, answer) => {

        const handleCheck = (checked) => {
            onAnswer(question, answer.answerId, checked)
        };

        return (<td key={answer.answerId} >
            <ResponseTableRadio answerId={answer.answerId} onChecked={handleCheck} checked={answer.checked}/></td>)
    };

    const tableRow = (lineQuestion, allAnswers) => {

        const lineAnswers = allAnswers.filter(a => a.questionId === lineQuestion.questionId);

        return (<tr key={lineQuestion.questionId}>
            <th className="row-head">{lineQuestion.text}</th>
            {lineAnswers.map(a => answerCell(lineQuestion, a))}
        </tr>)

    };


    const answerLabels = answers.filter(a => a.questionId === questions[0].questionId)
        .map(a => a.text);

    return (

        <div className="tabled-question-section">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    {answerLabels.map((al, i) => (<th key={i} className="col-head">{al}</th>))}
                </tr>
                </thead>
                <tbody>
                {
                    questions.map(q => {
                      return tableRow(q, answers, onAnswer)
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

TabledRadios.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    })),
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default TabledRadios