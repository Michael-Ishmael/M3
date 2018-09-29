import React from 'react'
import PageManager from "./containers/PageManager";

const App = ({questionnaire}) => (
    <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 p-4">
            <PageManager questionnaire={questionnaire} />
        </div>
    </div>
);

export default App
