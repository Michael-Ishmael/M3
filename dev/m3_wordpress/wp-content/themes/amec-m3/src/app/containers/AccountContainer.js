import React from "react";
import {
    fetchDeleteQuestionnaire,
    fetchNewQuestionnaire,
    fetchQuestionnaires,
    fetchRenameQuestionnaire,
} from "../actions";
import connect from "react-redux/es/connect/connect";
import {getAppRoute, M3_APP_ROUTES} from "../services/pathProvider";
import AccountPage from "../components/account/AccountPage";


function handleRedirect(ownProps, pageLookup) {
    let questionnaireId = getQuestionnaireIdParam(ownProps);
    if (questionnaireId > -1 && pageLookup.redirectIndex) {
        ownProps.history.push('/m3/account/' + questionnaireId + '/pages/' + pageLookup.redirectIndex);
    } else {
        ownProps.history.push('/m3/');
    }
}

function getQuestionnaireIdParam(ownProps) {
    if (ownProps.match && ownProps.match.params && ownProps.match.params.questionnaireId)
        return getIntOrDefault(ownProps.match.params.questionnaireId, -1);
    return -1;
}

function getPageIndexParam(ownProps) {
    if (ownProps.match && ownProps.match.params && ownProps.match.params.pageId)
        return getIntOrDefault(ownProps.match.params.pageId, 1);
    return 1;
}

function getIntOrDefault(val, defaultVal) {
    let parsed = Number.parseInt(val);
    if (Number.isNaN(parsed)) {
        return defaultVal;
    }
    return parsed;
}

const mapStateToProps = (state, ownProps) => {

    const redirectFunc = (route) => {
        ownProps.history.push(route);
    };

    if(state.account ){

        if(state.account.newCreatedQuestionnaire && state.account.newCreatedQuestionnaire.questionnaireId) {

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

    return {
        getAccountQuestionnaires: () =>
            dispatch(fetchQuestionnaires()),
        createNewQuestionnaire: (newQuestionnaireName)  =>
            dispatch(fetchNewQuestionnaire(newQuestionnaireName)),
        renameQuestionnaire: (questionnaireId, newQuestionnaireName)  =>
            dispatch(fetchRenameQuestionnaire(questionnaireId, newQuestionnaireName)),
        deleteQuestionnaire: (questionnaireId)  =>
            dispatch(fetchDeleteQuestionnaire(questionnaireId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage)