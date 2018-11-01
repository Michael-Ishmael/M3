import {QuestionnaireContentActions} from "../actions";

const questionnaireContent = (state = {isFetching: false, didInvalidate: false, loaded: false}, action) => {

    switch (action.type) {
        case QuestionnaireContentActions.REQUEST_QUESTIONNAIRE_CONTENT:
            return {...state,
                isFetching: true,
                didInvalidate: false,
            };
        case QuestionnaireContentActions.RECEIVE_QUESTIONNAIRE_CONTENT:
            return {...state,
                isFetching: false,
                didInvalidate: false,
                loaded: true,
                ...action.questionnaireContent
            };
        default:
            return state;
    }

};

export default questionnaireContent;