import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { auth } from '../../firebase/firebase.config';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('Google Sign In Success:', user);
            toast.success('Successfully signed in with Google!');
            navigate('/');
        } catch (error) {
            console.error('Google Sign In Error:', error);
            toast.error(error.message);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;
            console.log('Facebook Sign In Success:', user);
            toast.success('Successfully signed in with Facebook!');
            navigate('/');
        } catch (error) {
            console.error('Facebook Sign In Error:', error);
            toast.error(error.message);
        }
    };

    return (
        <div className='gap-4 grid'>
            <h1 className='font-bold'>Login with Social Media</h1>
            <div className='grid gap-2'>
                <button 
                    onClick={handleFacebookSignIn}
                    className="btn btn-outline btn-primary w-full"
                >
                    <FaSquareFacebook /> Login with Facebook
                </button>
                <button 
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline btn-secondary w-full"
                >
                    <FaGoogle /> Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;