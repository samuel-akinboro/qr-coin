import React from 'react'
import './modals.css';
import check from '../../Assets/tick (1).png';
import Navbar from '../Home/Navbar';

export const PasswordRsetSuccess = (props) => {
    let BrowserRoter = props.history.push
    return (
        <div>
            <div className="nav-wrap">
                <Navbar />
            </div>
            <div className="modal-page">
                <div className="modal-wrapper">
                    <img src={check} alt="success" className="img-lock" />
                    <div className="text-top">Success</div>
                    <div className="message-lower">Your password has been reset</div>
                    <button onClick={() => BrowserRoter("/login")} className="btn-forgot-pwd">Continue</button>
                </div>
            </div>
        </div>
    )
}
