import React, {Component} from "react";
import PropTypes from "prop-types";
import LoaderSpinner from "../LoaderSpinner";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";
import NavLink from "react-router-dom/es/NavLink";


class LostPasswordForm extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {
        this.state = {
            showErrors: false,
            emailAddress: '',
            formValid: false,
            emailValid: false,
            formErrors: {emailAddress: ''},
            showResetSubmitted: false,
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;

        switch (fieldName) {
            case 'emailAddress':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'This is not valid email address';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid});
    }

    submitForm() {
        if (!this.state.formValid) {
            this.setState({showErrors: true});
        } else {
            this.props.requestResetLink(this.state.emailAddress);
            this.handleResetSubmitted(true);
        }
    }

    handleResetSubmitted(show) {
        this.setState({showResetPassword: false, showResetSubmitted: show});
    }


    renderResetSubmitted() {
        return (<div className="row justify-content-center">
            {/*{ submission }*/}
            <div className="auth-choice col-6 ">
                <a className="pull-right" onClick={() => this.handleResetSubmitted(false)}>
                    <i className="fas fa-times"/>
                </a>
                <h2>Reset Password</h2>

                <div className="reset-password-info">
                    <p>
                        We have emailed you a link to reset your password.
                    </p>
                    <p>
                        You should receive it in the next few minutes.
                    </p>
                    <p>
                        Haven't received it? <a onClick={() => this.handleResetPassword(true)}>Click here to resend</a>
                    </p>
                </div>

                <div className="form-group ">
                    <NavLink to={getAppRoute(M3_APP_ROUTES.HOME)}>
                        <button id="m3_login"
                                className="btn btn-primary btn-block login-button"
                                name="m3_login" onClick={() => this.handleResetSubmitted(false)}>
                            Close
                        </button>
                    </NavLink>
                </div>

            </div>
        </div>)
    }

    render() {

        let formErrors = false;

        let submission;
        if (this.state.showResetSubmitted && this.props.linkSent) {
            return this.renderResetSubmitted();
        } else if (this.props.isFetching) {
            submission = (<LoaderSpinner size={10}/>)
        } else {
            submission = (<button id="m3_login"
                                  className="btn btn-primary btn-block login-button"
                                  name="m3_login" onClick={() => this.submitForm()}>
                Reset
            </button>)
        }

        return (<div className="row justify-content-center">
            <div className="auth-choice col-6 ">
                <NavLink className="pull-right" to={ getAppRoute(M3_APP_ROUTES.HOME) }>
                    <i className="fas fa-times"/>
                </NavLink>
                <h2>Reset Password</h2>

                <div className="form-group">
                    <label htmlFor="log" className=" control-label">Email address</label>

                    <div className="input-group ">

                        <input type="email" className="form-control" name="emailAddress" id="emailAddress"
                               value={this.state.emailAddress}
                               onChange={(event) => this.handleUserInput(event)}
                               placeholder="Email address"/>
                    </div>

                </div>

                <div className="form-group ">
                    {submission}
                </div>

                {formErrors}
            </div>
        </div>)

    }


}


LostPasswordForm.propTypes = {
    linkSent: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    linkSending: PropTypes.bool,
    resetFailed: PropTypes.bool,
    requestResetLink: PropTypes.func.isRequired,
};

export default LostPasswordForm;