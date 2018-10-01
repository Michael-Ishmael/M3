import React from 'react'
import PropTypes from 'prop-types'
import BasePage from './BasePage'
import QuestionResponder from "../../containers/QuestionResponder";
import { splitParagraphs } from "../../services/util";

export const PageOne = ({pageContent, pagination}) => {

    const nextEnabled = pageContent.answers.some(a => a.checked) && pagination.currentPage < pagination.pageCount;

    return (
        <BasePage nextEnabled={nextEnabled} prevEnabled={false} currentPage={pagination.currentPage} sectionHeader={pageContent.sectionHeader}>

            <div>
                {
                    splitParagraphs(pageContent.sectionText).map((pText, i) => {
                        return (
                            <p key={i} className="section-text intro">
                                {pText}
                            </p>)
                    })
                }
            </div>
            <QuestionResponder answers={pageContent.answers} question={pageContent.questions[0]} classNames={"first"}/>
        </BasePage>
    );
};

export const StandardPage = ({pageContent, pagination}) => {

    const nextEnabled = pageContent.questions.every(q =>
        pageContent.answers.filter(a => a.questionId === q.questionId).some(a => a.checked)) && pagination.currentPage < pagination.pageCount;

    let pageTextEl = null;
    if(pageContent.pageText){
        pageTextEl  = (<div className="section-text intro">
            {pageContent.pageText}
        </div>)
    }

    return (
        <BasePage nextEnabled={nextEnabled} prevEnabled={true} currentPage={pagination.currentPage} sectionHeader={pageContent.sectionHeader}>
            {pageTextEl}
            <div>
            {
                pageContent.questions.map(question => {
                    const qAnswers = pageContent.answers.filter(a => a.questionId === question.questionId);
                     return (<QuestionResponder key={question.questionId} answers={qAnswers} question={question} />)
                })
            }
            </div>
        </BasePage>
    );
};


PageOne.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    question: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired
};

