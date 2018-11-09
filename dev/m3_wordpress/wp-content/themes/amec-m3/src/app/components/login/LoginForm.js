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
            formErrors: {log: '', pwd: ''}

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

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
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
            this.props.loginUser(this.state.log, this.state.pwd)
        }
    }


    render() {

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
        } else if(this.props.fetching){
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
                        <a onClick={() => handleForgotPassword()}><i className="far fa-question-circle fa-sm" /> Forgot Password?</a>
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
    loginUser: PropTypes.func.isRequired
};

export default LoginForm