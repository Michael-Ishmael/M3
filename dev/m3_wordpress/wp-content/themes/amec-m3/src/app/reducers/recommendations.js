import {RecommendationActions} from "../actions";

const recommendations = (state = {
    ready: false,
    isFetching: false,
    didInvalidate: false,
    strengths: [],
    actions: []
}, action) => {
    switch (action.type) {
        case RecommendationActions.REQUEST_RECOMMENDATIONS:
            return Object.assign({}, state, {
                ready: false,
                isFetching: true,
                didInvalidate: false,
            });
        case RecommendationActions.RECEIVE_RECOMMENDATIONS:
            return Object.assign({}, state, {
                ready: true,
                isFetching: false,
                didInvalidate: false,
                strengths: action.strengths,
                actions: action.actions,
            });
        case RecommendationActions.CLEAR_RECOMMENDATIONS:
            return {
                ready: false,
                isFetching: false,
                didInvalidate: false,
                strengths: [],
                actions: []
            };
        default:
            return state;
    }
};

export default recommendations;