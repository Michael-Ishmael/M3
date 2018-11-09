import {authLoginUser, authLogoutUser} from "../services/m3AjaxLogin";


export const AuthActions = {
    REQUEST_USER_LOGOUT: "REQUEST_USER_LOGOUT",
    RECEIVE_USER_LOGGED_OUT: "RECEIVE_USER_LOGOUT",
    REQUEST_USER_LOGIN: "REQUEST_USER_LOGIN",
    RECEIVE_USER_LOGGED_IN: "RECEIVE_USER_LOGGED_IN",
  /* REQUEST_RENAME_QUESTIONNAIRE: "REQUEST_RENAME_QUESTIONNAIRE",
    RECEIVE_RENAMED_QUESTIONNAIRE: "RECEIVE_RENAMED_QUESTIONNAIRE",
         REQUEST_DELETE_QUESTIONNAIRE: "REQUEST_DELETE_QUESTIONNAIRE",
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