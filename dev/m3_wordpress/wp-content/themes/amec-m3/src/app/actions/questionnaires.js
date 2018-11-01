import {
    apiCreateQuestionnaireForUser,
    apiDeleteQuestionnaire,
    apiGetQuestionnairesForUser,
    apiRenameQuestionnaire
} from "../services/m3Api"

export const QuestionnaireActions = {
    REQUEST_QUESTIONNAIRES: "REQUEST_QUESTIONNAIRES",
    RECEIVE_QUESTIONNAIRES: "RECEIVE_QUESTIONNAIRES",
    REQUEST_NEW_QUESTIONNAIRE: "REQUEST_NEW_QUESTIONNAIRE",
    RECEIVE_NEW_QUESTIONNAIRE: "RECEIVE_NEW_QUESTIONNAIRE",
    REQUEST_RENAME_QUESTIONNAIRE: "REQUEST_RENAME_QUESTIONNAIRE",
    RECEIVE_RENAMED_QUESTIONNAIRE: "RECEIVE_RENAMED_QUESTIONNAIRE",
    REQUEST_DELETE_QUESTIONNAIRE: "REQUEST_DELETE_QUESTIONNAIRE",
    RECEIVE_DELETED_QUESTIONNAIRE: "RECEIVE_DELETED_QUESTIONNAIRE"
};

export const requestQuestionnaires = () => ({
    type: QuestionnaireActions.REQUEST_QUESTIONNAIRES
});

export const receiveQuestionnaires = (questionnaires) => ({
    type: QuestionnaireActions.RECEIVE_QUESTIONNAIRES,
    questionnaires
});

export const requestNewQuestionnaire = (newQuestionnaireName) => ({
    type: QuestionnaireActions.REQUEST_NEW_QUESTIONNAIRE,
    newQuestionnaireName
});

export const receiveNewQuestionnaire = (newQuestionnaire) => ({
    type: QuestionnaireActions.RECEIVE_NEW_QUESTIONNAIRE,
    newQuestionnaire
});

export const requestRenameQuestionnaire = (questionnaireId, newQuestionnaireName) => ({
    type: QuestionnaireActions.REQUEST_RENAME_QUESTIONNAIRE,
    questionnaireId,
    newQuestionnaireName
});

export const receiveRenamedQuestionnaire = (renamedQuestionnaire) => ({
    type: QuestionnaireActions.RECEIVE_RENAMED_QUESTIONNAIRE,
    renamedQuestionnaire
});


export const requestDeleteQuestionnaire = (questionnaireId) => ({
    type: QuestionnaireActions.REQUEST_DELETE_QUESTIONNAIRE,
    questionnaireId
});

export const receiveDeletedQuestionnaire = (questionnaireId) => ({
    type: QuestionnaireActions.RECEIVE_DELETED_QUESTIONNAIRE,
    questionnaireId
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

export function fetchNewQuestionnaire(newQuestionnaireName) {

    return function (dispatch) {

        dispatch(requestNewQuestionnaire(newQuestionnaireName));

        return apiCreateQuestionnaireForUser(newQuestionnaireName)
            .then(json =>

                dispatch(receiveNewQuestionnaire(json))
            )

    }
}

export function fetchRenameQuestionnaire(questionnaireId, newQuestionnaireName) {

    return function (dispatch) {

        dispatch(requestRenameQuestionnaire(questionnaireId, newQuestionnaireName));

        return apiRenameQuestionnaire(questionnaireId, newQuestionnaireName)
            .then(json =>

                dispatch(receiveRenamedQuestionnaire(json))
            )
    }
}

export function fetchDeleteQuestionnaire(questionnaireId) {

    return function (dispatch) {

        dispatch(requestDeleteQuestionnaire(questionnaireId));

        return apiDeleteQuestionnaire(questionnaireId)
            .then(json =>

                dispatch(receiveDeletedQuestionnaire(questionnaireId))
            )
    }
}


