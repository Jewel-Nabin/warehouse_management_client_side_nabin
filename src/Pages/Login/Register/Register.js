import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='main-signin'>
            <PageTitle title={"sign up"}></PageTitle>
            <div className='register-form'>
                <h4 style={{ textAlign: 'center', color: '#977353' }}>Sign Up</h4>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms"><small>Accept Sparkle's Terms and Conditions?</small></label>
                    <input
                        disabled={!agree}
                        style={{color: 'white', backgroundColor: '#977353' }}
                        className='w-50 mx-auto btn mt-2'
                        type="submit"
                        value="SignUp" />
                </form>
                <p><small>Already have an account?</small><Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}><small>Please Login</small></Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;