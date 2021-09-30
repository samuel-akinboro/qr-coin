import React from 'react';
import { useHistory } from 'react-router-dom';
import "./account.css";
import Layout from '../Layout/index'


export const LevelOnePersonalInfo = (props) => {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    const history = useHistory();
    return (
        <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
            <div className="accouts-1">

                <div className="main-content-body">
                    <div className="account-container-box">
                        <div className="inner-container-box-2">
                            <div>
                                <div className="account-title-top">
                                    <h5>Level 1: Personal Information</h5>
                                    <p>Please provide the information required to continue with your account verification and upgrade.</p>
                                    <p>On completing this account verification level, you will enjoy highertransation limits on Quidax as detailed below.</p>
                                </div>
                                <div className="limit-wrapper">
                                    <div className="limit-content">
                                        <div>All-time Deposit Limit</div>
                                        <p>NGN 0.00</p>
                                    </div>
                                    <div className="limit-content">
                                        <div>All-time Withdrawal Limit</div>
                                        <p>NGN 0.00</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="body-form">
                                        <div className="limit-btn-wrapper">
                                            <div className="cancel-back-btn" onClick={() => history.goBack()}>BACK</div>
                                            <button className="submit-form-2-btn" onClick={() => BrowserRoter("/level_1_account_info")}>Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Layout >
    )
}
