import React from 'react'
import PropTypes from 'prop-types'

const FooterControl = ({ onNext, onPrev, nextEnabled, prevEnabled, pageCount}) => (
    <div className="mt-5 p-1 row questionnaire-footer-controls">
        <div className="col-6 text-left">
            <button onClick={() => onPrev(pageCount)} className="btn btn-outline-secondary" disabled={!prevEnabled} >
                Previous
            </button>
        </div>
        <div className="col-6 text-right">
            <button onClick={() => onNext(pageCount)} className="btn btn-outline-secondary" disabled={!nextEnabled}>
                Next
            </button>
        </div>
    </div>
);

FooterControl.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
};

export default FooterControl