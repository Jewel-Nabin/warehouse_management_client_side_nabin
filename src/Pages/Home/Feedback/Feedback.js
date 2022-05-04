import React from 'react';
import './Feedback.css';

import feedback1 from '../../../images/feedback/testimonial_img1.jpg';
import feedback2 from '../../../images/feedback/testimonial_img2.jpg';
import feedback3 from '../../../images/feedback/testimonial_img3.jpg';

import { Carousel } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div>
            <h2>I am Feedback.</h2>
            <div className='div-style'>
                <Carousel className='carousel-style'>
                    <Carousel.Item className='carousel-style' interval={1000}>
                        <div>
                            <img
                                className="d-block img-style"
                                src={feedback1}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-style' interval={500}>
                        <div>
                            <img
                                className="d-block img-style"
                                src={feedback2}
                                alt="Second slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-style'>
                        <div>
                            <img
                                className="d-block img-style"
                                src={feedback3}
                                alt="Third slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Feedback;