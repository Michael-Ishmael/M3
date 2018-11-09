import {  apiLoadQuestionnaireContent} from "../services/m3Api"

export const QuestionnaireContentActions = {
    REQUEST_QUESTIONNAIRE_CONTENT: "REQUEST_QUESTIONNAIRE_CONTENT",
    RECEIVE_QUESTIONNAIRE_CONTENT: "RECEIVE_QUESTIONNAIRE_CONTENT"
};

export const requestQuestionnaireContent = () => ({
    type: QuestionnaireContentActions.REQUEST_QUESTIONNAIRE_CONTENT
});

export const receiveQuestionnaireContent = (questionnaireContent) => ({
    type: QuestionnaireContentActions.RECEIVE_QUESTIONNAIRE_CONTENT,
    questionnaireContent
});

export function fetchQuestionnaireContent() {

    return function (dispatch) {

        dispatch(requestQuestionnaireContent());

        return apiLoadQuestionnaireContent()
            .then(json =>

                dispatch(receiveQuestionnaireContent(json))
            )
    }

}

