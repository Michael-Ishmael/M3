import BasePage from "./BasePage";
import QuestionResponder from "../../containers/QuestionResponder";
import React, {Component} from "react";
import PropTypes from "prop-types";

class StandardPage extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
        this.validationErrorSet = false;
    }

    initialiseState() {
        this.state = {
            showValidation: false,
        }
    }

    handleShowValidation(show) {
        this.setState({showValidation: show})
    }

    componentDidUpdate() {
        if (this.state.showValidation) {
            if (this.allQuestionsAnswered()) {
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
        this.validationErrorSet = false;

        let pageTextEl = null;
        if (this.props.pageContent.pageText) {
            pageTextEl = (<div className="section-text intro">
                {this.props.pageContent.pageText}
            </div>)
        }

        return (
            <BasePage showValidation={(show) => this.handleShowValidation(show)} nextEnabled={nextEnabled}
                      prevEnabled={true} pagination={this.props.pagination}
                      sectionHeader={this.props.pageContent.sectionHeader} progress={this.props.progress}>
                {pageTextEl}
                <div>
                    {
                        this.props.pageContent.questions.map(question => {

                            const qAnswers = this.props.pageContent.answers.filter(a => a.questionId === question.questionId);

                            let errorRow = false;
                            if (!this.validationErrorSet && this.state.showValidation &&
                                !qAnswers.some(a => a.checked || (question.questionTypeId === 3 && a.responseText))) {
                                errorRow = true;
                                this.validationErrorSet = true;
                            }


                            return (<QuestionResponder key={question.questionId} answers={qAnswers} question={question}
                                                       questionnaireId={this.props.pageContent.questionnaireId}
                                                       showValidation={this.state.showValidation} isError={errorRow}
                            />)
                        })
                    }
                </div>
            </BasePage>
        );
    }
}


StandardPage.propTypes = {
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
            responseText: PropTypes.string,
            checked: PropTypes.bool,
        })).isRequired,
        pageText: PropTypes.string,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

export default StandardPage;