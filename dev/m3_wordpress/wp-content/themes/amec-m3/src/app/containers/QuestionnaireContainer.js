import React from "react";
import {fetchQuestionnaireContent, fetchResponses} from "../actions";
import connect from "react-redux/es/connect/connect";
import Questionnaire from "../components/Questionnaire";
import {resolvePage} from "../services/pageManager";


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

    const contentReady = state.questionnaireContent && state.questionnaireContent.loaded;
    const contentFetching = !contentReady && state.questionnaireContent && state.questionnaireContent.isFetching;

    const responsesReady = state.responses && state.responses.loaded;
    const responsesFetching = !responsesReady && state.responses && state.responses.isFetching;

    let pageComponent = null;
    let questionnaireId = getQuestionnaireIdParam(ownProps);
    if(contentReady && responsesReady && questionnaireId > -1){
        let pageLookup = resolvePage(state.questionnaireContent, state.responses, questionnaireId, getPageIndexParam(ownProps));
        if(pageLookup.redirectRequired){
            handleRedirect(ownProps, pageLookup);
            return;
        } else {
            pageComponent = pageLookup.pageComponent;
        }
    }

    return {

        questionnaireContent: state.questionnaireContent,
        responses: state.responses,
        contentReady,
        contentFetching,
        responsesReady,
        responsesFetching,
        componentReady: contentReady && responsesReady,
        pageComponent,
        ...ownProps
    }

};

const mapDispatchToProps = (dispatch, ownProps) => {

    let questionnaireId = -1;
    if(ownProps.match && ownProps.match.params)
        questionnaireId = ownProps.match.params.questionnaireId;

    return {
        fetchQuestionnaireContent: () =>
            dispatch(fetchQuestionnaireContent()),
        fetchQuestionnaireResponses: ()  =>
            dispatch(fetchResponses(questionnaireId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questionnaire)