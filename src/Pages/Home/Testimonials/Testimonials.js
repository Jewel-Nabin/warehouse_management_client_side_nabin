import React from 'react';
import './Testimonials.css';

import feedback1 from '../../../images/feedback/testimonial_img1.jpg';
import feedback2 from '../../../images/feedback/testimonial_img2.jpg';
import feedback3 from '../../../images/feedback/testimonial_img3.jpg';

import { Carousel } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <div className='testimonials mt-5'>
            <h2 style={{color: 'gray'}}>Testimonials</h2>
            <div className='div-style'>
                <Carousel controls={false} className='carousel-style'>
                    <Carousel.Item className='carousel-style' interval={2000}>
                        <div>
                            <img
                                className="d-block img-style-feedback"
                                src={feedback1}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h4 style={{color: 'gray'}}>Dimoni Gatheva</h4>
                            <p style={{color: 'gray'}}>"I was thrilled to find that, through Di Moda online store, I could locate some night-wear that had disappeared from stores in Melborne, Australia. Although my order was for one item only, it arrived amazingly promptly on my doorstep."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-style' interval={2000}>
                        <div>
                            <img
                                className="d-block img-style-feedback"
                                src={feedback2}
                                alt="Second slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h4 style={{color: 'gray'}}>John Doe</h4>
                            <p style={{color: 'gray'}}>"The staff in the store was very helpful and easy going My experiencd was fun and relaxed - which isn't always the case when shopping for bras and underwear. I will definitely come back again! Also, the lady's knowledge and expertise was appre.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-style' interval={2000}>
                        <div>
                            <img
                                className="d-block img-style-feedback"
                                src={feedback3}
                                alt="Third slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h4 style={{color: 'gray'}}>Mr. Haris</h4>
                            <p style={{color: 'gray'}}>"Wonderful professionalism and close consumer contact. Very knowledgeable service and left with a smile knowing I gave buisiness to the right person, the right store leaving with arms full of the perfect products form me. Thank you for such a memorable."</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;