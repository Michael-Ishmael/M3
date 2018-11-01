import {QuestionnaireActions} from "../actions";

const account = (state = {
    isFetching: false,
    didInvalidate: false,
    questionnaires: [],
    newCreatedQuestionnaire: null,
    loaded: false,
}, action) => {

    switch (action.type) {
        case QuestionnaireActions.REQUEST_QUESTIONNAIRES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                newCreatedQuestionnaire: null
            });
        case QuestionnaireActions.RECEIVE_QUESTIONNAIRES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                questionnaires: action.questionnaires,
                loaded: true,
                newCreatedQuestionnaire: null
            });
        case QuestionnaireActions.REQUEST_NEW_QUESTIONNAIRE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                newCreatedQuestionnaire: null
            });
        case QuestionnaireActions.RECEIVE_NEW_QUESTIONNAIRE:

            let questionnaires_1 = [...state.questionnaires, action.newQuestionnaire];

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                questionnaires: questionnaires_1,
                newCreatedQuestionnaire: action.newQuestionnaire
            });

        case QuestionnaireActions.REQUEST_RENAME_QUESTIONNAIRE:

            let questionnaires_2 = state.questionnaires.map(q => {
                if (q.questionnaireId === action.questionnaireId) {
                    q.description = action.newQuestionnaireName;
                }
                return q;
            });

            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                questionnaires: questionnaires_2,
                newCreatedQuestionnaire: null
            });
        case QuestionnaireActions.RECEIVE_RENAMED_QUESTIONNAIRE:

            let questionnaires_3 = state.questionnaires.map(q => {
                if (action.questionnaire && q.questionnaireId === action.questionnaire.questionnaireId) {
                    return action.questionnaire
                }
                return q;
            });

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                questionnaires: questionnaires_3,
                newCreatedQuestionnaire: null
            });

        case QuestionnaireActions.REQUEST_DELETE_QUESTIONNAIRE:

            let questionnaires_4 =
                state.questionnaires.filter(q => q.questionnaireId !== action.questionnaireId);

            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                questionnaires: questionnaires_4,
                newCreatedQuestionnaire: null
            });

        case QuestionnaireActions.RECEIVE_DELETED_QUESTIONNAIRE:

            //TODO: test for success and act appropriately if not
            return state;

        default:
            return state;
    }

};

export default account;