import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../Components/Pages/CategoryNews';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import NewsDetailsPage from '../layouts/NewsDetails';
import PrivateRoute from '../Provider/PrivateRoute';
import NewsDetails from '../Components/DetailsNews';
import About from '../Components/Pages/About';
import AboutOurNews from '../layouts/AboutOurNews';
import ContactLayout from '../layouts/ContactLayout';
import Home from '../Components/Pages/Home';

// Load all news data
const loadNewsData = async () => {
    const response = await fetch("/demo-data/news.json");
    if (!response.ok) {
        throw new Error(`Failed to load news: ${response.status}`);
    }
    return response.json();
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    const data = await loadNewsData();
                    return { allNews: data };
                },
            },
            {
                path: "category/:id",
                element: <CategoryNews />,
                loader: async () => {
                    const data = await loadNewsData();
                    return data;
                },
            }
        ]
    },
    {
        path: "about",
        element: <AboutOurNews />
    },
    {
        path: "contact",
        element: <ContactLayout />
    },
    {
        path: "NewsDetails/:id",
        element: <PrivateRoute>
            <NewsDetailsPage />
        </PrivateRoute>,
        loader: async ({ params }) => {
            const allNews = await loadNewsData();
            const news = allNews.find(item => item._id === params.id || item.id === params.id);
            if (!news) {
                throw new Error('News not found');
            }
            return { news, allNews };
        },
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
            },
        ]
    },
    {
        path: "*",
        element: <h2>404 - Page not found</h2>
    }
]);

export default router;