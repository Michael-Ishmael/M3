import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BasePage from "./BasePage";
import TableQuestionResponder from "../../containers/TableQuestionResponder";
import {splitParagraphs} from "../../services/util";

class TableQuestionPage extends Component {

    constructor(props) {
        super(props)
        this.initialiseState();
    }

    initialiseState() {
        this.state = {
            showValidation: false
        }
    }

    handleShowValidation(show) {
        this.setState({showValidation: show})
    }

    componentDidUpdate(){
        if(this.state.showValidation){
            if(this.allQuestionsAnswered()){
                this.handleShowValidation(false);
            }
        }
    }

    allQuestionsAnswered() {
        return this.props.pageContent.questions.every(q =>
            this.props.pageContent.answers.filter(a => a.questionId === q.questionId).some(a => a.checked)) && this.props.pagination.currentPage < this.props.pagination.pageCount;
    }


    render() {

        const nextEnabled = this.allQuestionsAnswered();
        return (<BasePage showValidation={(show) => this.handleShowValidation(show)} nextEnabled={nextEnabled} prevEnabled={true} pagination={this.props.pagination} sectionHeader={this.props.pageContent.sectionHeader}
                          progress={this.props.progress}  >

                    <h5 className="py-3 text-center">
                        {
                            splitParagraphs(this.props.pageContent.sectionText).map((pText, i) => {
                                return (
                                    <p key={i} className="section-text intro">
                                        {pText}
                                    </p>)
                            })
                        }
                    </h5>
                    <TableQuestionResponder answers={this.props.pageContent.answers} questions={this.props.pageContent.questions} questionnaireId={this.props.pageContent.questionnaireId} showValidation={this.state.showValidation}/>
                </BasePage>)};
}

TableQuestionPage.propTypes = {
    pageContent: PropTypes.shape({
        sectionHeader: PropTypes.string.isRequired,
        sectionText: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
            questionId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            questionTypeId: PropTypes.number.isRequired,
        })),
        answers: PropTypes.arrayOf(PropTypes.shape({
            answerId: PropTypes.number.isRequired,
            questionId: PropTypes.string.isRequired,
            checked: PropTypes.bool,
            text: PropTypes.string.isRequired,
        })).isRequired,
        pageText: PropTypes.string,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

export default TableQuestionPage