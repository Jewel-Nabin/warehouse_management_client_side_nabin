import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div>
            <h2>Newsletter</h2>
            <div className='container'>
                <div className='row d-flex news-letter'>
                        <div className='col-8  news-bg'>
                            <h3 className='text-white'>Hurry</h3>
                            <h4 className='text-white'>Discount Jewellery over 60%off</h4>
                            <p className='text-white'>Rings, Pendants, Earrings and Jewels</p>
                            <button>Shop Now</button>
                        </div>
                        <div className='col-4 subscribe'>
                            <h2>Newsletter</h2>
                        <p>Accessories your outfit with the season collection of jewellery from the Uniqness.</p>
                        <form action="">
                            <input type="email" name="email" placeholder='Email' id="" />
                            <button type="submit">Subscribe</button>
                        </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Newsletter;