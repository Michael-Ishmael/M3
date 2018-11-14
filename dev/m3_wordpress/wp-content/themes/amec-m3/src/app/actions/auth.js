import {authLoginUser, authLogoutUser, authResetUserPassword, authSendPasswordLink} from "../services/m3AjaxLogin";


export const AuthActions = {
    REQUEST_USER_LOGOUT: "REQUEST_USER_LOGOUT",
    RECEIVE_USER_LOGGED_OUT: "RECEIVE_USER_LOGOUT",
    REQUEST_USER_LOGIN: "REQUEST_USER_LOGIN",
    RECEIVE_USER_LOGGED_IN: "RECEIVE_USER_LOGGED_IN",
    REQUEST_PASSWORD_RESET_LINK: "REQUEST_PASSWORD_RESET_LINK",
    RECEIVE_PASSWORD_RESET_LINK_SENT: "RECEIVE_PASSWORD_RESET_LINK_SENT",
    REQUEST_RESET_PASSWORD: "REQUEST_RESET_PASSWORD",
    RECEIVE_PASSWORD_RESET: "RECEIVE_PASSWORD_RESET",
    /*     REQUEST_DELETE_QUESTIONNAIRE: "REQUEST_DELETE_QUESTIONNAIRE",
        RECEIVE_DELETED_QUESTIONNAIRE: "RECEIVE_DELETED_QUESTIONNAIRE"*/
};


export const requestLogout = () => ({
    type: AuthActions.REQUEST_USER_LOGOUT
});

export const receiveLoggedOut = (logoutInfo) => ({
    type: AuthActions.RECEIVE_USER_LOGGED_OUT,
    logoutInfo
});

export function fetchLogoutUser() {

    return function (dispatch) {

        dispatch(requestLogout());

        return authLogoutUser()
            .then(data =>

                dispatch(receiveLoggedOut(data))
            )
    }
}



export const requestLogin = (username, password) => ({
    type: AuthActions.REQUEST_USER_LOGIN,
    username,
    password
});

export const receiveLoggedIn = (loginInfo) => ({
    type: AuthActions.RECEIVE_USER_LOGGED_IN,
    loginInfo
});

export function fetchLoginUser(username, password) {

    return function (dispatch) {

        dispatch(requestLogin(username, password));

        return authLoginUser(username, password)
            .then(data =>

                dispatch(receiveLoggedIn(data))
            )
    }
}


export const requestResetLink = (emailAddress) => ({
    type: AuthActions.REQUEST_PASSWORD_RESET_LINK,
    emailAddress,
});

export const receivePasswordResetLink = (resetInfo) => ({
    type: AuthActions.RECEIVE_PASSWORD_RESET_LINK_SENT,
    resetInfo
});

export function fetchPasswordResetLink(emailAddress) {

    return function (dispatch) {

        dispatch(requestResetLink(emailAddress));

        return authSendPasswordLink(emailAddress)
            .then(data =>

                dispatch(receivePasswordResetLink(data))
            )
    }
}



export const requestPasswordReset = (emailAddress, password, key) => ({
    type: AuthActions.REQUEST_RESET_PASSWORD,
    emailAddress,
    password,
    key
});

export const receivePasswordReset = (resetInfo) => ({
    type: AuthActions.RECEIVE_PASSWORD_RESET,
    resetInfo
});

export function fetchPasswordReset(emailAddress, password, key) {

    return function (dispatch) {

        dispatch(requestPasswordReset(emailAddress, password, key));

        return authResetUserPassword(emailAddress, password, key)
            .then(data =>

                dispatch(receivePasswordReset(data))
            )
    }
}