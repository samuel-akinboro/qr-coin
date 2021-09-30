import React from 'react'
import './modals.css';
import imgEmail from '../../Assets/Group 11335.png';
import Navbar from '../Home/Navbar';

export const ConfirmEmail = () => {
    return (
        <div>
            <div className="nav-wrap">
                <Navbar />
            </div>
            <div className="modal-page">
                <div className="modal-wrapper">
                    <img src={imgEmail} alt="Email confirmation" className="img-confirm-email" />
                    <div className="text-top">Follow the link we sent to</div>
                    <div className="text-email">orofin2010@yahoo.com</div>
                    <div className="message-lower">Check your spam folder if you don't see the email immediately</div>
                    <button className="btn-okay">I'VE CONFIRMED MY EMAIL</button>
                    <div className="btn-lower">RESEND EMAIL</div>
                </div>
            </div>
        </div>
    )
}
