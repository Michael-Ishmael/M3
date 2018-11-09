import {apiGetScoresForQuestionnaire} from "../services/m3Api";

export const ScoreActions = {
    REQUEST_SCORES: "REQUEST_SCORES",
    RECEIVE_SCORES: "RECEIVE_SCORES",
    CLEAR_SCORES: "CLEAR_SCORES",
};


export const requestScores = (questionnaireId) => ({
    type: ScoreActions.REQUEST_SCORES,
    questionnaireId
});

export const receiveScores = (questionnaireId, scoreResults) => ({
    type: ScoreActions.RECEIVE_SCORES,
    questionnaireId,
    scoreResults: scoreResults
});

export const clearScores = () => ({
    type: ScoreActions.CLEAR_SCORES
});

export function fetchScores(questionnaireId, benchmarkFilterId) {

    return function (dispatch) {

        dispatch(requestScores(questionnaireId, benchmarkFilterId));

        return apiGetScoresForQuestionnaire(questionnaireId, benchmarkFilterId)
            .then(json => {
                    return dispatch(receiveScores(questionnaireId, json));
                }
            )

    }

}

