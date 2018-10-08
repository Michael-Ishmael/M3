import {connect} from 'react-redux'
import {PageOne} from '../components/pages/PageOne'
import {gatherRoutingFlags, validateRoutingItems} from '../services/routingServices'

import React from "react";
import {StandardPage} from "../components/pages/StandardPage";
import TableQuestionPage from "../components/pages/TableQuestionPage";

const PageTemplates = {
    PAGE_ONE: "PAGE_ONE",
    STANDARD_PAGE: "STANDARD_PAGE",
    TABLE_QUESTIONS: "TABLE_QUESTIONS",
};

const QuestionTypes = {
    SINGLE_ANSWER: "SINGLE_ANSWER",
    MULTIPLE_ANSWER: "MULTIPLE_ANSWER",
    TEXT_ANSWER: "TEXT_ANSWER"
};

const PageContainer = ({
                           template,
                           pageContent,
                           pagination
                       }) => {

    switch (template) {
        case PageTemplates.PAGE_ONE:
            return PageOne({pageContent, pagination});
        case PageTemplates.STANDARD_PAGE:
            return StandardPage({pageContent, pagination});
        case PageTemplates.TABLE_QUESTIONS:
        default:
            return TableQuestionPage({pageContent, pagination});

    }

};


const mapStateToProps = (state, ownProps) => {

    const q = ownProps.questionnaire;
    const routingFlags = gatherRoutingFlags(state.responses, q.questions, q.answers);
    const pages = validateRoutingItems(q.pages, q.routingRules, routingFlags);
    let pageIndex = "page" in ownProps.params && !isNaN(ownProps.params.page) ? Number(ownProps.params.page) : 1;
    const validatedPageIndex = Math.max(1, Math.min(pages.length, pageIndex));

    const page = pages[validatedPageIndex - 1];
    const sectionHeader = q.sections.find(s => s.sectionId === page.sectionId).sectionName;
    const sectionText = q.sections.find(s => s.sectionId === page.sectionId).sectionText;
    let questions = q.questions.filter(x => page.questionIds.indexOf(x.questionId) >= 0);


    questions = validateRoutingItems(questions, q.routingRules, routingFlags);
    let answers = q.answers.filter(a => questions.map(q => q.questionId).indexOf(a.questionId) >= 0);
    answers = validateRoutingItems(answers, q.routingRules, routingFlags);
    answers = setResponsesOnAnswers(answers, state.responses);

    const pageText = page.text ? page.text : null;

    let props = {
        template: page.template,
        pageContent: {sectionHeader, sectionText, questions, answers, pageText: pageText},
        pagination: {currentPage: pageIndex, pageCount: pages.length}
    };

    if (validatedPageIndex !== pageIndex) {
        ownProps.history.push('/' + validatedPageIndex);
    }
    return props;
};

const setResponsesOnAnswers = (answers, responses) => {

    const respondedAnswers = [];


    for (const answer of answers) {
        let respondedAnswer;
        if (answer.questionId in responses) {
            const response = responses[answer.questionId];
            switch (response.type) {
                case QuestionTypes.SINGLE_ANSWER:
                    respondedAnswer = {...answer, checked: answer.answerId === response.answerId};
                    break;
                case QuestionTypes.MULTIPLE_ANSWER:
                    respondedAnswer = {...answer, checked: response.answerIds.indexOf(answer.answerId) >= 0};
                    break;
                case QuestionTypes.TEXT_ANSWER:
                    if (answer.answerId === response.answerId) {
                        respondedAnswer = {...answer, responseText: response.responseText};
                    } else {
                        respondedAnswer = answer;
                    }
                    break;
                default:
                    respondedAnswer = answer;
                    break;
            }
        } else {
            respondedAnswer = answer;
        }
        respondedAnswers.push(respondedAnswer);
    }

    return respondedAnswers;
};

//const mapDispatchToProps = (dispatch, ownProps) => {};

export default connect(
    mapStateToProps,
    null
)(PageContainer)