import React from 'react';
import "./account.css";
import Layout from '../Layout/index';
import imgLogo from '../../Assets/Group 11336.png';


export const ChangeUsername = (props) => {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    return (
        <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
            <div className="accouts-1">

                <div className="main-content-body">
                    <div className="account-container-box">
                        <div className="inner-container-box-2">
                            <div>
                                <div className="account-title-top">
                                    <h5>Change your username</h5>
                                    <p>Please, note that the username you provide will have a Q
                                    attached as a first letter when it is saved on our database.
                                        This means that if you provide John, your username becomes QJohn</p>
                                </div>
                                <div className="setup-body">
                                    <form onSubmit={() => { }} className="body-form">
                                        <label htmlFor="username">Username</label>
                                        <div className="body-form-input input-row-2">
                                            <img src={imgLogo} alt="Qcoin" />
                                            <input type="text" name="username" className="body-form-2" placeholder="Stephokafor" />
                                        </div>
                                        <div className="btn-wrapper">
                                            <button className="submit-form-2-btn">Change Username</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Layout>
    )
}
