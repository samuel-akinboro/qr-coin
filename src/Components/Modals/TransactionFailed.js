import React from 'react'
import './modals.css';
import unsuccess from '../../Assets/tick (1).png';
import Navbar from '../Home/Navbar';

export const TransactionFailed = () => {
    return (
        <div>
            <div className="nav-wrap">
                <Navbar />
            </div>
            <div className="modal-page">
                <div className="modal-wrapper">
                    <img src={unsuccess} alt="success" className="img-lock" />
                    <div className="text-top">Transaction not successful</div>
                    <div className="message-lower">There was an error and your transaction could not be completed</div>
                    <button className="btn-forgot-pwd">Back to dashboard</button>
                </div>
            </div>
        </div>
    )
}
