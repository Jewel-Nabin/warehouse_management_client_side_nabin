import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import carousel1 from '../../../images/carousel/carousel-1.jpg';
import carousel2 from '../../../images/carousel/carousel-2.jpg';
import carousel3 from '../../../images/carousel/carousel-3.jpg';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-style-banner"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Beautiful Earrings</h3>
                        <p>Varitey High Demand Just For A Queen.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 img-style-banner"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Sapphire Crystal </h3>
                        <p>Ring Solitaire Princess</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style-banner"
                        src={carousel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Women's Tatty Devine Necklaces</h3>
                        <p>Created to honor the rich potential in every woman, Tiffany Keys are a vibrant symbol of all that is possible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;