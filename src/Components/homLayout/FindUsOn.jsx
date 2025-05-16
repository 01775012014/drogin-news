import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div className='grid gap-5 '>
            <h1 className='font-bold '>Find Us On</h1>
            <div className="join join-vertical w-full">

            <button className="btn join-item"><FaFacebook />Facebook</button>
            <button className="btn join-item"><FaTwitter />Twitter</button>
            <button className="btn join-item"><FaSquareInstagram />Instragram</button>
            <button className="btn join-item"><FaLinkedin />Lindin</button>
        </div>

        </div>

        
    );
};

export default FindUsOn;