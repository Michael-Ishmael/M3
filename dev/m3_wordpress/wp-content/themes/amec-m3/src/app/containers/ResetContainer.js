import React from "react";
import connect from "react-redux/es/connect/connect";
import {fetchPasswordReset} from "../actions";
import ResetPasswordForm from "../components/login/ResetPasswordForm";
import {getPasswordResetKeyParam, getPasswordResetLoginParam} from "../services/util";


const mapStateToProps = (state, ownProps) => {

    let loginEmail = getPasswordResetLoginParam(ownProps);
    let loginKey = getPasswordResetKeyParam(ownProps);

    if (state.auth.loggedIn) {
        return {
            loggedIn: true,
            isFetching: false,
            loginFailed: false,
            reloadPage: true,
            reloadUrl: state.auth.redirectUrl,
            ...state.auth
        }
    }

    return {
        loginEmail,
        loginKey,
        ...state.auth
    };

};

const mapDispatchToProps = (dispatch) => {

    return {
        resetUserPassword: (emailAddress, password, key) =>
            dispatch(fetchPasswordReset(emailAddress, password, key)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPasswordForm)