import React from 'react'
import PropTypes from 'prop-types'
import FooterControl from "../FooterControl";
import Line from "rc-progress/es/Line";
import Sticky from "react-sticky-el";
import {NavLink} from "react-router-dom";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";

const BasePage = ({nextEnabled, prevEnabled, pagination, sectionHeader, progress, children}) => {

    const progressBar = progress ? (<Sticky className="m3-progress-bar" scrollElement="window" boundaryElement="body">
        <Line percent={progress} strokeWidth=".5" strokeColor="#FE6105" strokeLinecap="square"/>
        <span className="m3-progress-label">{progress + "%"}</span>
    </Sticky>) : null;

    return (
        <div className="questionnaire-container">
            { progressBar }
            <div className="questionnaire-body">
                <div className="row">
                    <div className="col-3 col-sm-2">
                        <NavLink to={ getAppRoute(M3_APP_ROUTES.ACCOUNT) } activeClassName="m3-active" className="btn btn-sm btn-outline-secondary m3-nav-button"><i className="fas fa-arrow-alt-circle-left" />  My Questionnaires</NavLink>
                    </div>
                    <div className="col06 col-sm-8">
                        <h3 className="text-center">
                            <div className="pb-2 center-div">{sectionHeader}</div>
                        </h3>
                    </div>
                    <div className="col-3 col-sm-2">
                        {/*<NavLink to={ getAppRoute(M3_APP_ROUTES.ACCOUNT) } className="btn btn-sm btn-outline-secondary m3-nav-button"><i className="fas fa-arrow-alt-circle-left" />  My Questionnaires</NavLink>*/}
                    </div>
                </div>

                {children}
            </div>
            <FooterControl nextEnabled={nextEnabled} prevEnabled={prevEnabled} pagination={pagination} gotoScoresEnabled={progress >= 99.4} />
        </div>
    );
};

BasePage.propTypes = {
    nextEnabled: PropTypes.bool.isRequired,
    prevEnabled: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    }),
    sectionHeader: PropTypes.string.isRequired,
};

export default BasePage
