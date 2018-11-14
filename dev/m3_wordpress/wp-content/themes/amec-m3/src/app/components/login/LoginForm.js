import React, {Component} from 'react'
import {FormErrors} from "./FormErrors";
import PropTypes from "prop-types";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";
import {NavLink} from "react-router-dom";

const LOGIN_FAIL_ERRORS = {
    WRONG_EMAIL: "WRONG_EMAIL",
    WRONG_PASSWORD: "WRONG_PASSWORD",
    UNKNOWN: "UNKNOWN",
}

class LoginForm extends Component {

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
            emailValid: false,
            passwordValid: false,
            formErrors: {log: '', pwd: ''},
            showResetPassword: false,
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
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'log':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'pwd':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    submitForm() {
        if(!this.state.formValid) {
            this.setState({showErrors: true});
        } else {
            if(this.state.showResetPassword){
                this.props.requestResetLink(this.state.log);
                this.handleResetSubmitted(true);
            } else {
                this.props.loginUser(this.state.log, this.state.pwd)
            }
        }
    }

    handleResetPassword(show){
        this.setState({showResetPassword: show, showResetSubmitted: false});
    }

    handleResetSubmitted(show){
        this.setState({showResetPassword: false, showResetSubmitted: show});
    }

    renderResetSubmitted(){
        return ( <div className="row justify-content-center">
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
                        Haven't received it? <a onClick={() => this.handleResetPassword(true)} >Click here to resend</a>
                    </p>
                </div>

                <div className="form-group ">
                    <button id="m3_login"
                            className="btn btn-primary btn-block login-button"
                            name="m3_login" onClick={() => this.handleResetSubmitted(false)}>
                        Close
                    </button>
                </div>

            </div>
        </div>)
    }

    renderForgotPassword(){

        let formErrors = false;

        return ( <div className="row justify-content-center">
            {/*{ submission }*/}
            <div className="auth-choice col-6 ">
                <a className="pull-right" onClick={() => this.handleResetPassword(false)}>
                    <i className="fas fa-times"/>
                </a>
                <h2>Reset Password</h2>

                <div className="form-group">
                    <label htmlFor="log" className=" control-label">Email address</label>

                    <div className="input-group ">

                        <input type="email" className="form-control" name="log" id="log"
                               value={this.state.email}
                               onChange={(event) => this.handleUserInput(event)}
                               placeholder="Email"/>
                    </div>

                </div>

                <div className="form-group ">
                    <button id="m3_login"
                            className="btn btn-primary btn-block login-button"
                            name="m3_login" onClick={() => this.submitForm()}>
                        Reset
                    </button>
                </div>

                {formErrors}
            </div>
        </div>)

    }

    render() {

        if(this.state.showResetSubmitted) return this.renderResetSubmitted();
        if(this.state.showResetPassword) return this.renderForgotPassword();

        let formErrors;
        if(this.props.loginFailed){
            let loginFailText;
            switch (this.props.errorKey) {
                case LOGIN_FAIL_ERRORS.WRONG_EMAIL:
                    loginFailText = "Email not recognized";
                    break;
                case LOGIN_FAIL_ERRORS.WRONG_PASSWORD:
                    loginFailText = "Incorrect Password. Click forgot password to reset.";
                    break;
                case LOGIN_FAIL_ERRORS.UNKNOWN:
                default:
                    loginFailText = "Sorry, a problem occurred logging you in. Please tried again.";
                    break;
            }
            formErrors = (<div className="panel panel-default error">{ loginFailText }</div>);
        } else {
            formErrors = this.state.showErrors ? (<div className="panel panel-default error">
                <FormErrors formErrors={this.state.formErrors}/>
            </div>) : null;
        }


        let submission;
        if(this.props.loggedIn){
            submission = <div>Logged In redirecting...</div>;
            if(this.props.reloadPage){
                window.location = this.props.reloadUrl;
            }
        } else if(this.props.isFetching){
            submission = <div>Loading...</div>
        }

        return (
            <div className="row justify-content-center">
                {/*{ submission }*/}
                <div className="auth-choice col-6 ">
                    <NavLink className="pull-right" to={ getAppRoute(M3_APP_ROUTES.HOME) }>
                    <i className="fas fa-times"/>
                    </NavLink>
                    <h2>Log In</h2>

                    <div className="form-group">
                        <label htmlFor="log" className=" control-label">Email</label>

                        <div className="input-group ">

                            <input type="email" className="form-control" name="log" id="log"
                                   value={this.state.email}
                                   onChange={(event) => this.handleUserInput(event)}
                                   placeholder="Email"/>
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="pwd" className=" control-label">Password</label>

                        <div className="input-group ">

                            <input type="password" className="form-control" name="pwd" id="pwd"
                                   onChange={(event) => this.handleUserInput(event)}
                                   placeholder="Password"/>
                        </div>

                    </div>

                    <div className="form-group ">
                        <button id="m3_login"
                                className="btn btn-primary btn-block login-button"
                                name="m3_login" onClick={() => this.submitForm()}>
                            Log In
                        </button>
                    </div>

                    <div className="forgot-link">
                        <NavLink to={ getAppRoute(M3_APP_ROUTES.LOST_PASSWORD) }>
                            <i className="far fa-question-circle fa-sm" /> Forgot Password?
                        </NavLink>
                    </div>

                    {formErrors}
                </div>
            </div>
        )
    };

}

LoginForm.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    loginFailed: PropTypes.bool,
    reloadPage: PropTypes.bool,
    reloadUrl: PropTypes.string,
    errorKey: PropTypes.string,
    loginUser: PropTypes.func.isRequired,
    requestResetLink: PropTypes.func.isRequired,
    resetUserPassword: PropTypes.func.isRequired,
};

export default LoginForm