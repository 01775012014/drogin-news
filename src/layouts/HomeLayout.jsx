import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LetestNews';
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom';
import LeftAside from '../Components/homLayout/LeftAside.jsx';

const HomeLayout = () => {
    return (
        <div>
            <header className=' w-11/12 flex flex-col '>
                <Header />
                <section className=' items-center justify-center'>
                    <LatestNews />
                </section>
               
                    <Navbar />
               

            </header>
            <main>
                
               <aside>
                <LeftAside></LeftAside>
               </aside>
                <section className='main'>
                    <Outlet />
                    

                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;