import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const CategoryPromise = fetch("/public/demo-data/categories.json").then((res)=> res.json());

const Categories = () => {
    const categories = use(CategoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories </h2>

            <div className='grid grid-cols-1 my-5 gap-2 bg-white'>
                {categories.map((category)=>
                <NavLink key={category.id} className={"btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-accent"}
                to={`/category/${category.id}`}>
                    {category.name}</NavLink>)}
            </div>

        </div>
    );
};

export default Categories;