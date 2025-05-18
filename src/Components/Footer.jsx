import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">About Us</h3>
                        <p className="text-gray-600">
                            Your trusted source for the latest news and updates. We bring you accurate, timely, and engaging content from around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/auth/login" className="text-gray-600 hover:text-orange-500 transition-colors">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Info</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                                <FaPhone className="text-orange-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <FaEnvelope className="text-orange-500" />
                                <span>info@newsplatform.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <FaMapMarkerAlt className="text-orange-500" />
                                <span>123 News Street, Media City</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} News Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 