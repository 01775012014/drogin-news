import React from 'react';
import Header from '../Components/Header';
import DetailsNews from '../Components/DetailsNews';
import RightAside from '../Components/homLayout/RightAside';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const NewsDetailsPage = () => {
    const { news, allNews } = useLoaderData();
    
    // Get related news (excluding current news)
    const relatedNews = allNews
        .filter(item => item.category_id === news.category_id && item._id !== news._id)
        .slice(0, 3);

    return (
        <div>
            <header className='py-3'>
                
                <Header></Header>
            </header>
            
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
            
                <section className='col-span-9'>
                <h1 className=' font-bold text-3xl'>News Details Page: </h1>
                    <DetailsNews news={news} />

                </section>
                <section className='col-span-3'>
                    <RightAside />
                </section>
                
            </main>
        </div>
    );
};

export default NewsDetailsPage;

