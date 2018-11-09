import React from 'react'
import PropTypes from 'prop-types'

const ResponseTableRadio = ({answerId, onChecked, checkType = "radio", checked = false}) => {

    const handleCheck = (e) => {
        onChecked(e.target.checked);
    };

    return (
        <div className="form-check mx-3">

            <input onChange={handleCheck} className="form-check-input"
                   type={checkType} name={'a' + answerId} id={'a' + answerId}
                   value={answerId} checked={checked}/>
        </div>
    )
};

ResponseTableRadio.propTypes = {
    answerId: PropTypes.number.isRequired,
    onChecked: PropTypes.func.isRequired,
    checked: PropTypes.bool
};

export default ResponseTableRadio