import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className='container d-flex'>
                <div className='row'>
                    <p>INFORMATION</p>
                    <p><small>About Us</small></p>
                    <p><small>Delivery Information</small></p>
                    <p><small>Privacy Policy</small></p>
                    <p><small>Terms & Conditions</small></p>
                </div>
                <div className='row'>
                    <p><small> &copy; {year} Jewels Sparkles all Rights Reserved. </small></p>
                    <div className='me-5'>
                        <FaFacebookF className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} />
                    </div>

                    <div className='me-5'>
                        <FaTwitter className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} />
                    </div>

                    <div className='me-5'>
                        <FaLinkedinIn className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} />
                    </div>

                    <div className='me-5'>
                        <FaPinterestP className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p>CONTACT US</p>
                        <p><small>Nabin Tower, Boalkhli, Chattogram</small></p>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p><small>+88 0179000000</small></p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p><small>jewelnabin@gmail.com</small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;