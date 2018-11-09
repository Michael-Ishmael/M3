import {connect} from 'react-redux'
import {PageOne} from '../components/pages/PageOne'
import {gatherRoutingFlags, validateRoutingItems} from '../services/routingServices'

import React from "react";
import {StandardPage} from "../components/pages/StandardPage";
import TableQuestionPage from "../components/pages/TableQuestionPage";
import ScorePage from "../components/pages/ScorePage";
import {RecommendationPage} from "../components/pages/RecommendationPage";

const PageTemplates = {
    PAGE_ONE: "PAGE_ONE",
    STANDARD_PAGE: "STANDARD_PAGE",
    TABLE_QUESTIONS: "TABLE_QUESTIONS",
    SCORES: "SCORES",
    RECOMMENDATIONS: "RECOMMENDATIONS",
};

const QuestionTypes = {
    SINGLE_ANSWER: "SINGLE_ANSWER",
    MULTIPLE_ANSWER: "MULTIPLE_ANSWER",
    TEXT_ANSWER: "TEXT_ANSWER"
};

const PageContainer = ({

                           template,
                           pageContent,
                           pagination,
                           progress
                       }) => {

    switch (template) {
        case PageTemplates.PAGE_ONE:
            return PageOne({pageContent, pagination, progress});
        case PageTemplates.STANDARD_PAGE:
            return StandardPage({pageContent, pagination, progress});
        case PageTemplates.SCORES:
            return ScorePage({pageContent, pagination});
        case PageTemplates.RECOMMENDATIONS:
            return RecommendationPage({ pageContent, pagination });
        case PageTemplates.TABLE_QUESTIONS:
        default:
            return TableQuestionPage({pageContent, pagination, progress});

    }

};


const mapStateToProps = (state, ownProps) => {

    const q = ownProps.questionnaire;
    const routingFlags = gatherRoutingFlags(state.responses, q.questions, q.answers);
    let progress = Object.keys(state.responses).length / q.questions.length;
    progress = Math.round(progress * 100);

    const pages = validateRoutingItems(q.pages, q.routingRules, routingFlags);
    let pageIndex = 1;
    if("page" in ownProps.params){
        let pageVal = ownProps.params.page;
        if(pageVal){
            if(isNaN(pageVal)){
                if(pageVal.trim().toLowerCase() === "scores"){
                    pageIndex = pages.findIndex(p => p.template === PageTemplates.SCORES) + 1;
                }
                if(pageVal.trim().toLowerCase() === "recommendations"){
                    pageIndex = pages.findIndex(p => p.template === PageTemplates.RECOMMENDATIONS) + 1;
                }
            } else {
                pageIndex = Number(pageVal);
            }
        }
    }

    const validatedPageIndex = Math.max(1, Math.min(pages.length, pageIndex));

    let questionnaireId = state.questionnaireId;

    const page = pages[validatedPageIndex - 1];
    const sectionHeader = q.sections.find(s => s.sectionId === page.sectionId).sectionName;
    const sectionText = q.sections.find(s => s.sectionId === page.sectionId).sectionText;
    let questions, answers;
    if(page.questionIds){
        questions = q.questions.filter(x => page.questionIds.indexOf(x.questionId) >= 0);

        questions = validateRoutingItems(questions, q.routingRules, routingFlags);
        answers = q.answers.filter(a => questions.map(q => q.questionId).indexOf(a.questionId) >= 0);
        answers = validateRoutingItems(answers, q.routingRules, routingFlags);
        answers = setResponsesOnAnswers(answers, state.responses);
    }

    const pageText = page.text ? page.text : null;

    let pageContent;
    switch (page.template) {
        case PageTemplates.SCORES:
            pageContent = {questionnaireId, sectionHeader, sectionText, scores: state.scores, pageText: pageText};
            break;
        case PageTemplates.RECOMMENDATIONS:
            pageContent = {questionnaireId, sectionHeader, sectionText, recommendations: state.recommendations, pageText: pageText};
            break;
        default:
            pageContent = {questionnaireId, sectionHeader, sectionText, questions, answers, pageText: pageText};
    }

    let props = {
        template: page.template,
        pageContent,
        pagination: {currentPage: pageIndex, pageCount: pages.length},
        progress
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
            if (response.responseText) {
                if (response.answerIds && response.answerIds.length && answer.answerId === response.answerIds[0]) {
                    respondedAnswer = {...answer, responseText: response.responseText};
                } else {
                    respondedAnswer = answer;
                }
            } else if(response.answerIds && response.answerIds.length) {
                respondedAnswer = {...answer, checked: response.answerIds.indexOf(answer.answerId) >= 0};
            } else {
                respondedAnswer = answer;
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