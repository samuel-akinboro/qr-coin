import React from 'react';
import Navbar from '../Layout/Navbar';
import "./account.css"
import imgEmail from '../../Assets/email (2).png';
import mobilePhone from '../../Assets/mobile-phone.png';
import tick from '../../Assets/tick (1).png';
import upgradeImg from '../../Assets/Group 12820.png';
import phoneLockImg from '../../Assets/Path 62352.png';
import usernameImg from '../../Assets/Group 12819.png';
import passwoordLockImg from '../../Assets/015---Locked-Payment.png';
import countryImg from '../../Assets/Path 62343.png';
import code from '../../Assets/code.png';
import { useHistory } from 'react-router-dom';
import Layout from '../Layout/index'

function MyAccount(props) {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    const history = useHistory()

    return (
        <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
            <div className="accouts-1">

                <div className="main-content-body">
                    <div className="account-container-box">
                        <div className="inner-container-box">
                            <div className="account-header">
                                <div className="header-container">
                                    <div className="heading">
                                        <h5>My account</h5>
                                    </div>
                                    <div >
                                        <p>Manage your Q Coin  account</p>
                                    </div>
                                    <div className="header-message">
                                        <div>To secure your account and assets, we strongly that you enable Two Factor Autentication</div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-body">
                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={imgEmail} alt="Email" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Email Activation</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Your email address has been verified and your account is activated</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left">
                                                <img src={tick} className="img-lower" alt="" />
                                                <div className="lower-img-label">activated</div>
                                            </div>
                                            <div className="user-contact">
                                                <p>tephanie.okafor@qucoon.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={mobilePhone} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Phone Number</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Your phone number has been successfully verified</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left">
                                                <img src={tick} className="img-lower" alt="" />
                                                <div className="lower-img-label">verified</div>
                                            </div>
                                            <div className="user-contact">
                                                <p>Verified number: 070****0185</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={upgradeImg} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Upgrade your Account</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Verify your identity information and documents in compliance wit regulations and enjoy higher transaction limits on your account.</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left btn-btn">
                                                <button onClick={() => BrowserRoter("/level_1_personal_info")} className="account-btn">Verify level 1: Individual account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={phoneLockImg} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Two-factor Authentication</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Enabling Two-factor Authentication on your accounr protects you attackers and possible compromise of your account</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left btn-btn">
                                                <button onClick={() => history.push("/two_factor_auth")} className="account-btn">Enable 2FA</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={usernameImg} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Username</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Update your username so we can easily identify you here, and on platforms outside of Q Coin </p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left btn-btn">
                                                <button onClick={() => BrowserRoter("/change_username")} className="account-btn">Change username</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={passwoordLockImg} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Password</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Ensure your password is secure enough by using a mixture small and capital letter, characters and numbers</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left btn-btn">
                                                <button onClick={() => history.push("/change_password")} className="account-btn">Change password</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={countryImg} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Country</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Manage the country from which you wish to operate your Q Coin account</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left btn-btn">
                                                <button onClick={() => BrowserRoter("/change_country")} className="account-btn">Change country</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="account-body-item">
                                    <div className="image-container-left">
                                        <img src={code} alt="Phone" className="img-email" />
                                    </div>
                                    <div className="body-item-container">
                                        <div className="label-container item-right">
                                            <h5>Developer Settings</h5>
                                        </div>
                                        <div className="text-container item-right">
                                            <p>Manage API keys and webhook configuration</p>
                                        </div>
                                        <div className="item-lower-content item-right">
                                            <div className="lower-left btn-btn">
                                                <button onClick={() => BrowserRoter("/developer_settings")} className="account-btn">Manage</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyAccount;

