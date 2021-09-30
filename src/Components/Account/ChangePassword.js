import React from 'react';
import { useHistory } from 'react-router-dom';
import "./account.css";
import Layout from '../Layout/index'


export const ChangePassword = (props) => {
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
                                    <h5>Change Your Password</h5>
                                </div>
                                <div className="setup-body">
                                    <form onSubmit={() => BrowserRoter("/password_reset_success")} className="body-form">
                                        <label htmlFor="oldpassword">Old Password</label>
                                        <input type="text" name="oldpassword" className="body-form-input" />
                                        <label htmlFor="password">Password*</label>
                                        <input type="text" name="password" className="body-form-input" placeholder="Please set your account password" />
                                        <label htmlFor="confirmpassword">Confirm Password*</label>
                                        <input type="text" name="confirmpassword" className="body-form-input" placeholder="Confirm your password" />
                                        <div className="btn-wrapper">
                                            <div className="cancel-back-btn" onClick={() => history.goBack()}>BACK</div>
                                            <input type="submit" value="Change password" className="submit-form-2-btn" />
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
