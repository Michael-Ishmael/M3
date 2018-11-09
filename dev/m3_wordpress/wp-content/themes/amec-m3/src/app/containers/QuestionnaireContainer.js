import React from "react";
import {fetchQuestionnaireContent, fetchResponses} from "../actions";
import connect from "react-redux/es/connect/connect";
import Questionnaire from "../components/Questionnaire";
import {resolvePage} from "../services/pageManager";
import {getPageIndexParam, getQuestionnaireIdParam, handleRedirect} from "../services/util";




const mapStateToProps = (state, ownProps) => {

    const contentReady = Boolean(state.questionnaireContent && state.questionnaireContent.loaded);
    const contentFetching = Boolean(!contentReady && state.questionnaireContent && state.questionnaireContent.isFetching);

    const responsesReady = Boolean(state.responses && state.responses.loaded);
    const responsesFetching = Boolean(!responsesReady && state.responses && state.responses.isFetching);

    let pageLookup = {
        pageFound: false,
        redirectRequired: false,
        redirectIndex: -1,
        pageComponent: null
    };
    let questionnaireId = getQuestionnaireIdParam(ownProps);
    if(contentReady && responsesReady && questionnaireId > -1){
        pageLookup = resolvePage(state.questionnaireContent, state.responses, questionnaireId, getPageIndexParam(ownProps));
        if(pageLookup.redirectRequired){
            pageLookup.redirectFunc = (pageIndex) => {
                handleRedirect(ownProps, pageIndex);
            };
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
        pageLookup,
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