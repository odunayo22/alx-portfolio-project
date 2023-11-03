import React from 'react';
import './Footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {IoLogoTwitter } from 'react-icons/io';

const Footer = () =>{
    return(
        <footer>
            <a href="#" className='footer__logo'>OdunBabs</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#abou">About</a></li>
                <li><a href="#experienc">Experience</a></li>
                <li><a href="#services-serv">Services</a></li>
                <li><a href="#portfoli">Portfolio</a></li>
                <li><a href="#testimonia">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FiInstagram /></a>
                <a href="https://twitter.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; OdunBabs. All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer;