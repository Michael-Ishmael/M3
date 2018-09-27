import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import sections from './app/reducers/sections'
import App from './app/App'
import "./scss/main.scss"
import data from './data'

const store = createStore(sections, data);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

