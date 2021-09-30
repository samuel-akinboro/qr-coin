import { faAddressBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo-white.svg';
import facebook from '../../Assets/facebook.png';
import youtube from '../../Assets/youtube.png';
import instagram from '../../Assets/instagram.png';
import twitter from '../../Assets/twitter.png';
export const Footer = () => {
    return (
        <div className="app-footer">
            <div className="logo-footer">
            <img style={{
                width:"120px"
}} src={Logo} alt="" />
            </div>
            <div className="footer-info">
                <div className="footer-address">
                    4A, Idowu Olaitan Street, Gbagada
                </div>
                <div className="footer-links">
                    <Link to="#">Blog</Link>
                    <Link to="#">API</Link>
                    <Link to="#">Terms of use</Link>
                    <Link to="#">Privacy policy</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">FAQ</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <div>Get In Touch</div>
                <div className="footer-socials">
                <Link to="#" ><FontAwesomeIcon size="2x" color="#fff"/><img src={youtube} alt=""/></Link>
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff"/> <img src={facebook} alt=""/> </Link>
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff"/><img src={instagram} alt=""/></Link>
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff"/><img src={twitter} alt=""/></Link>
                </div>
            </div>
        </div>
    )
}
