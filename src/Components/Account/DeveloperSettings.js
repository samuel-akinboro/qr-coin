import React from 'react';
import "./account.css";
import Layout from '../Layout/index';
import imgLogo from '../../Assets/Group 11336.png';
import imgCopy from '../../Assets/copy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSync } from '@fortawesome/free-solid-svg-icons';


export const DeveloperSettings = (props) => {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    return (
        <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
            <div className="accouts-1">

                <div className="main-content-body">
                    <div className="account-container-box-grp3">
                        <div className="inner-container-box-grp3">
                            <div className="account-title-grp3">
                                <h5>Developer Settings</h5>
                                <p>Manage your API keys and webhooks configuration. <br />
                                    To learn more about integrating with QCoin, visit our QCoin <br />
                                    Developer API Documentation.</p>
                            </div>
                        </div>

                        <div className="top-wrapper-2">

                            <div className="inner-lower-box-grp3">
                                <div>
                                    <div className="account-title-top dev-top">
                                        <h5>Developer Settings</h5>
                                        <div className="dev-button">
                                            <FontAwesomeIcon icon={faSync} size="1x" color="#fff" />
                                            <div>Generate new keys</div>
                                        </div>
                                    </div>
                                    <div className="dev-setup-body">
                                        <h6>Secret Key</h6>
                                        <p>This key should be kept confidential and only stored on your own server. This key can perform any API request to QCoin without restriction</p>
                                        <div className="token-wrapper dev-secret">
                                            <input type="text" name="secretkey" value="3PSTkurestTyrufnvy6MNYhYreF69KS2" />
                                            <div>
                                                <button className="button-action">
                                                    <img src={imgCopy} alt="copy" />
                                                </button>
                                            </div>
                                        </div>

                                        <h6>Public Key</h6>
                                        <p>Identifies your account with QCoin. It can safely be published in public code.</p>
                                        <div className="token-wrapper">
                                            <input type="text" name="secretkey" value="3PSTkurestTyrufnvy6MNYhYreF69KS2" />
                                            <div>
                                                <button className="button-action">
                                                    <img src={imgCopy} alt="copy" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="inner-lower-box-grp3">
                                <div>
                                    <div className="account-title-top dev-top">
                                        <h5>Developer Settings</h5>
                                        <div className="dev-button">
                                            <FontAwesomeIcon icon={faCheck} size="1x" color="#fff" />
                                            <div>Save Changes</div>
                                        </div>
                                    </div>
                                    <div className="dev-setup-body">
                                        <input type="checkbox" name="webhook" value="webhooks" className="webhook-check" />
                                        <label htmlFor="webhook">Enable webhooks</label>
                                        <p>You can learn more about configuring Webhooks for your application in our Webhook Reference Guide</p>
                                        <div className="dev-link">
                                            <h6>Callback URL</h6>
                                            <div className="token-wrapper">
                                                <input type="text" name="secretkey" placeholder="Callback url" />
                                            </div>
                                        </div>

                                        <div className="dev-link">
                                            <h6>Signature Type</h6>
                                            <div className="token-wrapper">
                                                <select name="" id="">
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="dev-link">
                                            <h6>Signature Secret</h6>
                                            <div className="token-wrapper">
                                                <input type="text" name="secretkey" />
                                            </div>
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
