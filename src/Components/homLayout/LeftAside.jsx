import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div><span className="loading loading-dots loading-xl"></span></div>}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;