import {QuestionnaireActions} from "../actions";

const questionnaires = (state = {isFetching: false, didInvalidate: false, questionnaires: []}, action) => {

    switch (action.type) {
        case QuestionnaireActions.REQUEST_QUESTIONNAIRES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case QuestionnaireActions.RECEIVE_QUESTIONNAIRES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.questionnaires
            });
        default:
            return state;
    }

};

export default questionnaires;