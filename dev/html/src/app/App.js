import React from 'react'
import PageManager from "./containers/PageManager";

const App = ({questionnaire, history, params}) => (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-12 pt-4">
            <PageManager questionnaire={questionnaire} history={history} params={params}  />
        </div>
    </div>
    </div>
);

export default App
