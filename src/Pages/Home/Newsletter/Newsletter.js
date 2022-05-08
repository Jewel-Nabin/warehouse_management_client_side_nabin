import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div>
            <h2 style={{ color: 'gray' }}>Newsletter</h2>
            <div className='news-letter'>
                <h4>LATEST FROM SPARKLE!</h4>
                <p>Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</p>
                <form action="">
                    <input className='border-bottom' style={{ border: 'none', padding: '0', background: 'none', outline: 'none' }} type="email" name="email" placeholder='Email' id="" />
                    <button className='border-bottom' style={{ border: 'none', backgroundColor: '#282624', color: 'white' }} type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;