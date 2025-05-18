import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

// Format the date from ISO to display format
const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0];
};

// NewsCard component to display individual news items
const NewsCard = ({ news }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    title,
    author,
    tags = [],
    thumbnail_url,
    details,
    rating,
    total_view,
    id
  } = news;

  // Format tags for display
  const formattedTags = tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ');

  // Get first paragraph of details as preview
  const previewText = details ? details.substring(0, 200) + "..." : "";

  const handleReadMore = (e) => {
    e.preventDefault();
    if (user) {
      navigate(`/NewsDetails/${id}`);
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden mb-4">      {/* Author and share section */}
      <h1 className="text-xl font-bold text-gray-800 mb-4">News Details</h1>
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{author?.name}</h4>
            <p className="text-sm text-gray-500">{formatDate(author?.published_date)}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <FaRegBookmark />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      </div>

      {/* Image section */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Content and tags section */}
      <div className="p-4">
        <div className="text-gray-700 mb-4">
          <p>{previewText}</p>
          <div className="mt-4">
            <button 
              onClick={handleReadMore}
              className="text-orange-500 hover:underline cursor-pointer"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-3">
          <p>
            {formatDate(author?.published_date)} | Tag Cloud Tags:
            {' '}{formattedTags}
          </p>
        </div>
      </div>

      {/* Rating section */}
      <div className="p-4 flex items-center justify-between border-t border-gray-100">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(rating?.number || 0) ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-gray-700">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (!data) {
      console.error('No data received from loader');
      return;
    }

    try {
      let filteredNews = [];
      const numericId = parseInt(id);

      if (id === "0") {
        filteredNews = data;
      } else if (id === "1") {
        filteredNews = data.filter(
          (news) => news.others?.is_today_pick === true
        );
      } else if (!isNaN(numericId)) {
        filteredNews = data.filter((news) => news.category_id === numericId);
      }

      console.log('Filtered News:', filteredNews);
      setCategoryNews(filteredNews);
    } catch (error) {
      console.error('Error filtering news:', error);
      setCategoryNews([]);
    }
  }, [data, id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {categoryNews.length === 0 ? (
        <p className="text-center text-gray-500">No news found for this category</p>
      ) : (
        categoryNews.map((news) => (
          <NewsCard key={news._id || news.id} news={news} />
        ))
      )}
    </div>
  );
};

export default CategoryNews;



