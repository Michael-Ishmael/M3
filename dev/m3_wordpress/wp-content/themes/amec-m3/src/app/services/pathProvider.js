export const M3_APP_ROUTES = {
    ACCOUNT: "ACCOUNT",
    HOME: "HOME",
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    LOST_PASSWORD: "LOST_PASSWORD",
    RESET_PASSWORD: "RESET_PASSWORD",
    NEW_QUESTIONNAIRE: "NEW_QUESTIONNAIRE",
    QUESTIONNAIRE_START: "QUESTIONNAIRE_START",
    QUESTIONNAIRE_PAGE: "QUESTIONNAIRE_PAGE",
    SCORES_PAGE: "SCORES_PAGE",
    RECOMMENDATIONS_PAGE: "RECOMMENDATIONS_PAGE",
};

const M3_BASE_PATH = "/m3";

export function getAppRoute(area, params) {

    switch (area) {
        case M3_APP_ROUTES.NEW_QUESTIONNAIRE:
            return `${M3_BASE_PATH}/new`;
        case M3_APP_ROUTES.LOGIN:
            return `${M3_BASE_PATH}/login`;
        case M3_APP_ROUTES.REGISTER:
            return `${M3_BASE_PATH}/register`;
        case M3_APP_ROUTES.LOST_PASSWORD:
            return `${M3_BASE_PATH}/lost-password`;
        case M3_APP_ROUTES.RESET_PASSWORD:
            return `${M3_BASE_PATH}/reset-password`;
        case M3_APP_ROUTES.QUESTIONNAIRE_START:
            return `${M3_BASE_PATH}/questionnaires/${params.questionnaireId}`;
        case M3_APP_ROUTES.QUESTIONNAIRE_PAGE:
            return `${M3_BASE_PATH}/questionnaires/${params.questionnaireId}/pages/${params.pageIndex}`;
        case M3_APP_ROUTES.SCORES_PAGE:
            return `${M3_BASE_PATH}/questionnaires/${params.questionnaireId}/scores`;
        case M3_APP_ROUTES.RECOMMENDATIONS_PAGE:
            return `${M3_BASE_PATH}/questionnaires/${params.questionnaireId}/recommendations`;
        case M3_APP_ROUTES.ACCOUNT:
        case M3_APP_ROUTES.HOME:
        default:
            return `${M3_BASE_PATH}/`
    }

}