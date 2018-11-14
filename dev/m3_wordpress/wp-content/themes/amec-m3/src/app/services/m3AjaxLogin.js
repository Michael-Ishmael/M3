import fetch from "cross-fetch";

/*const ajaxAuthObj = {

    ajaxUrl: "abc",
    redirectUrl: "abc",
    logoutNonce: "abc",
    loginNonce: "abc",
    passwordResetNonce: "abc",
    registerNonce: "abc",
    loggedInNonce: "abc",
    restNonce: "abc",
    restUrl: "abc",
    lostPasswordUrl: "abc",
    resetPasswordUrl: "abc",

};*/


export function authLogoutUser() {


    let authUrl = window.ajaxAuthObj.ajaxUrl;

    return fetch(authUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", //"application/x-www-form-urlencoded",
        },
        body: "action=ajaxlogout&security=" + window.ajaxAuthObj.logoutNonce
    })
        .then(
            response => response.json(),
            error => console.log('An error occurred: ', error)
        )
}

export function authLoginUser(userName, password) {

    let authUrl = window.ajaxAuthObj.ajaxUrl;

    return fetch(authUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", //"application/x-www-form-urlencoded",
        },
        body: `action=ajaxlogin&security=${window.ajaxAuthObj.loginNonce}&username=${userName}&password=${password}`
    })
        .then(
            response => {
                return response.json().then(authObj => {
/*                    if(process && process.env  && process.env.NODE_ENV === 'development'){
                        if(authObj.redirectUrl){
                            authObj.redirectUrl = authObj.redirectUrl.replace("localhost:8888", "m3project.local:3000")
                        }
                    }*/
                    return authObj;
                });

            },
            error => console.log('An error occurred: ', error)
        )

}

export function authSendPasswordLink(emailAddress) {

    let authUrl = window.ajaxAuthObj.lostPasswordUrl;

    return fetch(authUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `security=${window.ajaxAuthObj.passwordResetNonce}&user_login=${emailAddress}`
    })
        .then(
            response => {
                return response.json().then(authObj => {
                    return authObj;
                });

            },
            error => console.log('An error occurred: ', error)
        )

}


export function authResetUserPassword(emailAddress, newPassword, key) {

    let authUrl = window.ajaxAuthObj.resetPasswordUrl;

    return fetch(authUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `security=${window.ajaxAuthObj.passwordResetNonce}&user_login=${emailAddress}&new_pass=${newPassword}&key=${key}`
    })
        .then(
            response => {
                return response.json().then(authObj => {
                    return authObj;
                });

            },
            error => console.log('An error occurred: ', error)
        )

}

/*
*
* Login
* Register
* CheckLoggedIn
* Logout
* ForgotPassword
* ResetPassword
*
*
* */