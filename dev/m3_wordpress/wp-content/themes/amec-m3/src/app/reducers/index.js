import { combineReducers } from 'redux'
import responses from "./responses";
import scores from "./scores";
import recommendations from "./recommendations";
import account from "./account";
import questionnaireContent from "./questionnaireContent";
import auth from "./auth";
import benchmarks from "./benchmarkCategories";

export default combineReducers (
    {
        auth: auth,
        questionnaireContent: questionnaireContent,
        account: account,
        responses: responses,
        scores: scores,
        recommendations: recommendations,
        benchmarks: benchmarks
    }
)