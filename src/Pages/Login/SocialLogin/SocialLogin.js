import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";


import './SocialLogin.css';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className=''>
            <p style={{textDecoration: 'underline'}} className='mt-2 px-2'>or SignUp Using</p>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn mx-auto px-2'>
                    <FcGoogle/>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn mx-auto px-2'>
                    <BsGithub/>
                </button>
                <button className='btn mx-auto px-2' style={{ color: '#0B5ED7' }}>
                    <BsFacebook/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;