import React, { Component } from 'react'
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component';
import ResponseTableRadio from "../responses/ResponseTableRadio";

class TabledRadios extends Component {

    constructor(props) {
        super(props);
        this.validationErrorSet = false;
    }

    componentDidUpdate() {
        if(this.props.showValidation && this.errorItem){
            scrollToComponent(this.errorItem, {offset: 0, align: 'middle', duration: 250});
        }

    }

    answerCell(question, answer) {

        const handleCheck = (checked) => {
            this.props.onAnswer(question, answer.answerId, checked)
        };

        return (<td key={answer.answerId}>
            <ResponseTableRadio answerId={answer.answerId} onChecked={handleCheck} checked={answer.checked}/></td>)
    };


    tableRow(lineQuestion, allAnswers) {

        const lineAnswers = allAnswers.filter(a => a.questionId === lineQuestion.questionId);
        let errorClass = "", errorRow = false;
        if (!this.validationErrorSet && this.props.showValidation && !lineAnswers.some(a => a.checked)) {
            errorClass = " row-error";
            errorRow = true;
            this.validationErrorSet = true;
        }

        return (<tr key={lineQuestion.questionId} ref={(tr) => {
            if (errorRow) this.errorItem = tr;
        }}>
            <th className={"row-head" + errorClass}>{lineQuestion.text}</th>
            {lineAnswers.map(a => this.answerCell(lineQuestion, a))}
        </tr>)

    };


    render() {

        const answerLabels = this.props.answers.filter(a => a.questionId === this.props.questions[0].questionId)
            .map(a => a.text);

        this.validationErrorSet = false;

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
                        this.props.questions.map(q => {
                            return this.tableRow(q, this.props.answers, this.props.onAnswer)
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

TabledRadios.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    })),
    answers: PropTypes.arrayOf(PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    onAnswer: PropTypes.func.isRequired,
    showValidation: PropTypes.bool,
};

export default TabledRadios