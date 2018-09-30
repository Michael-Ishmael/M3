import { connect } from 'react-redux'
import { goToNextPage, goToPrevPage } from '../actions'
import { PageOne, StandardPage } from '../components/pages/PageOne'
import { validateRoutingItems } from '../services/routingServices'
import React from "react";

const PageTemplates = {
  PAGE_ONE: "PAGE_ONE",
  STANDARD_PAGE: "STANDARD_PAGE"
};

const QuestionTypes = {
    SINGLE_ANSWER: "SINGLE_ANSWER",
    MULTIPLE_ANSWER: "MULTIPLE_ANSWER",
    TEXT_ANSWER: "TEXT_ANSWER"
};

const PageContainer = ({
                           sectionHeader,
                           sectionText,
                           template,
                           questions,
                           answers,
                           onNext,
                           onPrev,
                           pageCount,
}) => {

    switch (template) {
        case PageTemplates.PAGE_ONE:
            return (<PageOne onNext={onNext} answers={answers} sectionHeader={sectionHeader} text={sectionText} onPrev={onPrev} question={questions[0]} pageCount={pageCount} />);
        case PageTemplates.STANDARD_PAGE:
        default:
            return (<StandardPage onNext={onNext} answers={answers} sectionHeader={sectionHeader}  onPrev={onPrev} questions={questions} pageCount={pageCount}/>);

    }

};


const mapStateToProps = (state, ownProps) => {

    /*
    * pages
    *
    * */

    const q = ownProps.questionnaire;
    const pages = validateRoutingItems(q.pages, q.routingRules, state.routingFlags);
    const pageIndex = Math.max(0, Math.min(pages.length - 1, state.currentPageIndex));
    const page = pages[pageIndex];
    const sectionHeader = q.sections.find(s => s.sectionId === page.sectionId).sectionName;
    const sectionText = q.sections.find(s => s.sectionId === page.sectionId).sectionText;
    let questions = q.questions.filter(x => page.questionIds.indexOf(x.questionId) >= 0);
    questions = validateRoutingItems(questions, q.routingRules, state.routingFlags);
    let answers = q.answers.filter(a => questions.map(q => q.questionId).indexOf(a.questionId) >= 0);
    answers = validateRoutingItems(answers, q.routingRules, state.routingFlags);
    answers = setResponsesOnAnswers(answers, state.responses);

    return {
        sectionHeader,
        sectionText,
        template: page.template,
        questions,
        answers,
        responses: state.responses,
        pageCount: pages.length
    }
};

const setResponsesOnAnswers = (answers, responses) => {

    const respondedAnswers = [];


    for (const answer of answers) {
        let respondedAnswer;
        if(answer.questionId in responses){
            const response = responses[answer.questionId];
            switch (response.type) {
                case QuestionTypes.SINGLE_ANSWER:
                    respondedAnswer = {...answer, checked: answer.answerId === response.answerId};
                break;
                case QuestionTypes.MULTIPLE_ANSWER:
                        respondedAnswer = {...answer, checked: response.answerIds.indexOf(answer.answerId) >= 0};
                    break;
                case QuestionTypes.TEXT_ANSWER:
                    if(answer.answerId === response.answerId){
                        respondedAnswer = {...answer, responseText:  response.responseText};
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

const mapDispatchToProps = (dispatch, ownProps) => {

    //console.log(ownProps);

    return ({
        onNext: (pageCount) => dispatch(goToNextPage(pageCount)),
        onPrev: (pageCount) => dispatch(goToPrevPage(pageCount))
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer)