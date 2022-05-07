import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <p className='big-font'>404</p>
            <h2>OOPS! PAGE NOT FOUND</h2>
            <button className='go-back'>GO BACK TO HOMEPAGE</button>
        </div>
    );
};

export default NotFound; 