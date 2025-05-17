import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const handleLogOut=()=> {
        console.log("user trying to logout.");

        logout().then(()=>{
            alert("you logout successfully.");
            navigate('/auth/login');
        }).catch((error)=>{
            console.log(error);

        });
    }
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-5'> {user && user.email}</div>
                <div className='flex items-center justify-center'>
                    <nav className='flex gap-5 justify-center'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                </div> 
                <div className=' flex justify-end gap-3'>
                    <img src={userIcon} alt="User" />
                    {user ? (<button className='p-5 btn btn-primary' onClick={handleLogOut}>LogOut</button>): (<Link to="/auth/login" className='p-5 btn btn-primary'>Login</Link>)}
                    
                </div>

            </div>
           


        </div>

    );
};

export default Navbar;