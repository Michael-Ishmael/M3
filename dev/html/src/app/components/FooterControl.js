import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const FooterControl = ({ nextEnabled, prevEnabled, currentPage}) => {


    return (
        <div className="my-5 p-1 row questionnaire-footer-controls">
            <div className="col-6 text-left">
                <NavLink to={ '/' + (currentPage -1)} className={"btn btn-outline-secondary" + (prevEnabled ? "" : " disabled") }>Previous</NavLink>
{/*                <button onClick={() => onPrev(pageCount)} className="btn btn-outline-secondary" disabled={!prevEnabled}>
                    Previous
                </button>*/}
            </div>
            <div className="col-6 text-right">
                <NavLink to={ '/' + (currentPage + 1)} className={"btn btn-outline-secondary" + (nextEnabled ? "" : " disabled") }>Next</NavLink>
{/*                <button onClick={() => onNext(pageCount)} className="btn btn-outline-secondary" disabled={!nextEnabled}>
                    Next
                </button>*/}
            </div>
        </div>
    );
};

FooterControl.propTypes = {
    nextEnabled: PropTypes.bool.isRequired,
    prevEnabled: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default FooterControl