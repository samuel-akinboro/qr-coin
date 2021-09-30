import React from 'react'
import './modals.css';
import check from '../../Assets/tick (1).png';
import Navbar from '../Home/Navbar';

export const EmmailAddressVerified = () => {
    return (
        <div>
            <div className="nav-wrap">
                <Navbar />
            </div>
            <div className="modal-page">
                <div className="modal-wrapper">
                    <img src={check} alt="success" className="img-lock" />
                    <div className="text-top">THANK YOU</div>
                    <div className="message-lower">Your email address has been verified</div>
                    <button className="btn-forgot-pwd">Continue</button>
                </div>
            </div>
        </div>
    )
}
