import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";
import LoaderSpinner from "../LoaderSpinner";
import BenchmarkFilter from "../BenchmarkFilter";
import ScoreGraphic from "../../svg/ScoreGraphic";

export const ScorePage = (props) => {

    let content, graphic;

    if (!props.ready) {
        if (props.shouldFetch) {
            props.fetchScores(props.questionnaireId);
            props.fetchRecommendations(props.questionnaireId);
        }
        content = (
            <div className="page-loader">
                <LoaderSpinner size={20}/></div>
        );
        graphic = null;
    } else {

        let scoreTable = null;
        if (props.scores) {
            scoreTable = props.scores.map(dimension => {
                return (<tr key={dimension.description}>
                    <td>{dimension.description}</td>
                    <td>{"Score: " + Math.round(dimension.score).toString()}</td>
                    <td>{"BenchmarkScore: " + Math.round(dimension.benchmarkScore).toString()}</td>
                </tr>)
            })
        }

        const onFilterChosen = (filterId) => {
            props.fetchScores(props.questionnaireId, filterId)
        };

        let benchmarkFilter = null;
        if (props.benchmarksReady) {

            benchmarkFilter = (<BenchmarkFilter
                filterCategories={props.filterCategories}
                filters={props.filters}
                onFilterChosen={onFilterChosen}
            />)
        }


        content = (<div className="row">
            <div className="col-12 benchmark-filter-container">
                {benchmarkFilter}
            </div>
{/*            <div className="col-6 col-sm-4">
                <table>
                    <tbody>
                    {scoreTable}

                    </tbody>
                </table>
            </div>*/}

        </div>);

        graphic = (<div className="score-graphic-container">
            <ScoreGraphic scores={props.scores}></ScoreGraphic>
        </div>)

    }

    return (
        <div className="questionnaire-container">
            <div className="questionnaire-body">
                <div className="row">
                    <div className="col-3">
                        <NavLink to={getAppRoute(M3_APP_ROUTES.ACCOUNT)} activeClassName="m3-active"
                                 className="btn btn-sm btn-outline-secondary m3-nav-button"><i
                            className="fas fa-arrow-alt-circle-left"/> My Questionnaires</NavLink>
                    </div>
                    <div className="col-6">
                        <h3 className="text-center">
                            <div className="pb-2 center-div">Your Results</div>
                        </h3>
                    </div>
                    <div className="col-3 col-sm-2">
                    </div>
                </div>
                <div className="section-text intro">

                </div>


                {content}
                { graphic }


            </div>
            <div className="my-5 p-1 row questionnaire-footer-controls">
                <div className="col-6 text-left">
                    <NavLink
                        to={getAppRoute(M3_APP_ROUTES.QUESTIONNAIRE_PAGE, {questionnaireId: props.questionnaireId})}
                        className="btn btn-outline-secondary">Back to Questionnaire</NavLink>
                </div>
                <div className="col-6 text-right">
                    <NavLink
                        to={getAppRoute(M3_APP_ROUTES.RECOMMENDATIONS_PAGE, {questionnaireId: props.questionnaireId})}
                        className="btn btn-outline-secondary">Recommendations</NavLink>
                </div>
            </div>
        </div>

    );
};


ScorePage.propTypes = {
    ready: PropTypes.bool.isRequired,
    questionnaireIncomplete: PropTypes.bool.isRequired,
    shouldFetch: PropTypes.bool.isRequired,
    questionnaireId: PropTypes.number.isRequired,
    scores: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        benchmarkScore: PropTypes.number.isRequired,
    })),
    fetchScores: PropTypes.func.isRequired,
    fetchRecommendations: PropTypes.func.isRequired,
    benchmarksReady: PropTypes.bool.isRequired,
    shouldFetchBenchmarks: PropTypes.bool.isRequired,
    filterCategories: PropTypes.arrayOf(PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        maxResponseCount: PropTypes.number.isRequired,
    })),
    filters: PropTypes.arrayOf(PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        filterId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        responseCount: PropTypes.number.isRequired,
    })),
};

export default ScorePage;