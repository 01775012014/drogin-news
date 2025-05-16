import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='grid gap-10'>
            <SocialLogin />
            <FindUsOn />
            <Qzone />
        </div>
    );
};

export default RightAside;