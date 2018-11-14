import fetch from 'cross-fetch'
import {fetchScores, requestScores} from "./scores";
import {fetchRecommendations} from "./recommendations";

export const ResponseActions = {
    SINGLE_ANSWER_RESPONSE: "SINGLE_ANSWER_RESPONSE",
    MULTIPLE_ANSWER_RESPONSE: "MULTIPLE_ANSWER_RESPONSE",
    TEXT_ANSWER_RESPONSE: "TEXT_ANSWER_RESPONSE",
    REQUEST_RESPONSES: "REQUEST_RESPONSES",
    RECEIVE_RESPONSES: "RECEIVE_RESPONSES",
    REQUEST_SAVE_RESPONSE: "REQUEST_SAVE_RESPONSE",
    RECEIVE_RESPONSE_SAVED: "RECEIVE_RESPONSE_SAVED",
    CLEAR_RESPONSES: "CLEAR_RESPONSES",
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

export const requestResponses = (questionnaireId) => ({
    type: ResponseActions.REQUEST_RESPONSES,
    questionnaireId
});

export const receiveResponses = (questionnaireId, json) => ({
    type: ResponseActions.RECEIVE_RESPONSES,
    questionnaireId,
    responses: json
});

export const requestSaveResponse = (response) => ({
    type: ResponseActions.REQUEST_SAVE_RESPONSE,
    response
});

export const receiveResponseSaved = (response, success) => ({
    type: ResponseActions.RECEIVE_RESPONSE_SAVED,
    response,
    success
});

export const clearResponses = () => ({
    type: ResponseActions.CLEAR_RESPONSES
});

export function fetchResponses(questionnaireId) {


    return function (dispatch) {

        dispatch(requestResponses(questionnaireId));


        return fetch(`/wp-json/m3/v1/questionnaires/${questionnaireId}/responses`)
            .then(
                response => response.json(),
                error => console.log('An error occurred: ', error)
            )
            .then(json =>

                dispatch(receiveResponses(questionnaireId, json))
            )

    }

}


export function saveResponse(response) {

    return function (dispatch) {

        if(response.questionTypeId === 2) dispatch(multipleQuestionAnswered(response.questionId, response.answerId, response.checked))
        if(response.questionTypeId === 3) dispatch(textQuestionAnswered(response.questionId, response.answerId, response.answerText));
        if(response.questionTypeId === 1) dispatch(singleQuestionAnswered(response.questionId, response.answerId));

        dispatch(requestSaveResponse(response));

        const method = response.checked || response.answerText ? "put" : "delete";

        return fetch(`/wp-json/m3/v1/questionnaires/${response.questionnaireId}/questions/${response.questionId}/responses/${response.answerId}`, {
            method: method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: response.answerText ? JSON.stringify({answerText: response.answerText}) : null,

        })
            .then(
                response => response.ok,
                error => console.log('An error occurred: ', error)
            )
            .then(success => {
                    dispatch(fetchResponses(response.questionnaireId));
                return dispatch(receiveResponseSaved(response, success));
                }

            )
            .then(() =>
                dispatch(fetchScores(response.questionnaireId))
            )
            .then(() =>
                dispatch(fetchRecommendations(response.questionnaireId))
            )
    }

}





