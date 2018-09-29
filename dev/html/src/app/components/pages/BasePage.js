import React from 'react'
import PropTypes from 'prop-types'
import FooterControl from "../FooterControl";

const BasePage = ({onNext, onPrev, nextEnabled, prevEnabled, pageCount, children}) => (
    <div className="questionnaire-container">
        <div className="questionnaire-body">
            { children }
        </div>
        <FooterControl onNext={onNext} onPrev={onPrev} nextEnabled={nextEnabled} prevEnabled={prevEnabled} pageCount={pageCount}/>
    </div>
);

BasePage.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
};

export default BasePage
