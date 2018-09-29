import React from 'react'
import PropTypes from 'prop-types'

const ResponseRadio = ({answerId, text, onChecked, checked = false}) => {

    const handleCheck = (e) => {
        onChecked(e.target.checked);
    };

    return (
        <div className="form-check">
            <input onChange={handleCheck} className="form-check-input" type="radio" name={'a' + answerId} id={'a' + answerId}
                   value={answerId} checked={checked}/>
            <label className="form-check-label" htmlFor={'a' + answerId}>
                {text}
            </label>
        </div>
    )
};

ResponseRadio.propTypes = {
    answerId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

export default ResponseRadio