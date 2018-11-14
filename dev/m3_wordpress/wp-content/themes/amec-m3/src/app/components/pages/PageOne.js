import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BasePage from './BasePage'
import QuestionResponder from "../../containers/QuestionResponder";
import {splitParagraphs} from "../../services/util";

class PageOne extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {
        this.state = {
            showValidation: false,
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

        let  errorRow = false;
        if (this.state.showValidation && !this.props.pageContent.answers.some(a => a.checked )) {
            errorRow = true;
        }

        return (
            <BasePage showValidation={(show) => this.handleShowValidation(show)}  nextEnabled={nextEnabled} prevEnabled={false} pagination={this.props.pagination}
                      sectionHeader={this.props.pageContent.sectionHeader} progress={this.props.progress}>
                <div>
                    {
                        splitParagraphs(this.props.pageContent.sectionText).map((pText, i) => {
                            return (
                                <p key={i} className="section-text intro">
                                    {pText}
                                </p>)
                        })
                    }
                </div>
                <QuestionResponder answers={this.props.pageContent.answers} question={this.props.pageContent.questions[0]}
                                   questionnaireId={this.props.pageContent.questionnaireId} classNames={"first"} showValidation={this.state.showValidation} isError={errorRow}/>
            </BasePage>
        );
    }
}


PageOne.propTypes = {
    pageContent: PropTypes.shape({
        sectionHeader: PropTypes.string.isRequired,
        sectionText: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
            questionId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            questionTypeId: PropTypes.number.isRequired,
        })),
        answers: PropTypes.arrayOf(PropTypes.shape({
            questionId: PropTypes.string.isRequired,
            answerId: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            checked: PropTypes.bool,
        })).isRequired,
        pageText: PropTypes.string,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

export default PageOne