import React from 'react'
import PropTypes from 'prop-types'
import FooterControl from "../FooterControl";

const BasePage = ({nextEnabled, prevEnabled, currentPage, sectionHeader, children}) => (
    <div className="questionnaire-container">
        <div className="questionnaire-body">
            <h3 className="text-center"><div className="pb-2 center-div">{sectionHeader}</div></h3>
            { children }
        </div>
        <FooterControl nextEnabled={nextEnabled} prevEnabled={prevEnabled} currentPage={currentPage}/>
    </div>
);

BasePage.propTypes = {
    nextEnabled: PropTypes.bool.isRequired,
    prevEnabled: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    sectionHeader: PropTypes.string.isRequired,
};

export default BasePage
