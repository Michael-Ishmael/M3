import React from 'react'
import PropTypes from 'prop-types'

const ResponseCheck = ({answerId, text, onChecked, checkType = "radio", checked = false}) => {

    const handleCheck = (e) => {
        onChecked(e.target.checked);
    };

    const checkClass = checked ? " checked" : "";

    return (
        <div className="form-check mx-3">

            <input onChange={handleCheck} className="form-check-input"
                   type={checkType} name={'a' + answerId} id={'a' + answerId}
                   value={answerId} checked={checked}/>
            <label className={"form-check-label " + checkClass} htmlFor={'a' + answerId}>
                {text}
            </label>
        </div>
    )
};

ResponseCheck.propTypes = {
    answerId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

export default ResponseCheck