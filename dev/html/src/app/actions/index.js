export const ResponseActions = {
    SINGLE_ANSWER_RESPONSE: "SINGLE_ANSWER_RESPONSE",
    MULTIPLE_ANSWER_RESPONSE: "MULTIPLE_ANSWER_RESPONSE",
    TEXT_ANSWER_RESPONSE: "TEXT_ANSWER_RESPONSE",
};

export const singleQuestionAnswered = (questionId, answerId) => ({
    type: ResponseActions.SINGLE_ANSWER_RESPONSE,
    questionId,
    answerId
});

export const textQuestionAnswered = (questionId, answerId, answerText) => ({
    type: ResponseActions.TEXT_ANSWER_RESPONSE,
    questionId,
    answerId,
    answerText
});

export const multipleQuestionAnswered = (questionId, answerId, added) => ({
    type: ResponseActions.MULTIPLE_ANSWER_RESPONSE,
    questionId,
    answerId,
    added
});
