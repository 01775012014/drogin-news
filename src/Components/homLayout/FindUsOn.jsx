import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUsOn = () => {
    return (
        <div className='bg-gray-300 p-6 rounded-lg shadow-md'>
            <h1 className='text-xl font-bold text-gray-800 mb-4'>Find Us On</h1>
            <div className="flex flex-col gap-3">
                <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-700"
                >
                    <FaFacebook className="text-2xl text-blue-600 group-hover:text-white" />
                    <span className="font-medium">Facebook</span>
                </a>
                
                <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-700"
                >
                    <FaTwitter className="text-2xl text-blue-400 group-hover:text-white" />
                    <span className="font-medium">Twitter</span>
                </a>
                
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-700"
                >
                    <FaSquareInstagram className="text-2xl text-pink-600 group-hover:text-white" />
                    <span className="font-medium">Instagram</span>
                </a>
                
                <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-700"
                >
                    <FaLinkedin className="text-2xl text-blue-700 group-hover:text-white" />
                    <span className="font-medium">LinkedIn</span>
                </a>
            </div>
        </div>
    );
};

export default FindUsOn;