import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='header flex justify-center items-center flex-col gap-4'>
            <img className='[350px]' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
            <p>{format(new Date(), 'EEE , MMMM MM ,yyyy')} </p>
            <div className='flex gap-2 b-2 bg-gray-200 p-4 items-center '>
                <button className='btn  bg-red-500 text-white'>Click me</button>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

            </div>
            
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                            <a>Parent</a>
                            
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                        </div>
                        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            
                        </li>
                        <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    
                    <div className="dropdown dropdown-end flex gap-4">
                        <div className="navbar-end">
                        <a className="btn">Button</a>
                        </div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        
    );
};

export default Header;