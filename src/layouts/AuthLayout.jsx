import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <div className="auth-layout w-11/12 mx-auto my-3  grid  gap-4 ">
                <header className='bg-amber-50 justify-center'>
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
            
           
            </div>
            <footer className='w-full '>
                <Footer/>
            </footer>

        </div>
        
    );
};

export default AuthLayout;