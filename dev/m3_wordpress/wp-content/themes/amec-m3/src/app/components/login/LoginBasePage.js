import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RegisterForm from "./RegisterForm";
import {NavLink} from "react-router-dom";
import LoginForm from "./LoginForm";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import {AuthChoiceButtons} from "./AuthChoiceButtons";

const viewStateType = {
    CHOOSE: "CHOOSE",
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
};

class LoginBasePage extends Component {


    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {
        this.state = {
            viewState: viewStateType.CHOOSE
        }
    }

    handleChoiceClick(value) {
        const name = "viewState";
        this.setState({[name]: value})
    }

    render() {

        return (<div className="container p-5">
            <div className="auth-container">
                <Switch>
                    <Route exact path='/questionnaire' component={AuthChoiceButtons}/>
                    <Route exact path='/questionnaire/register' component={RegisterForm}/>
                    <Route exect path='/questionnaire/login' component={LoginForm}/>
                </Switch>


            </div>
        </div>)

    }

}

/*LoginBasePage.propTypes = {
    nextEnabled: PropTypes.bool.isRequired,
    prevEnabled: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    sectionHeader: PropTypes.string.isRequired,
};*/

export default LoginBasePage
