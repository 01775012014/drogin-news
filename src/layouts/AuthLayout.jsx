import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className="auth-layout w-11/12 mx-auto my-3  grid  gap-4 ">
            <header className='bg-amber-50 justify-center'>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
           
        </div>
    );
};

export default AuthLayout;