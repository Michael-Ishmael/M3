import React from "react";
import connect from "react-redux/es/connect/connect";
import {fetchPasswordResetLink} from "../actions";
import LostPasswordForm from "../components/login/LostPasswordForm";


const mapStateToProps = (state) => {

    if(state.auth.linkSent){
        return {
            resetFailed: false,
            reloadPage: true,
            reloadUrl: state.auth.redirectUrl,
            ...state.auth
        }
    }

    return {
        ...state.auth
    };

};

const mapDispatchToProps = (dispatch) => {

    return {
        requestResetLink: (emailAddress) =>
            dispatch(fetchPasswordResetLink(emailAddress)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LostPasswordForm)