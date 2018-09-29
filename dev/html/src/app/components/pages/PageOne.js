import React from 'react'
import PropTypes from 'prop-types'
import BasePage from './BasePage'
import QuestionResponder from "../../containers/QuestionResponder";

const splitParagraphs = (text) => {
    if(!text) return [''];
    const lines = text.split('\n');
    return lines.filter(l => l && l.trim().length > 0 );
};

export const PageOne = ({onNext, onPrev,sectionHeader, text, question, answers, pageCount}) => {

    const nextEnabled = answers.some(a => a.checked);

    return (
        <BasePage onNext={onNext} onPrev={onPrev} nextEnabled={nextEnabled} prevEnabled={false} pageCount={pageCount}>
            <h2>{sectionHeader}</h2>
            <div>
                {
                    splitParagraphs(text).map((pText, i) => {
                        return (
                            <p key={i} className="section-text intro">
                                {pText}
                            </p>)
                    })
                }
            </div>
            <QuestionResponder answers={answers} question={question}/>
        </BasePage>
    );
};

export const StandardPage = ({onNext, onPrev, sectionHeader, questions, answers, pageCount}) => {

    const nextEnabled = questions.every(q =>
        answers.filter(a => a.questionId === q.questionId).some(a => a.checked));

    return (
        <BasePage onNext={onNext} onPrev={onPrev} nextEnabled={nextEnabled} prevEnabled={true} pageCount={pageCount}>
            <h2>{sectionHeader}</h2>
            <div className="p-4">
            {
                questions.map(question => {
                    const qAnswers = answers.filter(a => a.questionId === question.questionId);
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

