import BasePage from "./BasePage";
import QuestionResponder from "../../containers/QuestionResponder";
import React from "react";
import PropTypes from "prop-types";
import {PageOne} from "./PageOne";

export const StandardPage = ({pageContent, pagination}) => {

    const nextEnabled = pageContent.questions.every(q =>
        pageContent.answers.filter(a => a.questionId === q.questionId).some(a => a.checked || a.responseText)) && pagination.currentPage < pagination.pageCount;

/*    for (let i = 0; i < pageContent.questions.length; i++) {
        const question = pageContent.questions[i];

    }*/

    let pageTextEl = null;
    if (pageContent.pageText) {
        pageTextEl = (<div className="section-text intro">
            {pageContent.pageText}
        </div>)
    }

    return (
        <BasePage nextEnabled={nextEnabled} prevEnabled={true} currentPage={pagination.currentPage}
                  sectionHeader={pageContent.sectionHeader}>
            {pageTextEl}
            <div>
                {
                    pageContent.questions.map(question => {
                        const qAnswers = pageContent.answers.filter(a => a.questionId === question.questionId);
                        return (<QuestionResponder key={question.questionId} answers={qAnswers} question={question}/>)
                    })
                }
            </div>
        </BasePage>
    );
};


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
            answerId: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })).isRequired,
        pageText: PropTypes.string.isRequired,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

export default StandardPage;