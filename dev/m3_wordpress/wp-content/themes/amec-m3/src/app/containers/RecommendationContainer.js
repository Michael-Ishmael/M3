import React from "react";
import {fetchRecommendations, fetchResponses, fetchScores,} from "../actions";
import connect from "react-redux/es/connect/connect";
import {getQuestionnaireIdParam} from "../services/util";
import RecommendationPage from "../components/pages/RecommendationPage";


const mapStateToProps = (state, ownProps) => {

    let questionnaireId = getQuestionnaireIdParam(ownProps);

    if (state.recommendations) {

        if (!state.recommendations.ready) {

            return {
                ready: false,
                questionnaireIncomplete: false,
                shouldFetch: !state.recommendations.isFetching,
                questionnaireId: questionnaireId,
                strengths:[],
                actions: []
            }

        } else {
            return {
                ready: true,
                questionnaireIncomplete: false,
                shouldFetch: false,
                questionnaireId: questionnaireId,
                strengths: state.recommendations.strengths,
                actions: state.recommendations.actions
            }
        }
    } else {

        return {
            questionnaireIncomplete: false,
            shouldFetch: true,
            ready: false,
            questionnaireId: questionnaireId,
            strengths:[],
            actions: []
        }

    }

};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchRecommendations: (questionnaireId) =>
            dispatch(fetchRecommendations(questionnaireId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecommendationPage)