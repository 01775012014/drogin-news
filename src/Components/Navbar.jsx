import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';
import { CiLogout } from "react-icons/ci";
import ProfileModal from './ProfileModal';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleLogOut = () => {
        console.log("user trying to logout.");

        logout().then(() => {
            toast.success("You have been logged out successfully.");
            navigate('/auth/login');
        }).catch((error) => {
            console.log(error);
            toast.error("Failed to logout. Please try again.");
        });
    }

    const toggleProfileModal = () => {
        setIsProfileModalOpen(!isProfileModalOpen);
    };

    const handleProtectedRoute = (e) => {
        if (!user) {
            e.preventDefault();
            toast.error("Please login to access this page");
            navigate('/auth/login');
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center bg-gray-200 px-6 py-2'>
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                       
                        <div className="hidden md:block">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                                News Portal
                            </h1>
                            <p className="text-sm text-gray-600">Your Daily News Source</p>
                        </div>
                    </Link>
                </div>

                <div className='flex items-center justify-center'>
                    <nav className='flex gap-5 justify-center'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "text-orange-500 font-semibold" : "text-gray-600 hover:text-orange-500"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            onClick={handleProtectedRoute}
                            className={({ isActive }) => 
                                isActive ? "text-orange-500 font-semibold" : "text-gray-600 hover:text-orange-500"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            onClick={handleProtectedRoute}
                            className={({ isActive }) => 
                                isActive ? "text-orange-500 font-semibold" : "text-gray-600 hover:text-orange-500"
                            }
                        >
                            Contact
                        </NavLink>
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
                                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
                                    />
                                ) : (
                                    <img 
                                        src={userIcon} 
                                        alt="User" 
                                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
                                    />
                                )}
                            </div>
                            <button 
                                className='px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors' 
                                onClick={handleLogOut}
                            >
                                <CiLogout className="inline mr-2" /> Logout
                            </button>
                        </>
                    ) : (
                        <Link 
                            to="/auth/login" 
                            className='px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors'
                        >
                            <CiLogout className="inline mr-2" /> Login
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