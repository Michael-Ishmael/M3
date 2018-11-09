import React from "react";
import {fetchBenchmarkCategories, fetchRecommendations, fetchResponses, fetchScores,} from "../actions";
import connect from "react-redux/es/connect/connect";
import ScorePage from "../components/pages/ScorePage";
import {getQuestionnaireIdParam} from "../services/util";


const mapStateToProps = (state, ownProps) => {

    let questionnaireId = getQuestionnaireIdParam(ownProps);

/*    if (!questionnaireComplete(state)) {
        return {
            ready: false,
            questionnaireIncomplete: true,
            redirectFunc: () => {
                handleRedirect(ownProps, -1);
            },
            shouldFetch: false,
            questionnaireId: questionnaireId,
            ownScores: {
                dimensions: []
            },
            benchMarkScores: {
                dimensions: []
            }
        }
    }*/

    if (state.scores) {

        if (!state.scores.ready) {

            return {
                ready: false,
                questionnaireIncomplete: false,
                shouldFetch: !state.scores.isFetching,
                questionnaireId: questionnaireId,
                scores:  [],
                benchmarksReady: false,
                shouldFetchBenchmarks: true,
                filterCategories: [],
                filters: [],
            }

        } else {

            let benchmarks;
            if(state.benchmarks){
              if(state.benchmarks.ready){
                  benchmarks = {
                      benchmarksReady: true,
                      shouldFetchBenchmarks: false,
                      filterCategories: state.benchmarks.filterCategories,
                      filters: state.benchmarks.filters,
                  }
              }  else if(!state.benchmarks.isFetching){
                  benchmarks = {
                      benchmarksReady: false,
                      shouldFetchBenchmarks: true,
                      filterCategories: [],
                      filters: [],
                  }
              } else {
                  benchmarks = {
                      benchmarksReady: false,
                      shouldFetchBenchmarks: false,
                      filterCategories: [],
                      filters: [],
                  }
              }
            }

            return {
                ready: true,
                questionnaireIncomplete: false,
                shouldFetch: false,
                questionnaireId: questionnaireId,
                scores: state.scores.resultTable,
                ...benchmarks
            }
        }
    } else {

        return {
            questionnaireIncomplete: false,
            shouldFetch: true,
            ready: false,
            questionnaireId: questionnaireId,
            scores:  [],
            benchmarksReady: false,
            shouldFetchBenchmarks: true,
            filterCategories: [],
            filters: [],
        }

    }

};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchScores: (questionnaireId, benchmarkFilterId) => {
            dispatch(fetchBenchmarkCategories());
            return dispatch(fetchScores(questionnaireId, benchmarkFilterId));
        },
        fetchRecommendations: (questionnaireId) =>
            dispatch(fetchRecommendations(questionnaireId)),
        fetchBenchmarkFilters: () => dispatch(fetchBenchmarkCategories())

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScorePage)