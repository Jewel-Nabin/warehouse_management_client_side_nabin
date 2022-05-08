import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <PageTitle title={"Not Found"}></PageTitle>
            <p className='big-font'>404</p>
            <h2>OOPS! PAGE NOT FOUND</h2>
            <Link to={'/home'}>
                <button className='go-back'>GO BACK TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default NotFound; 