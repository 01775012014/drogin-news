import React from 'react';
import Header from '../Components/Header';
import About from '../Components/Pages/About';
import Navbar from '../Components/Navbar';

const AboutOurNews = () => {
    return (
        <div>
            <header className='py-3'>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto'>
                <About />
            </main>
        </div>
    );
};

export default AboutOurNews;