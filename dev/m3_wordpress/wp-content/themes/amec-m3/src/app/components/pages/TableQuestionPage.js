import React from 'react'
import PropTypes from 'prop-types'
import BasePage from "./BasePage";
import {splitParagraphs} from "../../services/util";
import TableQuestionResponder from "../../containers/TableQuestionResponder";

const TableQuestionPage = ({pageContent, pagination, progress}) => {

    const nextEnabled = pageContent.questions.every(q =>
        pageContent.answers.filter(a => a.questionId === q.questionId).some(a => a.checked)) && pagination.currentPage < pagination.pageCount;

    return (
        <BasePage nextEnabled={nextEnabled} prevEnabled={true} pagination={pagination} sectionHeader={pageContent.sectionHeader}
            progress={progress} >

            <h5 className="py-3 text-center">
                {
                    splitParagraphs(pageContent.sectionText).map((pText, i) => {
                        return (
                            <p key={i} className="section-text intro">
                                {pText}
                            </p>)
                    })
                }
            </h5>
            <TableQuestionResponder answers={pageContent.answers} questions={pageContent.questions} questionnaireId={pageContent.questionnaireId} classNames={"first"}/>
        </BasePage>
    );
};

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
            text: PropTypes.string.isRequired,
        })).isRequired,
        pageText: PropTypes.string.isRequired,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

export default TableQuestionPage