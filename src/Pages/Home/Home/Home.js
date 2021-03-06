import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Newsletter from '../Newsletter/Newsletter';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;