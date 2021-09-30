import React from 'react';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Layout/Navbar';
import "./account.css";
import barCode from '../../Assets/barCode.png';
import refresh from '../../Assets/refresh.png';
import Layout from '../Layout/index'
import { useHistory } from 'react-router-dom';

export const TwoFactorAuth = (props) => {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    const navigate = useHistory();
    return (
        <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
            <div className="accouts-1">

                <div className="main-content-body">
                    <div className="account-container-box">
                        <div className="inner-container-box-2">
                            <div className="two-fa-body">
                                <div className="account-title-top">
                                    <h5>Two-factor Authentication</h5>
                                    <p>Please crovide the information required to continue with your account verification and upgrade.</p>
                                </div>
                                <div className="setup-body">
                                    <div className="items-steps">
                                        <h6>Step 1: Install an Authenticator App</h6>
                                        <p>Download and install a two-factor authentication app on your smart phone. We recommend Google Authenticator or Authy.</p>
                                        <div className="icon-marketplace">
                                            <FontAwesomeIcon icon={faAppleAlt} size="1x" />
                                            <span>iPhone IOS</span>
                                            <FontAwesomeIcon icon={faAppleAlt} size="1x" />
                                            <span>ANDROID</span>
                                        </div>
                                    </div>

                                    <div className="items-steps">
                                        <h6>Step 2: Scan the QR code</h6>
                                        <p>Open the Authenticator app on your device and either scan the QR code provided, or manually enter the secret code.</p>
                                        <div className="img-image">
                                            <img src={barCode} alt="barcode" />
                                        </div>
                                        <div className="token-wrapper">
                                            <input type="text" name="barcode" />
                                            <div>
                                                <button className="button-action">
                                                    <img src={refresh} alt="refresh" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="items-steps">
                                        <h6>Step 3: Verify and Enable 2FA</h6>
                                        <p>Fill in the unique code displayed on the Google Authenticaor App on your phone to enable the Two Factor Authentication.</p>
                                        <div className="form-single-container">
                                            <form onSubmit={() => { }} className="body-form">
                                                <label htmlFor="auth-code">Authentication Code*</label>
                                                <input type="text" name="auth-code" className="body-form-input" />
                                                <div className="btn-wrapper">
                                                    <div className="cancel-back-btn" onClick={() => navigate.goBack()}>Cancel</div>
                                                    <input type="submit" value="Enable 2FA" className="submit-form-2-btn" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Layout>
    )
}
