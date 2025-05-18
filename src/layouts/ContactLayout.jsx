import React from 'react';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Pages/Contact';

const ContactLayout = () => {
    return (
        <div>
            <header className='py-3'>
                <Navbar />
            </header>
            <main className='w-11/12 mx-auto'>
                <Contact />
            </main>
        </div>
    );
};

export default ContactLayout; 