import {AuthActions} from "../actions/auth";

const auth = (
    state = {
        isFetching: false,
        loggedIn: false,
        userId: -1,
        userName: null,
        displayName: null
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
                loginFailed: loginInfo.errorKey,
                ...loginInfo
            });
        default:
            return state;
    }

};

export  default auth;