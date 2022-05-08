import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div style={{ backgroundColor: '#FFF2E9'}} className='footer'>
                <div className='row '>
                    <p className='fw-bold'>INFORMATION</p>
                    <a href="#" className='link-style'>About Us</a>
                    <a href="#" className='link-style'>Delivery Information</a>
                    <a href="#" className='link-style'>Privacy Policy</a>
                    <a href="#" className='link-style'>Terms & Conditions</a>
                </div>
                <div className='row'>
                    <p>&copy; {year} Jewels Sparkles all Rights Reserved.</p>
                    <div className='me-5'>
                        <a href="#" className='link-style'><FaFacebookF className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} /></a>
                    </div>

                    <div className='me-5'>
                        <a href="#" className='link-style'><FaTwitter className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} /></a>
                    </div>

                    <div className='me-5'>
                        <a href="#" className='link-style'><FaLinkedinIn className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} /></a>
                    </div>

                    <div className='me-5'>
                        <a href="#" className='link-style'><FaPinterestP className='inline-block p-7 rounded-full w-20 mx-auto' style={{ background: "#FFFFFF", color: "#272121", fontSize: "1.2em" }} /></a>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p className='fw-bold'>CONTACT US</p>
                        <a href="#" className='link-style'>Nabin Tower, Boalkhli, Chattogram</a>
                    </div>
                    <div>
                        <p>Phone</p>
                        <a href="#" className='link-style'>+88 0179000000</a>
                    </div>
                    <div>
                        <p>Email</p>
                        <a href="#" className='link-style'>jewelnabin@gmail.com</a>
                    </div>
                    <a href="#"><button className='btn border-0 fixed-bottom'><BsArrowUpSquareFill style={{color: 'orange'}} /></button></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;