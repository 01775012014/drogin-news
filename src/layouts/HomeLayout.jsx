import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LetestNews';
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom';
import LeftAside from '../Components/homLayout/LeftAside.jsx';
import RightAside from '../Components/homLayout/RightAside.jsx'
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className='w-11/12 mx-auto my-3'>
                <Header />
                <section className=' items-center justify-center'>
                    <LatestNews />
                </section>
                <Navbar />
               

            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-4'>
                
               <aside className='col-span-2 sticky top-4 self-start'>
                <LeftAside />
               </aside>
                <section className='main col-span-7'>
                    <Outlet />
                </section>
                <aside className='col-span-3 sticky top-0  h-fit '>
                    <RightAside />
                </aside>
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;