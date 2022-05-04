import React from 'react';

import feedback1 from '../../../images/feedback/testimonial_img1.jpg';
import feedback2 from '../../../images/feedback/testimonial_img2.jpg';
import feedback3 from '../../../images/feedback/testimonial_img3.jpg';

const Testimonial = () => {
    return (
        <div>
            <h5>Testimonial</h5>
            <div>
                <div>
                    <img src={feedback1} alt="" />
                    <h5>Name: Jewel Nabin</h5>
                    <h6>Comment...</h6>
                </div>
                <div>
                    <img src={feedback2} alt="" />
                    <h5>Name: Jewel Nabin</h5>
                    <h6>Comment...</h6>
                </div>
                <div>
                    <img src={feedback3} alt="" />
                    <h5>Name: Jewel Nabin</h5>
                    <h6>Comment...</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;