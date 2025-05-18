import React from 'react';
import { FaEnvelope, FaUser, FaCalendarAlt } from 'react-icons/fa';

const ProfileModal = ({ user, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Profile Details</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <img
                            src={user.photoURL || userIcon}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{user.displayName || 'User'}</h3>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <FaUser className="text-gray-500" />
                        <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="text-gray-800">{user.displayName || 'Not provided'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-gray-500" />
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-gray-800">{user.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-gray-500" />
                        <div>
                            <p className="text-sm text-gray-500">Account Created</p>
                            <p className="text-gray-800">
                                {user.metadata?.creationTime 
                                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                                    : 'Not available'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Last Sign In: {user.metadata?.lastSignInTime 
                            ? new Date(user.metadata.lastSignInTime).toLocaleString()
                            : 'Not available'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal; 