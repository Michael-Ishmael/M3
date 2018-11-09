import {getAppRoute, M3_APP_ROUTES} from "./pathProvider";


export function handleRedirect(ownProps, redirectIndex) {
    let questionnaireId = getQuestionnaireIdParam(ownProps);
    if (questionnaireId > -1 && redirectIndex) {
        ownProps.history.push(getAppRoute(M3_APP_ROUTES.QUESTIONNAIRE_PAGE, {questionnaireId, pageIndex: redirectIndex}));
    } else {
        ownProps.history.push(getAppRoute(M3_APP_ROUTES.ACCOUNT) );
    }
}

export function getQuestionnaireIdParam(ownProps) {
    if (ownProps.match && ownProps.match.params && ownProps.match.params.questionnaireId)
        return getIntOrDefault(ownProps.match.params.questionnaireId, -1);
    return -1;
}

export function getPageIndexParam(ownProps) {
    if (ownProps.match && ownProps.match.params && ownProps.match.params.pageId)
        return getIntOrDefault(ownProps.match.params.pageId, -1);
    return -1;
}

function getIntOrDefault(val, defaultVal) {
    let parsed = Number.parseInt(val);
    if (Number.isNaN(parsed)) {
        return defaultVal;
    }
    return parsed;
}

export const splitParagraphs = (text) => {
    if(!text) return [''];
    const lines = text.split('\n');
    return lines.filter(l => l && l.trim().length > 0 );
};



export const calculateProgress = (responses, totalQuestionCount) => {



};