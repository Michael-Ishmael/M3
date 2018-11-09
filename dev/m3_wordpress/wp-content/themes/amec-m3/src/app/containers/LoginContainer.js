import React from "react";
import connect from "react-redux/es/connect/connect";
import {fetchLoginUser, fetchLogoutUser} from "../actions/auth";
import LoginForm from "../components/login/LoginForm";


const mapStateToProps = (state, ownProps) => {

    const redirectFunc = (route) => {
        ownProps.history.push(route);
    };

    if(state.auth.loggedIn){
        return {
            loggedIn: true,
            isFetching: false,
            loginFailed: false,
            reloadPage: true,
            reloadUrl: state.auth.redirectUrl,
            ...state.auth
        }
    }

    return state.auth;

};

const mapDispatchToProps = (dispatch) => {

    return {
        loginUser: (userName, password) =>
            dispatch(fetchLoginUser(userName, password)),
        logoutUser: ()  =>
            dispatch(fetchLogoutUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)