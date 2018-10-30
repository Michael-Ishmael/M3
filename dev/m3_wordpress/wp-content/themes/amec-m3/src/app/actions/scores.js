import fetch from "cross-fetch";

export const ScoreActions = {
    REQUEST_SCORES: "REQUEST_SCORES",
    RECEIVE_SCORES: "RECEIVE_SCORES"
};


export const requestScores = (questionnaireId) => ({
    type: ScoreActions.REQUEST_SCORES,
    questionnaireId
});

export const receiveScores = (questionnaireId, json) => ({
    type: ScoreActions.RECEIVE_SCORES,
    questionnaireId,
    scores: json
});

export function fetchScores(questionnaireId) {


    return function (dispatch) {

        dispatch(requestScores(questionnaireId));

        return fetch(`/wp-json/m3/v1/questionnaires/${questionnaireId}/scores`)
            .then(
                response => response.json(),
                error => console.log('An error occurred: ', error)
            )
            .then(json =>

                dispatch(receiveScores(questionnaireId, json))
            )

    }

}

