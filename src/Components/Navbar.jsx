import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-5'></div>
                <div className='flex items-center justify-center'>
                    <nav className='flex gap-5 justify-center'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                </div>
                <div className=' flex justify-end gap-3'>
                    <img src={user} alt="User" />
                    <Link to="/auth/login" className='p-5 btn btn-primary'>Login</Link>
                </div>

            </div>
           


        </div>

    );
};

export default Navbar;