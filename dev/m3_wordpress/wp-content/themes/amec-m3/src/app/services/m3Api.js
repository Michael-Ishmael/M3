import fetch from "cross-fetch";

//const baseUrl = window.m3_globals && window.m3_globals.apiUrl ? window.m3_globals.apiUrl
//    : "http://localhost/123";
const baseUrl = '/wp-json/m3/v1';
const nonce = window.m3_globals_object.apiNonce;

export function apiLoadQuestionnaireContent() {

    // A userId parameter is implicitly gained from being called within WordPress
    return fetch(baseUrl + `/questionnaire`)
        .then(
            response => {
                if(response.status !== 200){
                    return [];
                }
                return response.json();
            },
            error => console.log('An error occurred: ', error)
        )
}


export function apiGetQuestionnairesForUser() {


    // A userId parameter is implicitly gained from being called within WordPress
    return fetch(baseUrl + `/questionnaires`, {
        headers: {
            "X-WP-Nonce": nonce,
        },
    })
        .then(
            response => {
                if(response.status !== 200){
                    return [];
                }
                return response.json();
            },
            error => console.log('An error occurred: ', error)
        )
}

export function apiCreateQuestionnaireForUser(description){

    // A userId parameter is implicitly gained from being called within WordPress
    return fetch(baseUrl + '/questionnaires',
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "X-WP-Nonce": nonce,
            },
        body: JSON.stringify({ description })
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}

export function apiRenameQuestionnaire(questionnaireId, description){

    return fetch(baseUrl + `/questionnaires/${questionnaireId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({  description })
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}


export function apiDeleteQuestionnaire(questionnaireId){

    return fetch(baseUrl + `/questionnaires/${questionnaireId}`,
        {
            method: "DELETE",
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}

export function apiGetScoresForQuestionnaire(questionnaireId, benchmarkFilterId) {

    const suffix = (benchmarkFilterId && benchmarkFilterId > 0)
        ? `?benchmarkFilterId=${benchmarkFilterId}` : "";
    return fetch(baseUrl + `/questionnaires/${questionnaireId}/scores${suffix}`)
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}

export function apiPushScoresForQuestionnaire(questionnaireId) {

    return fetch(baseUrl + `/questionnaires/${questionnaireId}/scores`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "X-WP-Nonce": nonce,
        },
    })
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}

export function apiGetRecommendationsForQuestionnaire(questionnaireId) {

    return fetch(baseUrl + `/questionnaires/${questionnaireId}/recommendations`)
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}

export function apiGetBenchmarkCategories() {

    return fetch(baseUrl + `/benchmark-categories`)
        .then(
            response => {
                if(response.status !== 200){
                    return [];
                }
                return response.json();
            },
            error => console.log('An error occurred: ', error)
        )
}

/*
*
* Base URL =
*
*
* Home
*
* Get account for user, show progress
*
* Create new questionnaire
* Delete questionnaire (vis flag)
*
*
* Questionnaire pages
*
* Get responses for questionnaire
* Save Response to questionnaire
*
*
* Scores
*
* Get scores for questionnaire with benchmark scores (all / category / sub-category )
*
*
* Recommendations
*
* Get recommendations for questionnaire
*

 */

