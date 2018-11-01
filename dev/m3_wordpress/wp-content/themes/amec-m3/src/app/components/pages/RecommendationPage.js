import BasePage from "./BasePage";
import React from "react";
import PropTypes from "prop-types";

export const RecommendationPage = ({pageContent, pagination}) => {


    let pageTextEl = null;
    if (pageContent.pageText) {
        pageTextEl = (<div className="section-text intro">
            {pageContent.pageText}
        </div>)
    }


    function getRecSetRows(recSet, recLabel){
        if(!recSet) return [];
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
            obj[label] = {items: recSetItem.items };

            if(recSetItem.items.length > maxRows) maxRows = recSetItem.items.length;
        }

        let rows = [];

        for (let i = 0; i < maxRows; i++) {
            let cols = [];
            if(i === 0) cols.push({rowSpan: Math.min(5, maxRows), content: recLabel});
            for (let j = 0; j < labels.length; j++) {
                const label = labels[j];
                if(obj[label]){
                    let set = obj[label];
                    let itemLength = set.items.length;
                    if(i < itemLength){
                        cols.push({content: set.items[i].text})
                    } else {
                        cols.push({content: ""})
                    }
                }
            }
            rows.push(cols)
            if(i === 4) break;
        }
        return rows;

    }


    

    return (
        <BasePage nextEnabled={true} prevEnabled={true} pagination={pagination}
                  sectionHeader={pageContent.sectionHeader} progress={null}>
            {pageTextEl}
            <div className="recommendation-table ">
                <table className="table table-striped" >
                    <thead>
                        <tr className="top">
                            <th></th>
                            <th className="rec-col"><div className="reporting">Reporting</div></th>
                            <th className="rec-col"><div className="planning">Planning</div></th>
                            <th className="rec-col"><div className="impact">Impact</div></th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        getRecSetRows(pageContent.recommendations.strengths, "Strengths").map((r, i) => {

                        return (<tr key={i}>{

                            r.map((c, j) => {
                                if(i === 0 && j === 0){
                                    return (<th key={i+'_'+j} rowSpan={c.rowSpan}>{ c.content }</th>)
                                } else {
                                    return (<td key={i+'_'+j} rowSpan={c.rowSpan}>{ c.content }</td>)
                                }

                            })

                        }</tr>)

                    }) }
                    <tr className="split"><td colSpan="4"> </td></tr>

                    {
                        getRecSetRows(pageContent.recommendations.actions, "Actions").map((r, i) => {

                            return (<tr key={i} >{

                                r.map((c, j) => {
                                    if(i === 0 && j === 0){
                                        return (<th key={i+'_'+j} rowSpan={c.rowSpan}>{ c.content }</th>)
                                    } else {
                                        return (<td key={i+'_'+j} rowSpan={c.rowSpan}>{ c.content }</td>)
                                    }

                                })

                            }</tr>)

                        }) }

                    </tbody>

                </table>
            </div>
        </BasePage>
    );
};


RecommendationPage.propTypes = {
    pageContent: PropTypes.shape({
        sectionHeader: PropTypes.string.isRequired,
        sectionText: PropTypes.string.isRequired,
        recommendations: PropTypes.arrayOf(PropTypes.shape({
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

export default RecommendationPage;