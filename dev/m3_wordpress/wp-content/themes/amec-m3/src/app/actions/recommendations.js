import fetch from "cross-fetch";

export const RecommendationActions = {
    REQUEST_RECOMMENDATIONS: "REQUEST_RECOMMENDATIONS",
    RECEIVE_RECOMMENDATIONS: "RECEIVE_RECOMMENDATIONS"
};


export const requestRecommendations = (questionnaireId) => ({
    type: RecommendationActions.REQUEST_RECOMMENDATIONS,
    questionnaireId
});

export const receiveRecommendations = (questionnaireId, json) => ({
    type: RecommendationActions.RECEIVE_RECOMMENDATIONS,
    questionnaireId,
    strengths: json && json.strengths ? json.strengths : [],
    actions: json && json.actions ? json.actions: []
});

export function fetchRecommendations(questionnaireId) {


    return function (dispatch) {

        dispatch(requestRecommendations(questionnaireId));


        return fetch(`/wp-json/m3/v1/questionnaires/${questionnaireId}/recommendations`)
            .then(
                response => response.json(),
                error => console.log('An error occurred: ', error)
            )
            .then(json =>

                dispatch(receiveRecommendations(questionnaireId, json))
            )

    }

}

