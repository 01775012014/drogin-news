import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='header flex justify-center items-center flex-col gap-4'>
            <img className='[350px]' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
            <p>{format(new Date(), 'EEE , MMMM MM ,yyyy')} </p>
            
                
            </div>

        
    );
};

export default Header;