import {ScoreActions} from "../actions";

const scores = (state = {
    ready: false,
    isFetching: false,
    didInvalidate: false,
    resultTable: []
}, action) => {
    switch (action.type) {
        case ScoreActions.REQUEST_SCORES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case ScoreActions.RECEIVE_SCORES:
            return Object.assign({}, state, {
                ready: true,
                isFetching: false,
                didInvalidate: false,
                resultTable: action.scoreResults
            });
        case ScoreActions.CLEAR_SCORES:
            return Object.assign({}, state, {
                ready: false,
                isFetching: false,
                didInvalidate: false,
            });
        default:
            return state;
    }
};

export default scores;