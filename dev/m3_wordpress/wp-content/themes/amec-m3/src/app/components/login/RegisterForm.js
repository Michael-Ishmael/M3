import React, {Component} from 'react'
import {FormErrors} from "./FormErrors";
import countries from "./countries";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {

        const nonce = window.m3_globals_object ? window.m3_globals_object.register_nonce : null;

        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            nonce: nonce
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
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
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
            <div className="auth-choice register">
                <form id="register" action={getAppRoute(M3_APP_ROUTES.HOME)} method="post" className="p-2">
                    <h2>Register</h2>
                    <input type="hidden" value={this.state.nonce} name="security"/>
                    <input type="hidden" value="m3_register_true" name="m3_register"/>
                    <div className="row">
                        <div className="col-6">

                            <div className="form-group">
                                <label htmlFor="firstName" className=" control-label">First Name</label>
                                <div className="">
                                    <div className="input-group">

                                        <input type="text" className="form-control" name="firstName" id="firstName"
                                               placeholder="First Name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName" className="control-label">Last Name</label>
                                <div className="">
                                    <div className="input-group">

                                        <input type="text" className="form-control" name="lastName" id="lastName"
                                               placeholder="Last Name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="organisation" className="control-label">Organisation</label>
                                <div className="">
                                    <div className="input-group">

                                        <input type="text" className="form-control" name="organisation"
                                               id="organisation"
                                               placeholder="Organisation"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="jobTitle" className=" control-label">Job Title</label>
                                <div className="">
                                    <div className="input-group">

                                        <input type="text" className="form-control" name="jobTitle" id="jobTitle"
                                               placeholder="Job Title"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactNumber" className=" control-label">Contact Number</label>
                                <div className="">
                                    <div className="input-group">

                                        <input type="tel" className="form-control" name="contactNumber"
                                               id="contactNumber"
                                               placeholder="Contact Number"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="country" className=" control-label">Country</label>
                                <div className="">
                                    <div className="input-group">

                                        <select className="form-control" name="country" id="country"
                                                placeholder="Country">
                                            <option selected>Select Country</option>
                                            {
                                                countries.map(c => <option value={c}>{c}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="email" className=" control-label">Email</label>

                                <div className="input-group ">

                                    <input type="email" className="form-control" name="email" id="email"
                                           value={this.state.email}
                                           onChange={(event) => this.handleUserInput(event)}
                                           placeholder="A Work Email Address"/>
                                </div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className=" control-label">Password</label>

                                <div className="input-group ">

                                    <input type="password" className="form-control" name="password" id="password"
                                           placeholder="Password"/>
                                </div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm" className=" control-label">Confirm Password</label>

                                <div className="input-group ">

                                    <input type="password" className="form-control" name="confirm" id="confirm"
                                           placeholder="Confirm Password"/>
                                </div>

                            </div>

                            <div className="form-group ">
                                <input type="submit" id="registerSubmit"
                                       className="btn btn-primary btn-lg btn-block login-button" value="Register"
                                       name="register"/>
                            </div>

                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrors}/>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
    )
    };

    }


    export default RegisterForm