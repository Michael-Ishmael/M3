import React, {Component} from 'react'
import {FormErrors} from "./FormErrors";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {
        this.state = {
            log: '',
            pwd: '',
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


    render() {
        return (
            <div className="row justify-content-center">
                <div className="auth-choice col-6">
                    <form id="login" className="p-2" action={getAppRoute(M3_APP_ROUTES.HOME)} method="post">
                        <span className="pull-right"> <i className="fas fa-times" ></i> </span>
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
                                       placeholder="Password"/>
                            </div>

                        </div>

                        <div className="form-group ">
                            <input type="submit" id="m3_login"
                                   className="btn btn-primary btn-block login-button" value="Log In"
                                   name="m3_login"/>
                        </div>

                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors}/>
                        </div>


                    </form>
                </div>
            </div>
        )
    };

}


export default LoginForm