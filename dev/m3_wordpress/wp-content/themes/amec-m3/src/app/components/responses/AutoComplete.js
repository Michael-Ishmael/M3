import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types'


const AutoComplete = ({question, answers, onAnswer}) => {

    let checkedVal = -1;
    const countryOptions = answers.map(a => {
        if(a.checked)
            checkedVal = a.answerId;
        return ({key: a.answerId, value: a.answerId, text: a.text});
    });

    const handleOptionChange = (e, data) => {
        const label = data.options.filter(o => o.value === data.value)[0].text;
        onAnswer(data.value, label);
    };

    const handleFocus = (e, data) => {
        e.target.setSelectionRange(0, e.target.value.length);
    };

    return (
        <div className="answer-container text-center row justify-content-center">
            <Dropdown placeholder="Select Country"
                      onChange={(event, data) => handleOptionChange(event, data)}
                      value={checkedVal} fluid search selection
                      selectOnNavigation={false}
                      options={countryOptions} minCharacters={3}
                      onFocus={handleFocus}
            />
        </div>
    );
};

AutoComplete.propTypes = {
    question: PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        questionTypeId: PropTypes.number.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
        answerId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool
    })).isRequired
};

export default AutoComplete

