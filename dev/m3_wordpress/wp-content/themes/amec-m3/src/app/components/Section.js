import React from 'react'
import PropTypes from 'prop-types'

const Section = ({onNext, onPrev, text}) => (
    <div className="questionnaire-container">
        <p className="">
            {text}
        </p>
        <div>
            <a onClick={onPrev} href="#">Back</a>
            <a onClick={onNext} href="#">Next</a>
        </div>
    </div>
);

Section.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Section

