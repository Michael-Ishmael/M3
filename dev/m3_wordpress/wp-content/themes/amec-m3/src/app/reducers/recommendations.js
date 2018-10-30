import {RecommendationActions} from "../actions";

const recommendations = (state = { isFetching: false, didInvalidate: false, recommendations: []}, action) => {
    switch (action.type) {
        case RecommendationActions.REQUEST_RECOMMENDATIONS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case RecommendationActions.RECEIVE_RECOMMENDATIONS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                strengths: action.strengths,
                actions: action.actions,
            });
        default:
            return state;
    }
};

export default recommendations;