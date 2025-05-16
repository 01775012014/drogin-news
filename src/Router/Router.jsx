import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../Components/Pages/CategoryNews';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';
import AuthLayout from '../layouts/AuthLayout';


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
                path: "news",
                element: <h2>Hello world. This is news section.</h2>
            },
            {
                path: "category/:id",
                element: <CategoryNews />,
                loader: async () => {
                    const response = await fetch("/demo-data/news.json");
                    if (!response.ok) {
                        throw new Error(`Failed to load news: ${response.status}`);
                    }
                    const data = await response.json();
                    return data;
                },
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element: <h2>404 - Page not found</h2>
    }
]);

export default router;