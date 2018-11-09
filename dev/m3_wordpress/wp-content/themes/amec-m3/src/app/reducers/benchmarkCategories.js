import {BenchmarkActions} from "../actions";

const benchmarks = (state = {
    ready: false,
    isFetching: false,
    didInvalidate: false,
    filterCategories: [],
    filters: [],

}, action) => {
    switch (action.type) {
        case BenchmarkActions.REQUEST_BENCHMARK_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case BenchmarkActions.RECEIVE_BENCHMARK_CATEGORIES:
            return Object.assign({}, state, {
                ready: true,
                isFetching: false,
                didInvalidate: false,
                ...action.benchmarkCategories
            });
        case BenchmarkActions.CLEAR_BENCHMARK_CATEGORIES:
            return Object.assign({}, state, {
                ready: false,
                isFetching: false,
                didInvalidate: false,
            });
        default:
            return state;
    }
};

export default benchmarks;