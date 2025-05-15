import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../Components/Pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            
            {
                path: "home",
                element: <h2>Hello world.</h2>
            },
            {
                path: "auth",
                element: <h2>Hello world. This is authentication layout.</h2>
            },
            {
                path: "news",
                element: <h2>Hello world. This is news section.</h2>
            },
            {
                path: "*",
                element: <h2>404 - Page not found</h2>
            },
            {
                path: '/category/:id',
                element: <CategoryNews />
            }
        
        ]
    }
]);

export default router;