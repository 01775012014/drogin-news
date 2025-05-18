import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const { allNews } = useLoaderData();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
            <div className="grid grid-cols-1  gap-6">
                {allNews?.map((news) => (
                    <div key={news._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={news.image_url}
                            alt={news.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {news.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {news.details?.length > 150
                                    ? `${news.details.slice(0, 150)}...`
                                    : news.details}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">
                                    {news.category?.name || 'Uncategorized'}
                                </span>
                                <Link
                                    to={`/NewsDetails/${news._id}`}
                                    className="text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;