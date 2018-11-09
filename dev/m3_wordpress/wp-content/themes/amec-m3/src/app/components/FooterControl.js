import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const FooterControl = ({ nextEnabled, prevEnabled, pagination, gotoScoresEnabled}) => {

    const goToScoresButton = gotoScoresEnabled ? (<NavLink to={ pagination.scoresUrl } className="btn btn-outline-secondary mr-1">Scores</NavLink>) : null;
    const prevButton = pagination.prevLink === null ? null :
        (<NavLink to={ pagination.prevLink.url } className={"btn btn-outline-secondary" + (prevEnabled ? "" : " disabled") }>{ pagination.prevLink.label }</NavLink>);


    return (
        <div className="my-5 p-1 row questionnaire-footer-controls">
            <div className="col-6 text-left">
                { prevButton }
            </div>
            <div className="col-6 text-right">
                {goToScoresButton}
                <NavLink to={ pagination.nextLink.url} className={"btn btn-outline-secondary" + (nextEnabled ? "" : " disabled") }>{ pagination.nextLink.label }</NavLink>
            </div>
        </div>
    );
};

FooterControl.propTypes = {
    nextEnabled: PropTypes.bool.isRequired,
    prevEnabled: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired,
        nextLink: PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired,
        prevLink: PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }),
        scoresUrl: PropTypes.string.isRequired
    })
};

export default FooterControl