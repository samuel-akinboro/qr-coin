import React from 'react'
import './modals.css';
import imgLock from '../../Assets/password (1).png';
import Navbar from '../Home/Navbar';

export const ForgotPassword = () => {
    return (
        <div>
            <div className="nav-wrap">
                <Navbar />
            </div>
            <div className="modal-page">
                <div className="modal-wrapper">
                    <img src={imgLock} alt="Email confirmation" className="img-lock" />
                    <div className="text-top">FORGOT YOUR PASSWORD?</div>
                    <div className="message-lower">Let's help you get right back in.</div>
                    <input name="forgotpasswordemail" type="email" placeholder="Email Address" className="input-text-field" />
                    <button className="btn-forgot-pwd">Continue</button>
                </div>
            </div>
        </div>
    )
}
