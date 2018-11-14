import React, {Component} from 'react'
import {FormErrors} from "./FormErrors";
import PropTypes from "prop-types";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";
import {NavLink} from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner";

const RESET_FAIL_ERRORS = {
    LINK_EXPIRED: "LINK_EXPIRED",
    NO_PASSWORD: "NO_PASSWORD",
    UNKNOWN: "UNKNOWN",
};

class ResetPasswordForm extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {
        this.state = {
            showErrors: false,
            log: '',
            pwd: '',
            formValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formErrors: {log: '', pwd: ''},
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
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'pwd':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            case 'cPwd':
                confirmPasswordValid = value === this.state.pwd;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' Passwords don\'t match';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.passwordValid && this.state.confirmPasswordValid});
    }

    submitForm() {
        if (!this.state.formValid) {
            this.setState({showErrors: true});
        } else {
            this.props.resetUserPassword(this.props.loginEmail, this.state.pwd, this.props.loginKey);
            this.setState({showResetSubmitted: true});
        }
    }

    renderResetSubmitted() {
        return (<div className="row justify-content-center">
            {/*{ submission }*/}
            <div className="auth-choice col-6 ">
                <NavLink className="pull-right" to={getAppRoute(M3_APP_ROUTES.HOME)}>
                    <i className="fas fa-times"/>
                </NavLink>
                <h2>Reset Password</h2>

                <div className="reset-password-info p-3">
                    <LoaderSpinner size={10}/>

                </div>

            </div>
        </div>)
    }


    renderError() {


        return (<div className="row justify-content-center">
            {/*{ submission }*/}
            <div className="auth-choice col-6 ">
                <NavLink className="pull-right" to={getAppRoute(M3_APP_ROUTES.HOME)}>
                    <i className="fas fa-times"/>
                </NavLink>
                <h2>Reset Password</h2>

                <div className="reset-password-info">
                    <div className="reset-password-info">
                        <p>Sorry, this link has expired.</p>

                        <p>
                            <NavLink to={ getAppRoute(M3_APP_ROUTES.LOST_PASSWORD) }>Click here to request a new reset link</NavLink>
                        </p>

                    </div>

                </div>
            </div>
        </div>);

    }

    render() {

        //if (this.state.showResetSubmitted && !this.props.loginFailed) return this.renderResetSubmitted();
        if ( this.props.loginEmail === "invalidkey" || this.props.loginEmail === "expiredkey" ) return this.renderError();

        let formErrors;
        if (this.props.loginFailed) {
            let loginFailText;
            switch (this.props.errorKey) {
                case RESET_FAIL_ERRORS.LINK_EXPIRED:
                    return this.renderError();
                case RESET_FAIL_ERRORS.WRONG_PASSWORD:
                    loginFailText = "Incorrect Password. Click forgot password to reset.";
                    break;
                case RESET_FAIL_ERRORS.UNKNOWN:
                default:
                    loginFailText = "Sorry, a problem occurred resetting your password. Please try again.";
                    break;
            }
            formErrors = (<div className="panel panel-default error">{loginFailText}</div>);
        } else {
            formErrors = this.state.showErrors ? (<div className="panel panel-default error">
                <FormErrors formErrors={this.state.formErrors}/>
            </div>) : null;
        }


        let submission;
        if (this.props.loggedIn) {
            submission = <p>Logged in,redirecting...</p>;
            if (this.props.reloadPage) {
                window.location = this.props.reloadUrl;
            }
        } else if (this.props.isFetching) {
            submission = (<LoaderSpinner size={10}/>)
        } else {
            submission = (
                <button id="m3_login"
                        className="btn btn-primary btn-block login-button"
                        name="m3_login" onClick={() => this.submitForm()}>
                    Change Password
                </button>
                )
        }

        return (<div className="row justify-content-center">
            {/*{ submission }*/}
            <div className="auth-choice col-6 ">
                <NavLink className="pull-right" to={getAppRoute(M3_APP_ROUTES.HOME)}>
                    <i className="fas fa-times"/>
                </NavLink>
                <h2>Reset Password</h2>

                <div className="reset-password-info">
                    <p>
                        {"Enter a new password for the login " + this.props.loginEmail}
                    </p>

                </div>

                <div className="form-group">
                    <label htmlFor="pwd" className=" control-label">Password</label>

                    <div className="input-group ">

                        <input type="password" className="form-control" name="pwd" id="pwd"
                               onChange={(event) => this.handleUserInput(event)}
                               placeholder="Password"/>
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="cPwd" className=" control-label">Confirm Password</label>

                    <div className="input-group ">

                        <input type="password" className="form-control" name="cPwd" id="cPwd"
                               onChange={(event) => this.handleUserInput(event)}
                               placeholder="Confirm Password"/>
                    </div>

                </div>

                <div className="form-group ">
                    { submission }

                </div>



                {formErrors}
            </div>
        </div>)
    };

}

ResetPasswordForm.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    loginFailed: PropTypes.bool,
    reloadPage: PropTypes.bool,
    reloadUrl: PropTypes.string,
    errorKey: PropTypes.string,
    loginEmail: PropTypes.string,
    loginKey: PropTypes.string,
    resetUserPassword: PropTypes.func.isRequired,
};

export default ResetPasswordForm