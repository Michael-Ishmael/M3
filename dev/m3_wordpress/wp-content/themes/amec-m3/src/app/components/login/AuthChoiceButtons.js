import {NavLink} from "react-router-dom";
import React from "react";
import {getAppRoute, M3_APP_ROUTES} from "../../services/pathProvider";

export const AuthChoiceButtons = () => (<div className="p-4">
    <div className="row">
        <div className="col-12 text-center">
            <h3>Welcome to the AMEC M3 questionnaire</h3>
            <p>
                You'll need to register your details so you can fill in the questionnaire.
            <br/>
                If you've already set yourself up, log in below.
            </p>
        </div>
        <div className="col-6 text-center">
            <NavLink to={ getAppRoute(M3_APP_ROUTES.REGISTER) }>
            <div className="auth-choice register">
                <div>
                    <i className="fa fa-user-plus large-icon"/>
                </div>
                <h4>Register as New User</h4>
            </div>
            </NavLink>
        </div>
        <div className="col-6 text-center">
            <NavLink to={ getAppRoute(M3_APP_ROUTES.LOGIN) }>
                <div className="auth-choice login">
                    <div>
                        <i className="far fa-arrow-alt-circle-right large-icon"/>
                    </div>
                    <h4>Sign In</h4>
                </div>
            </NavLink>
        </div>
    </div>
</div>);