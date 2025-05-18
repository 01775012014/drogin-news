import React from 'react';
import { FaNewspaper, FaUsers, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container w-11/12  my-3 mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our News Platform</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Your trusted source for accurate, timely, and comprehensive news coverage from around the world.
                </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        To deliver unbiased, fact-based news that empowers our readers to make informed decisions and stay connected with the world around them.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600">
                        To be the most trusted and comprehensive news platform, fostering an informed and engaged global community.
                    </p>
                </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaNewspaper className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Latest News</h3>
                    <p className="text-gray-600">Real-time updates on breaking news and current events</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaUsers className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Community</h3>
                    <p className="text-gray-600">Engage with a diverse community of readers and writers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaGlobe className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                    <p className="text-gray-600">Comprehensive coverage of international news and events</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Fact-Checked</h3>
                    <p className="text-gray-600">Rigorous fact-checking and verification process</p>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Team</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop" 
                            alt="Editor in Chief" 
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                        <p className="text-gray-600">Editor in Chief</p>
                    </div>
                    <div className="text-center">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" 
                            alt="Senior Reporter" 
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                        <p className="text-gray-600">Senior Reporter</p>
                    </div>
                    <div className="text-center">
                        <img 
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop" 
                            alt="News Director" 
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                        <p className="text-gray-600">News Director</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get in Touch</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-gray-600 text-center mb-6">
                        Have questions, suggestions, or want to contribute? We'd love to hear from you.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="text-center">
                            <h3 className="font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-600">contact@newsplatform.com</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-semibold mb-2">Follow Us</h3>
                            <div className="flex justify-center gap-4">
                                <a href="#" className="text-gray-600 hover:text-orange-500">Twitter</a>
                                <a href="#" className="text-gray-600 hover:text-orange-500">Facebook</a>
                                <a href="#" className="text-gray-600 hover:text-orange-500">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 