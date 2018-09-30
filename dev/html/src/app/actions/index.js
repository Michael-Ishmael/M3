
export const PageActions = {
    NEXT: 'NEXT',
    PREV: 'PREV',
    GOTO: 'GOTO'
};

export const goToNextPage = (pageCount) => ({
    type: PageActions.NEXT,
    pageCount
});

export const goToPrevPage = (pageCount) => ({
    type: PageActions.PREV,
    pageCount
});

export const goToPage = (pageIndex, pageCount) => ({
    type: PageActions.GOTO,
    pageIndex,
    pageCount
});

export const RoutingActions = {
    SET_ROUTING_FLAG: "SET_ROUTING_FLAG",
    REMOVE_ROUTING_FLAG: "REMOVE_ROUTING_FLAG"
};

export const setRoutingFlag = (key, value) => ({
    type: RoutingActions.SET_ROUTING_FLAG,
    key,
    value
});
export const removeRoutingFlag = (key) => ({
    type: RoutingActions.REMOVE_ROUTING_FLAG,
    key
});

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
