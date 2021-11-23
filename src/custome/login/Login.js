import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';
import google from '../../img/google.png'
import './login.css'

const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='form-login'>
                <div onClick={handleGoogleLogin} className='d-flex justify-content-center'>
                    <div className="goog">
                        <img src={google} className='img' alt="" />
                        <h6 className='he'>Signin with Google</h6>
                    </div>
                </div>
        </div>
    );
};

export default Login;