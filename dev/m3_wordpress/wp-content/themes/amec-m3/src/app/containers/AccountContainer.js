import React from "react";
import {
    clearRecommendations,
    clearResponses, clearScores,
    fetchDeleteQuestionnaire,
    fetchNewQuestionnaire,
    fetchQuestionnaires,
    fetchRenameQuestionnaire,
} from "../actions";
import connect from "react-redux/es/connect/connect";
import {getAppRoute, M3_APP_ROUTES} from "../services/pathProvider";
import AccountPage from "../components/account/AccountPage";
import {fetchLogoutUser} from "../actions/auth";

const mapStateToProps = (state, ownProps) => {

    const redirectFunc = (route) => {
        ownProps.history.push(route);
    };

    if (state.account) {

        if (state.account.newCreatedQuestionnaire && state.account.newCreatedQuestionnaire.questionnaireId) {

            return {
                shouldRedirectToCreated: true,
                redirectUrl: getAppRoute(M3_APP_ROUTES.QUESTIONNAIRE_START,
                    {
                        questionnaireId: state.account.newCreatedQuestionnaire.questionnaireId
                    }),
                ready: false,
                shouldFetch: false,
                redirectFunc
            }
        } else {
            return {

                shouldRedirectToCreated: false,
                shouldFetch: !(state.account.loaded || state.account.isFetching),
                ready: state.account.loaded,
                questionnaires: state.account.questionnaires

            }
        }
    } else {

        return {

            shouldRedirectToCreated: false,
            shouldFetch: true,
            ready: false,
            questionnaires: [],

        }

    }

};

const mapDispatchToProps = (dispatch) => {

    dispatch(clearResponses());
    dispatch(clearScores());
    dispatch(clearRecommendations());

    return {
        getAccountQuestionnaires: () =>
            dispatch(fetchQuestionnaires()),
        createNewQuestionnaire: (newQuestionnaireName) =>
            dispatch(fetchNewQuestionnaire(newQuestionnaireName)),
        renameQuestionnaire: (questionnaireId, newQuestionnaireName) =>
            dispatch(fetchRenameQuestionnaire(questionnaireId, newQuestionnaireName)),
        deleteQuestionnaire: (questionnaireId) =>
            dispatch(fetchDeleteQuestionnaire(questionnaireId)),
        logout: () =>
            dispatch(fetchLogoutUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage)