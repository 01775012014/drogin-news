import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet />
                    

                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;