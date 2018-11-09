import {apiGetRecommendationsForQuestionnaire} from "../services/m3Api";

export const RecommendationActions = {
    REQUEST_RECOMMENDATIONS: "REQUEST_RECOMMENDATIONS",
    RECEIVE_RECOMMENDATIONS: "RECEIVE_RECOMMENDATIONS",
    CLEAR_RECOMMENDATIONS: "CLEAR_RECOMMENDATIONS",
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

export const clearRecommendations = () => ({
    type: RecommendationActions.CLEAR_RECOMMENDATIONS
});


export function fetchRecommendations(questionnaireId) {


    return function (dispatch) {

        dispatch(requestRecommendations(questionnaireId));


        return apiGetRecommendationsForQuestionnaire(questionnaireId)
            .then(json =>

                dispatch(receiveRecommendations(questionnaireId, json))
            )

    }

}

