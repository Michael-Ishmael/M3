import React from "react";
import LoaderSpinner from "../LoaderSpinner";
import {NavLink} from "react-router-dom";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";
import PropTypes from 'prop-types'

function getRecSetRows(recSet, recLabel) {
    if (!recSet) return [];
    let rows = mapRecSet(recSet, recLabel);
    return rows;
}

function mapRecSet(recSet, recLabel) {

    let obj = {};
    let maxRows = 0;
    let labels = ["reporting", "planning", "impact"];
    for (let i = 0; i < recSet.length; i++) {
        const recSetItem = recSet[i];
        const label = recSetItem.label.toLowerCase();
        obj[label] = {items: recSetItem.items};

        if (recSetItem.items.length > maxRows) maxRows = recSetItem.items.length;
    }

    let rows = [];

    for (let i = 0; i < maxRows; i++) {
        let cols = [];
        if (i === 0) cols.push({rowSpan: Math.min(5, maxRows), content: recLabel});
        for (let j = 0; j < labels.length; j++) {
            const label = labels[j];
            if (obj[label]) {
                let set = obj[label];
                let itemLength = set.items.length;
                if (i < itemLength) {
                    cols.push({content: set.items[i].text})
                } else {
                    cols.push({content: ""})
                }
            }
        }
        rows.push(cols)
        if (i === 4) break;
    }
    return rows;

}

export const RecommendationPage = (props) => {

    let content;

    if (!props.ready) {
        if (props.shouldFetch) {
            props.fetchRecommendations(props.questionnaireId);
        }
        content = (
            <div className="page-loader">
                <LoaderSpinner size={20}/></div>
        )
    } else {

        content = (
            <div className="recommendation-table ">
                <table className="table table-striped">
                    <thead>
                    <tr className="top">
                        <th></th>
                        <th className="rec-col">
                            <div className="reporting">Reporting</div>
                        </th>
                        <th className="rec-col">
                            <div className="planning">Planning</div>
                        </th>
                        <th className="rec-col">
                            <div className="impact">Impact</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        getRecSetRows(props.strengths, "Strengths").map((r, i) => {

                            return (<tr key={i}>{

                                r.map((c, j) => {
                                    if (i === 0 && j === 0) {
                                        return (<th key={i + '_' + j} rowSpan={c.rowSpan}>{c.content}</th>)
                                    } else {
                                        return (<td key={i + '_' + j} rowSpan={c.rowSpan}>{c.content}</td>)
                                    }

                                })

                            }</tr>)

                        })}
                    <tr className="split">
                        <td colSpan="4"/>
                    </tr>

                    {
                        getRecSetRows(props.actions, "Actions").map((r, i) => {

                            return (<tr key={i}>{

                                r.map((c, j) => {
                                    if (i === 0 && j === 0) {
                                        return (<th key={i + '_' + j} rowSpan={c.rowSpan}>{c.content}</th>)
                                    } else {
                                        return (<td key={i + '_' + j} rowSpan={c.rowSpan}>{c.content}</td>)
                                    }

                                })

                            }</tr>)

                        })}

                    </tbody>

                </table>
            </div>
        )

    }

    return (
        <div className="questionnaire-container">
            <div className="questionnaire-body">
                <div className="row">
                    <div className="col-3 col-sm-2">
                        <NavLink to={getAppRoute(M3_APP_ROUTES.ACCOUNT)} activeClassName="m3-active"
                                 className="btn btn-sm btn-outline-secondary m3-nav-button"><i
                            className="fas fa-arrow-alt-circle-left"/> My Questionnaires</NavLink>
                    </div>
                    <div className="col06 col-sm-8">
                        <h3 className="text-center">
                            <div className="pb-2 center-div">Recommendations</div>
                        </h3>
                    </div>
                    <div className="col-3 col-sm-2">
                    </div>
                </div>
                <div className="section-text intro">

                </div>
                {content}
                <div className="my-5 p-1 row questionnaire-footer-controls">
                    <div className="col-6 text-left">
                        <NavLink
                            to={getAppRoute(M3_APP_ROUTES.QUESTIONNAIRE_PAGE, {questionnaireId: props.questionnaireId})}
                            className="btn btn-outline-secondary">Back to Questionnaire</NavLink>
                    </div>
                    <div className="col-6 text-right">
                        <NavLink
                            to={getAppRoute(M3_APP_ROUTES.ACCOUNT)}
                            className="btn btn-outline-secondary">Exit</NavLink>
                    </div>
                </div>
            </div>
        </div>

    );

};


RecommendationPage.propTypes = {
    ready: PropTypes.bool.isRequired,
    questionnaireIncomplete: PropTypes.bool.isRequired,
    shouldFetch: PropTypes.bool.isRequired,
    questionnaireId: PropTypes.number.isRequired,
    strengths: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        pc: PropTypes.string,
        weighting: PropTypes.number,
    })),
    actions: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        pc: PropTypes.string,
        weighting: PropTypes.number,
    })),
    fetchRecommendations: PropTypes.func.isRequired,
};

export default RecommendationPage;