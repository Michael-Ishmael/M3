import {AuthActions} from "../actions/auth";

const auth = (
    state = {
        isFetching: false,
        loggedIn: false,
        userId: -1,
        userName: null,
        displayName: null,
        linkSent: false,
        redirectUrl: null
    }, action) => {

    switch (action.type) {
        case AuthActions.REQUEST_USER_LOGOUT:
            return Object.assign({}, state, {
                isFetching: true,
                loggedIn: false,
                loginFailed: false,
            });
        case AuthActions.RECEIVE_USER_LOGGED_OUT:

            let logoutState;
            if(action.logoutInfo && action.logoutInfo.ok){
                logoutState = {
                    loggedIn: false,
                    userId: -1,
                    userName: null,
                    displayName: null,
                    loginFailed: false,
                }
            } else {
                logoutState = {
                    loggedIn: true,
                }
            }

            return Object.assign({}, state, {
                isFetching: false,
                ...logoutState
            });
        case AuthActions.REQUEST_USER_LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                loginFailed: false,
            });
        case AuthActions.RECEIVE_USER_LOGGED_IN:
            let loginInfo = action.loginInfo || {};
            return Object.assign({}, state, {
                isFetching: false,
                loginFailed: loginInfo.errorKey != null,
                ...loginInfo
            });

        case AuthActions.REQUEST_PASSWORD_RESET_LINK:
            return Object.assign({}, state, {

                isFetching: true,
                loginFailed: false,
            });
        case AuthActions.RECEIVE_PASSWORD_RESET_LINK_SENT:
            let linkInfo = action.resetInfo || {};
            return Object.assign({}, state, {
                linkSent: linkInfo.success,
                isFetching: false,
                loginFailed: linkInfo.errorKey,
                ...linkInfo
            });

        case AuthActions.REQUEST_RESET_PASSWORD:
            return Object.assign({}, state, {
                isFetching: true,
                loginFailed: false,
            });
        case AuthActions.RECEIVE_PASSWORD_RESET:
            let resetInfo = action.resetInfo || {};
            return Object.assign({}, state, {
                loggedIn: resetInfo.success,
                isFetching: false,
                loginFailed: resetInfo.errorKey != null,
                ...resetInfo
            });


        default:
            return state;
    }

};

export  default auth;