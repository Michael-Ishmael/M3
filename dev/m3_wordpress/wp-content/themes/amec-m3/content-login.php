<?php
/**
 * Created by PhpStorm.
 * User: scorpio
 * Date: 15/10/2018
 * Time: 11:23
 */
?>

<div class="container">
    <div class="auth-container m-5 row justify-content-center ">

        <div class="register-container col-6">
            <div class="register-form ">
                <form id="register">

                    <div class="form-group">
                        <label htmlFor="name" class="cols-sm-2 control-label">First Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon">

                                    </span>
                                <input type="text" class="form-control" name="name" id="name"
                                       placeholder="First Name"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="name" class="cols-sm-2 control-label">Last Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon">
                                    </span>
                                <input type="text" class="form-control" name="name" id="name"
                                       placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="name" class="cols-sm-2 control-label">Organisation</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon">
                                    </span>
                                <input type="text" class="form-control" name="name" id="name"
                                       placeholder="Organisation"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="name" class="cols-sm-2 control-label">Your Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon">
                                    </span>
                                <input type="text" class="form-control" name="name" id="name"
                                       placeholder="Enter your Name"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="name" class="cols-sm-2 control-label">Your Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon">
                                    </span>
                                <input type="text" class="form-control" name="name" id="name"
                                       placeholder="Enter your Name"/>
                            </div>
                        </div>
                    </div>




                    <div class="form-group">
                        <label htmlFor="email" class="cols-sm-2 control-label">Your Email</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-envelope fa"
                                                                           aria-hidden="false"></i></span>
                                <input type="text" class="form-control" name="email" id="email"
                                       placeholder="Enter your Email"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="username" class="cols-sm-2 control-label">Username</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-users fa"
                                                                           aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="username" id="username"
                                       placeholder="Enter your Username"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="password" class="cols-sm-2 control-label">Password</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg"
                                                                           aria-hidden="true"></i></span>
                                <input type="password" class="form-control" name="password" id="password"
                                       placeholder="Enter your Password"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg"
                                                                           aria-hidden="true"></i></span>
                                <input type="password" class="form-control" name="confirm" id="confirm"
                                       placeholder="Confirm your Password"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <a href="https://deepak646.blogspot.com/" target="_blank" type="button" id="button"
                           class="btn btn-primary btn-lg btn-block login-button">Register</a>
                    </div>

                </form>
            </div>
        </div>


        <div class="login-container col-6">
            <div class="login-form ">
                <form id="login ">

                    <div class="form-group">

                        <input type="email" class="form-control" id="login-email" placeholder="Email Address"/>

                    </div>

                    <div class="form-group">

                        <input type="password" class="form-control" id="login-password" placeholder="Password"/>

                    </div>
                    <div class="forgot">
                        <a href="reset.html">Forgot password?</a>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>

                </form>
            </div>
        </div>


    </div>
</div>