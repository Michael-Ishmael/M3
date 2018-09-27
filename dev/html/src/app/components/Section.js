import React from 'react'
import PropTypes from 'prop-types'

const Section = ({onNext, onPrev, text}) => (
    <div>
        <p className="">
            {text}
        </p>
        <div>
            <a onClick={onPrev} href="#">Back</a>
            <a onClick={onNext} href="#">Next</a>
        </div>
    </div>
);

export default Section

