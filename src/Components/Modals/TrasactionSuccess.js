import React from 'react'
import './modals.css';
import check from '../../Assets/tick (1).png';
import Navbar from '../Home/Navbar';

export const TransactionSuccess = (props) => {
    const BrowserRouter = props.history;
    return (
        <div>
            <div className="nav-wrap">
                <Navbar />
            </div>
            <div className="modal-page">
                <div className="modal-wrapper">
                    <img src={check} alt="success" className="img-lock" />
                    <div className="text-top">Transaction successful</div>
                    <div className="message-lower">Your wallet has been funded with <strong>N400,000.00</strong></div>
                    <div className="message-lower msg-bal">Your new balance is <strong>N500,000.00</strong></div>
                    <button onClick={() => BrowserRouter.goBack()} className="btn-forgot-pwd">Back to dashboard</button>
                </div>
            </div>
        </div>
    )
}
