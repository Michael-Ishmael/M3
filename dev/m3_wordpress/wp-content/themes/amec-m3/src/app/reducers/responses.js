import {ResponseActions} from "../actions";


const responses = (state = {isFetching: false, isSaving: false, didInvalidate: false, loaded: false}, action) => {
    let response;
    switch (action.type) {
        case ResponseActions.CLEAR_RESPONSES:
            return {
                isFetching: false,
                isSaving: false,
                didInvalidate: false,
                loaded: false
            };
        case ResponseActions.MULTIPLE_ANSWER_RESPONSE:
            if (action.questionId in state) {
                response = {...state[action.questionId]};
                if (action.added) {
                    if (!response.answerIds.indexOf(action.answerId) > -1) {
                        response.answerIds = [...response.answerIds, action.answerId];
                    }
                } else {
                    const foundIndex = response.answerIds.indexOf(action.answerId);
                    response.answerIds = response.answerIds.filter((answer, index) => index !== foundIndex);

                }
            } else {
                if (action.added) {
                    response = {
                        // type: "MULTIPLE_ANSWER",
                        typeId: 2, answerIds: [action.answerId]
                    }
                }
            }
            break;
        case ResponseActions.SINGLE_ANSWER_RESPONSE:
            response = {
                //type: "SINGLE_ANSWER",
                typeId: 1,
                answerIds: [action.answerId]
            };
            break;
        case ResponseActions.TEXT_ANSWER_RESPONSE:
            response = {
                //type: "TEXT_ANSWER",
                typeId: 3,
                answerIds: [action.answerId],
                responseText: action.answerText
            };
            break;
        case ResponseActions.REQUEST_RESPONSES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
            break;
        case ResponseActions.RECEIVE_RESPONSES:
            return Object.assign({}, action.responses, {
                isFetching: false,
                didInvalidate: false,
                loaded: true
            });
            break;
        case ResponseActions.REQUEST_SAVE_RESPONSE:
            console.log('request save response');
            return Object.assign({}, state, {
                isSaving: true,
                didInvalidate: false
            });
            break;
        case ResponseActions.RECEIVE_RESPONSE_SAVED:
            console.log('response saved');
            return Object.assign({}, state, {
                isSaving: false,
                didInvalidate: false
            });
            break;
        default:
            return state
    }
    if (response) {
        let clone = {...state};
        clone[action.questionId] = response;
        return clone;
    }
    return state;
};


export default responses;