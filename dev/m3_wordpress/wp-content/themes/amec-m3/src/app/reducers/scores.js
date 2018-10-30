import {ScoreActions} from "../actions";

const scores = (state = { isFetching: false, didInvalidate: false, dimensions: []}, action) => {
    switch (action.type) {
        case ScoreActions.REQUEST_SCORES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case ScoreActions.RECEIVE_SCORES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                dimensions: action.scores
            });
        default:
            return state;
    }
};

export default scores;