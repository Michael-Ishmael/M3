import {apiGetBenchmarkCategories} from "../services/m3Api";

export const BenchmarkActions = {
    REQUEST_BENCHMARK_CATEGORIES: "REQUEST_BENCHMARK_CATEGORIES",
    RECEIVE_BENCHMARK_CATEGORIES: "RECEIVE_BENCHMARK_CATEGORIES",
    CLEAR_BENCHMARK_CATEGORIES: "CLEAR_BENCHMARK_CATEGORIES",
};


export const requestBenchmarkCategories = () => ({
    type: BenchmarkActions.REQUEST_BENCHMARK_CATEGORIES,
});

export const receiveBenchmarkCategories = (benchmarkCategories) => ({
    type: BenchmarkActions.RECEIVE_BENCHMARK_CATEGORIES,
    benchmarkCategories: benchmarkCategories
});

export const clearBenchmarkCategories = () => ({
    type: BenchmarkActions.CLEAR_BENCHMARK_CATEGORIES
});

export function fetchBenchmarkCategories() {


    return function (dispatch) {

        dispatch(requestBenchmarkCategories());

        return apiGetBenchmarkCategories()
            .then(json => {
                    return dispatch(receiveBenchmarkCategories(json));
                }
            )

    }

}

