import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='gap-4 grid'>
            <h1 className='font-bold'>Login with Social Media</h1>
            <div className='grid gap-2'>
                <button className="btn btn-outline btn-primary w-full"> <FaSquareFacebook />Login with Facebook</button>
                <button className="btn btn-outline btn-secondary w-full"> <FaGoogle />Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;