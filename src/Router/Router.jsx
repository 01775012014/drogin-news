import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

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
            }
        ]
    }
]);

export default router;