import React from 'react'
import {Route, Switch} from "react-router-dom";
import AccountContainer from "./containers/AccountContainer";
import QuestionnaireContainer from "./containers/QuestionnaireContainer";
import ScoresContainer from "./containers/ScoresContainer";
import RecommendationContainer from "./containers/RecommendationContainer";

const App = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 pt-4">
                <Switch>
                    <Route exact path="/m3(/|home/)" component={AccountContainer}/>
                    <Route path="/m3/questionnaires/:questionnaireId/pages/:pageId?" component={QuestionnaireContainer}/>
                    <Route exact path="/m3/questionnaires/:questionnaireId" component={QuestionnaireContainer}/>
                    <Route path="/m3/questionnaires/:questionnaireId/scores" component={ScoresContainer}/>
                    <Route path="/m3/questionnaires/:questionnaireId/recommendations" component={RecommendationContainer}/>
                    <Route component={AccountContainer}/>
                </Switch>
            </div>
        </div>
    </div>
);

export default App;


