import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsDetails = ({ news }) => {
    const { title, author, thumbnail_url, details, rating, total_view, tags = [] } = news;

    // Format the date from ISO to display format
    const formatDate = (isoDate) => {
        if (!isoDate) return '';
        const date = new Date(isoDate);
        return date.toISOString().split('T')[0];
    };

    // Format tags for display
    const formattedTags = tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Author and share section */}
                <div className="flex items-center justify-between p-6 bg-gray-50">
                    <div className="flex items-center gap-4">
                        <img
                            src={author?.img}
                            alt={author?.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-800">{author?.name}</h4>
                            <p className="text-sm text-gray-500">{formatDate(author?.published_date)}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-gray-500 hover:text-gray-700">
                            <FaRegBookmark />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                            <FaShareAlt />
                        </button>
                    </div>
                </div>

                {/* Title section */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
                </div>

                {/* Featured image */}
                <div className="w-full">
                    <img
                        src={thumbnail_url}
                        alt={title}
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                {/* Content section */}
                <div className="p-6">
                    <div className="prose max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed">{details}</p>
                    </div>

                    {/* Tags section */}
                    <div className="mt-6">
                        <p className="text-sm text-gray-600">
                            Tags: {formattedTags}
                        </p>
                    </div>

                    {/* Rating and views section */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={i < Math.floor(rating?.number || 0) ? "text-orange-400" : "text-gray-300"}
                                />
                            ))}
                            <span className="text-gray-700">{rating?.number}</span>
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
            </div>
        </div>
    );
};

export default NewsDetails;


// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

// // Format the date from ISO to display format
// const formatDate = (isoDate) => {
//   if (!isoDate) return '';
//   const date = new Date(isoDate);
//   return date.toISOString().split('T')[0];
// };

// const DetailsNews = () => {
//   const news = useLoaderData();
  
//   // Handle case where news data is not available
//   if (!news) {
//     return <div className="text-center py-10">News article not found</div>;
//   }
  
//   const {
//     title,
//     author,
//     tags = [],
//     thumbnail_url,
//     details,
//     rating,
//     total_view
//   } = news;

//   // Format tags for display
//   const formattedTags = tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ');

//   return (
//     <div className="bg-white rounded-md shadow-md overflow-hidden">
//       {/* Author and share section */}
//       <h1 className="text-2xl font-bold text-gray-800 p-4 border-b">News Details</h1>
      
//       <div className="flex items-center justify-between p-4 bg-gray-50">
//         <div className="flex items-center gap-3">
//           <img
//             src={author?.img}
//             alt={author?.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h4 className="font-semibold text-gray-800">{author?.name}</h4>
//             <p className="text-sm text-gray-500">{formatDate(author?.published_date)}</p>
//           </div>
//         </div>
//         <div className="flex gap-3">
//           <button className="text-gray-500 hover:text-gray-700">
//             <FaRegBookmark />
//           </button>
//           <button className="text-gray-500 hover:text-gray-700">
//             <FaShareAlt />
//           </button>
//         </div>
//       </div>

//       {/* Title section */}
//       <div className="p-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
//       </div>

//       {/* Image section */}
//       <img
//         src={thumbnail_url}
//         alt={title}
//         className="w-full h-80 object-cover"
//       />

//       {/* Full Content section */}
//       <div className="p-6">
//         <div className="text-gray-700 mb-6 leading-relaxed">
//           {details}
//         </div>

//         <div className="text-sm text-gray-600 mt-6 pb-4 border-b">
//           <p>
//             {formatDate(author?.published_date)} | Tag Cloud Tags:
//             {' '}{formattedTags}
//           </p>
//         </div>
//       </div>

//       {/* Rating section */}
//       <div className="p-4 flex items-center justify-between bg-gray-50">
//         <div className="flex items-center">
//           {[...Array(5)].map((_, i) => (
//             <FaStar
//               key={i}
//               className={i < Math.floor(rating?.number || 0) ? "text-orange-400" : "text-gray-300"}
//             />
//           ))}
//           <span className="ml-2 text-gray-700">{rating?.number}</span>
//         </div>
//         <div className="flex items-center gap-2 text-gray-700">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           <span>{total_view}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsNews;