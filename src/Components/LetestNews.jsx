import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-gray-300 my-5'>
            <p className='text-base-100 bg-secondary px-0'>Latest</p>
            <Marquee pauseOnHover={true} speed={50}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo possimus  sint architecto atque voluptatem laboriosam iure quibusdam nulla voluptate alias ipsam officiis itaque molestias, accusamus consequatur, perferendis reiciendis vel rerum!</p>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;