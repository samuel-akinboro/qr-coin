import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { NavBar } from '../Home/NavBar';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Home/Navbar';
import image from '../../Assets/Group 53.png';

// style in index.css
function Signup() {
    return (
        <div className="sigup-page">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="main-content-body-wrap">
                <div className="container-box">
                    <img src={image} alt="Signup image" className="lock-imgage" />
                    <div className="title-text">Sign Up</div>
                    <div className="form-container">
                        <form className="form-main" onSubmit={() => { }}>
                            <input placeholder="Username" onChange={() => { }} className="input" />
                            <input placeholder="Email address" onChange={() => { }} className="input" />
                            <div className="password-wrapper">
                                <input placeholder="Password" onChange={() => { }} className="password" />
                                <FontAwesomeIcon icon={faEye} size="xs" />
                            </div>
                            <div className="password-wrapper">
                                <input placeholder="Confirm Password" onChange={() => { }} className="password" />
                                <FontAwesomeIcon icon={faEye} size="xs" />
                            </div>
                            <input placeholder="Referal Code (Optional)" onChange={() => { }} className="input" />
                            <Link to="/q_coin_naira"><input type="submit" value="Sign Up" className="btn-submit input" /></Link> 
                        </form>
                    </div>
                    <div className="form-bottom">
                        <div>Alredy have an account</div>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
