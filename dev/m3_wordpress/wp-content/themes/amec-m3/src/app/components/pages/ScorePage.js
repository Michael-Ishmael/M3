import BasePage from "./BasePage";
import React from "react";
import PropTypes from "prop-types";

export const ScorePage = ({pageContent, pagination}) => {


    let pageTextEl = null;
    if (pageContent.pageText) {
        pageTextEl = (<div className="section-text intro">
            {pageContent.pageText}
        </div>)
    }

    let scoreTable = null;
    if (pageContent.scores && pageContent.scores.dimensions) {
        scoreTable = pageContent.scores.dimensions.map(dimension => {
            return (<tr>
                <td>{dimension.description}</td>
                <td>{"Score: " + Math.round(dimension.pc).toString()}</td>
            </tr>)
        })
    }

    return (
        <BasePage nextEnabled={true} prevEnabled={true} pagination={pagination}
                  sectionHeader={pageContent.sectionHeader} progress={null}>
            {pageTextEl}
            <div>
                <table>
                    { scoreTable }
                </table>
            </div>
        </BasePage>
    );
};


ScorePage.propTypes = {
    pageContent: PropTypes.shape({
        sectionHeader: PropTypes.string.isRequired,
        sectionText: PropTypes.string.isRequired,
        scores: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            pc: PropTypes.string.isRequired,
            weighting: PropTypes.number.isRequired,
        })),
        pageText: PropTypes.string.isRequired,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

export default ScorePage;