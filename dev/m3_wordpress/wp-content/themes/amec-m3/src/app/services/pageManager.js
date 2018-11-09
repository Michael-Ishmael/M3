import {gatherRoutingFlags, validateRoutingItems} from "./routingServices";
import {PageOne} from "../components/pages/PageOne";
import {StandardPage} from "../components/pages/StandardPage";
import TableQuestionPage from "../components/pages/TableQuestionPage";

const PageTemplates = {
    PAGE_ONE: "PAGE_ONE",
    STANDARD_PAGE: "STANDARD_PAGE",
    TABLE_QUESTIONS: "TABLE_QUESTIONS",
    SCORES: "SCORES",
    RECOMMENDATIONS: "RECOMMENDATIONS",
};

export function questionnaireComplete(state) {
    //TODO: Refactor out repetition

    if(!(state || state.questionnaireContent || state.responses)) return false;

    const q = state.questionnaireContent;
    const routingFlags = gatherRoutingFlags(state.responses, q.questions, q.answers);
    const pages = validateRoutingItems(q.pages, q.routingRules, routingFlags);

    return allPagesComplete(pages, q, state.responses, routingFlags);

}

export function resolvePage(questionnaireContent, responses, questionnaireId, pageIndex) {

    const q = questionnaireContent;
    const routingFlags = gatherRoutingFlags(responses, q.questions, q.answers);
    const pages = validateRoutingItems(q.pages, q.routingRules, routingFlags);

    let lastCompletedPageIndex = getLastCompletedPageIndex(pages, q, responses, routingFlags);
    let validatedPageIndex;
    if(pageIndex === -1){
        validatedPageIndex = lastCompletedPageIndex + 1;
        if(validatedPageIndex >= pages.length){
            validatedPageIndex = 1;
        }
    } else {
        validatedPageIndex=  Math.max(1, Math.min(pages.length, pageIndex));
        validatedPageIndex = Math.min(validatedPageIndex, lastCompletedPageIndex + 1);
    }

    if (validatedPageIndex !== pageIndex) {

        return {
            pageFound: false,
            redirectRequired: true,
            redirectIndex: validatedPageIndex,
            pageComponent: null
        }
    }

    let progress = Object.keys(responses).length / q.questions.length;
    progress = Math.min(Math.round(progress * 100), 100);

    const page = pages[validatedPageIndex - 1];
    const sectionHeader = q.sections.find(s => s.sectionId === page.sectionId).sectionName;
    const sectionText = q.sections.find(s => s.sectionId === page.sectionId).sectionText;
    let questions, answers;
    if (page.questionIds) {

        questions = q.questions.filter(x => page.questionIds.indexOf(x.questionId) >= 0);
        questions = validateRoutingItems(questions, q.routingRules, routingFlags);
        answers = q.answers.filter(a => questions.map(q => q.questionId).indexOf(a.questionId) >= 0);
        answers = validateRoutingItems(answers, q.routingRules, routingFlags);
        answers = setResponsesOnAnswers(answers, responses);

    }

    const pageText = page.text ? page.text : null;

    let pageContent = {questionnaireId, sectionHeader, sectionText, questions, answers, pageText: pageText};
    let pagination = buildPagination(questionnaireId, pageIndex, pages.length);

    let pageComponent;

    switch (page.template) {
        case PageTemplates.PAGE_ONE:
            pageComponent = PageOne({pageContent, pagination, progress});
            break;
        case PageTemplates.STANDARD_PAGE:
            pageComponent = StandardPage({pageContent, pagination, progress});
            break;
        case PageTemplates.TABLE_QUESTIONS:
        default:
            pageComponent = TableQuestionPage({pageContent, pagination, progress});
            break;
    }

    return {
        pageFound: true,
        redirectRequired: false,
        redirectIndex: -1,
        pageComponent
    }

}

function getLastCompletedPageIndex(pages, q, responses, routingFlags){

    const allQuestionIds = Object.keys(responses);
    let maxIndex = 0;
    const sortedPages = pages.sort((a, b) => { return a.index - b.index } );
    for (let i = 0; i < sortedPages.length; i++) {
        const page = sortedPages[i];
        const pageQuestions = q.questions.filter(p => page.questionIds.indexOf(p.questionId) >= 0);
        const filteredQuestionIds = validateRoutingItems(pageQuestions, q.routingRules, routingFlags).map(vq => vq.questionId);
        const allQuestionsAnswered = filteredQuestionIds.every(q => allQuestionIds.indexOf(q) > -1);
        if(!allQuestionsAnswered)
            break;
        if(allQuestionsAnswered && page.index > maxIndex)
            maxIndex = page.index
    }
    return maxIndex;
}

function allPagesComplete(pages, q, responses, routingFlags){
    //TODO: Refactor out repetition
    const allQuestionIds = Object.keys(responses);
    const sortedPages = pages.sort((a, b) => { return a.index - b.index } );
    for (let i = 0; i < sortedPages.length; i++) {
        const page = sortedPages[i];
        const pageQuestions = q.questions.filter(p => page.questionIds.indexOf(p.questionId) >= 0);
        const filteredQuestionIds = validateRoutingItems(pageQuestions, q.routingRules, routingFlags).map(vq => vq.questionId);
        const allQuestionsAnswered = filteredQuestionIds.every(q => allQuestionIds.indexOf(q) > -1);
        if(!allQuestionsAnswered)
            return false;
    }
    return true;
}

function buildPagination(questionnaireId, currentPage, pageCount) {

    let nextPage, nextLabel;
    if (currentPage === pageCount) {
        nextPage = 'scores';
        nextLabel = "Scores";
    } else {
        nextPage = `pages/${currentPage + 1}`
        nextLabel = "Next"
    }
    const nextUrl = `/m3/questionnaires/${questionnaireId}/${nextPage}`;
    const prevUrl = `/m3/questionnaires/${questionnaireId}/pages/${currentPage - 1}`;
    const scoresUrl = `/m3/questionnaires/${questionnaireId}/scores`;

    return {
        currentPage: currentPage,
        pageCount: pageCount,
        nextLink: {
            url: nextUrl,
            label: nextLabel
        },
        prevLink: currentPage === 0 ? null : {
            url: prevUrl,
            label: "Previous"
        },
        scoresUrl
    };

}


function setResponsesOnAnswers(answers, responses) {

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
            } else if (response.answerIds && response.answerIds.length) {
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
}