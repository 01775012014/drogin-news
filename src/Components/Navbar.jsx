import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';
import { CiLogout } from "react-icons/ci";
import ProfileModal from './ProfileModal';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleLogOut = () => {
        console.log("user trying to logout.");

        logout().then(() => {
            alert("you logout successfully.");
            navigate('/auth/login');
        }).catch((error) => {
            console.log(error);
        });
    }

    const toggleProfileModal = () => {
        setIsProfileModalOpen(!isProfileModalOpen);
    };

    return (
        <div>
            <div className='flex justify-between items-center bg-gray-200'>
                <div>

                </div>
                <div className='flex items-center justify-center'>
                    <nav className='flex gap-5 justify-center'>
                        <NavLink to="/" className="">Home</NavLink>
                        <NavLink to="/about" className="">About</NavLink>
                        <NavLink to="/contact" className="">Contact</NavLink>
                    </nav>
                </div>
                
                <div className='flex justify-end gap-3 items-center'>
                    {user ? (
                        <>
                            <div 
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={toggleProfileModal}
                            >
                                {user.photoURL ? (
                                    <img 
                                        src={user.photoURL} 
                                        alt="User" 
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <img 
                                        src={userIcon} 
                                        alt="User" 
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                )}
                            </div>
                            <button className='p-5 btn btn-primary' onClick={handleLogOut}>
                                <CiLogout /> LogOut
                            </button>
                        </>
                    ) : (
                        <Link to="/auth/login" className='p-5 btn btn-primary'>
                            <CiLogout /> Login
                        </Link>
                    )}
                </div>
            </div>

            {/* Profile Modal */}
            <ProfileModal 
                user={user} 
                isOpen={isProfileModalOpen} 
                onClose={() => setIsProfileModalOpen(false)} 
            />
        </div>
    );
};

export default Navbar;