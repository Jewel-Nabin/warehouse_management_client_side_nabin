import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;