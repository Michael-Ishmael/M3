import React from 'react'
import PropTypes from 'prop-types'

const ResponseText = ({answerId, answerText, responseText, handleTextAnswer}) => (
     <div className="form-group col-6">
        <input className="form-control" type="text" value={responseText} onChange={(e) => handleTextAnswer(answerId, e.target.value)}/>
    </div>
);

ResponseText.propTypes = {
    answerId: PropTypes.number.isRequired,
    answerText: PropTypes.string.isRequired,
    responseText: PropTypes.string.isRequired,
    handleTextAnswer: PropTypes.func.isRequired
};

export default ResponseText