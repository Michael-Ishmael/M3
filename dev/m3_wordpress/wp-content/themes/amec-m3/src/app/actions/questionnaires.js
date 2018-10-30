import { apiGetQuestionnairesForUser } from "../services/m3Api"

export const QuestionnaireActions = {
    REQUEST_QUESTIONNAIRES: "REQUEST_RECOMMENDATIONS",
    RECEIVE_QUESTIONNAIRES: "RECEIVE_RECOMMENDATIONS"
};

export const requestQuestionnaires = () => ({
    type: QuestionnaireActions.REQUEST_QUESTIONNAIRES
});

export const receiveQuestionnaires = (questionnaires) => ({
    type: QuestionnaireActions.RECEIVE_QUESTIONNAIRES,
    questionnaires
});

export function fetchQuestionnaires() {

    return function (dispatch) {

        dispatch(requestQuestionnaires());

        return apiGetQuestionnairesForUser()
            .then(json =>

                dispatch(receiveQuestionnaires(json))
            )

    }

}

