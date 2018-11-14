import React, {Component} from 'react'
import RegisterForm from "./RegisterForm";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import {AuthChoiceButtons} from "./AuthChoiceButtons";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";
import LoginContainer from "../../containers/LoginContainer";
import ResetContainer from "../../containers/ResetContainer";
import LostPasswordContainer from "../../containers/LostPasswordContainer";

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
                    <Route exact path={getAppRoute(M3_APP_ROUTES.HOME)} component={AuthChoiceButtons}/>
                    <Route exact path={getAppRoute(M3_APP_ROUTES.REGISTER)} component={RegisterForm}/>
                    <Route exact path={getAppRoute(M3_APP_ROUTES.LOST_PASSWORD)} render={(props) => (<LostPasswordContainer {...props} /> )} />
                    <Route exact path={getAppRoute(M3_APP_ROUTES.RESET_PASSWORD)} render={(props) => (<ResetContainer {...props} /> )} />
                    <Route exect path={getAppRoute(M3_APP_ROUTES.LOGIN)} render={(props) => (<LoginContainer {...props} />)} />
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
