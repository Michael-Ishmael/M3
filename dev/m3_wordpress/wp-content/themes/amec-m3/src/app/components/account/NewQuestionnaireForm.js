import React, {Component} from 'react'
import PropTypes from "prop-types";

class NewQuestionnaireForm extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {

        this.state = {
            newQuestionnaireName: null,
        }
    }

    handleNameChange(event) {

        this.setState({newQuestionnaireName: event.target.value})
    }

    render() {

        return (<div className="account-page">
            <div className="lge-icon" onClick={() => this.props.onExit()}>
                <i className="fas fa-arrow-alt-circle-left"/>
            </div>
            <h2>Start New Questionnaire</h2>

            <div className="row">
                <div className="col-4">
                    <div className="new-questionnaire-form">
                        <p>
                            Give your questionnaire a reference name so you can find it later

                        </p>

                        <div className="form-group">
                            <div className="">
                                <div className="input-group">

                                    <input type="text" className="form-control" name="questionnaireRef"
                                           id="questionnaireRef"
                                           placeholder="Questionnaire Name"
                                           onChange={(event) => this.handleNameChange(event)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group ">
                            <button className="btn btn-primary"
                                    onClick={() => this.props.onCreate(this.state.newQuestionnaireName)}
                                    name="newQuestionnaire">Begin Questionnaire
                                <i className="fas fa-arrow-circle-right"/>
                            </button>
                        </div>

                        {/*                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>*/}
                    </div>
                </div>
            </div>

        </div>);

    }

}

NewQuestionnaireForm.propTypes = {
    onExit: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
};

export default NewQuestionnaireForm;