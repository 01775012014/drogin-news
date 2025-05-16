import React from 'react';
import playground from '../../assets/playground.png';
import classRoom from '../../assets/classRom.png';
import swimming from '../../assets/swimming.png';

const Qzone = () => {
    return (
        <div className='grid gap-5 bg-gray-100'>
            <h1 className='font-bold pt-4'>Qzone</h1>
            <div className="join join-vertical w-full grid gap-8">

                <button ><img src={playground} alt="Playground" /></button>
                <button ><img src={classRoom} alt="Class Room" /></button>
                <button ><img src={swimming} alt="Swimming" /></button>
            </div>

        </div>
    );
};

export default Qzone;