import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './app/reducers'
import App from './app/App'
import "./scss/main.scss"
import data from './data'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reduxCookiesMiddleware from 'redux-cookies-middleware';
import { getStateFromCookies} from 'redux-cookies-middleware';

let initialState = { responses: {}};

const paths = {
    'responses': { name: 'm3_responses' }
};

initialState = getStateFromCookies(initialState, paths);

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        reduxCookiesMiddleware(paths)
    )
);

render(
        <Provider store={store}>
            <Router>
                <Route path="/:page?" render={({ history, match}) => (
                    <App
                        questionnaire={data}
                        history={history}
                        params={match.params}
                    >
                    </App>
                )} />
            </Router>
        </Provider>,
    document.getElementById('app')
);

