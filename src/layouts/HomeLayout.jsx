import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LetestNews';
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom';
import LeftAside from '../Components/homLayout/LeftAside.jsx';
import RightAside from '../Components/homLayout/RightAside.jsx'

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
                <Header />
                <section className=' items-center justify-center'>
                    <LatestNews />
                </section>
               
                <Navbar />
               

            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-4'>
                
               <aside className='col-span-3'>
                <LeftAside />
               </aside>
                <section className='main col-span-6'>
                    <Outlet />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;