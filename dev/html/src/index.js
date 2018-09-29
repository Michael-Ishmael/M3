import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './app/reducers'
import App from './app/App'
import "./scss/main.scss"
import data from './data'

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App questionnaire={data}/>
    </Provider>,
    document.getElementById('app')
);

