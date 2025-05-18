import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const Home = () => {
    const { allNews } = useLoaderData();

    return (
        <div className="space-y-6 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-3">Latest News</h2>
            <div className="grid grid-cols-1 gap-8">
                {allNews?.map((news) => (
                    <div key={news._id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                        {/* Card Header with Author Info */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <div className="flex items-center space-x-3">
                                {news.author?.img && (
                                    <img 
                                        src={news.author.img} 
                                        alt={news.author.name} 
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                )}
                                <div>
                                    <h4 className="font-semibold text-gray-800">{news.author?.name || "Unknown Author"}</h4>
                                    <p className="text-sm text-gray-500">
                                        {news.author?.published_date ? 
                                            new Date(news.author.published_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            }) : ""}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <button className="text-gray-600 hover:text-blue-500">
                                    <FaRegBookmark />
                                </button>
                                <button className="text-gray-600 hover:text-green-500">
                                    <FaShareAlt />
                                </button>
                            </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="md:flex">
                            <div className="md:w-2/5">
                                <img
                                    src={news.image_url}
                                    alt={news.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5 md:w-3/5">
                                <div className="mb-2">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                                        {news.category?.name || news.tags?.[0] || 'Uncategorized'}
                                    </span>
                                    {news.rating?.badge && (
                                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                            {news.rating.badge}
                                        </span>
                                    )}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600">
                                    {news.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4">
                                    {news.details?.length > 150
                                        ? `${news.details.slice(0, 150)}...`
                                        : news.details}
                                </p>
                                
                                {/* Card Footer */}
                                <div className="flex justify-between items-center mt-4 pt-3 border-t">
                                    <div className="flex items-center">
                                        <div className="flex text-yellow-400 mr-2">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                    key={i}
                                                    className={i < (news.rating?.number || 0) ? "text-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-600">{news.rating?.number || 0}</span>
                                    </div>
                                    
                                    <div className="flex items-center text-gray-600">
                                        <FaEye className="mr-1" />
                                        <span>{news.total_view || 0}</span>
                                    </div>
                                    
                                    <Link
                                        to={`/NewsDetails/${news._id || news.id}`}
                                        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;