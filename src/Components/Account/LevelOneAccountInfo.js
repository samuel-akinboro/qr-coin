import React from 'react';
import { useHistory } from 'react-router-dom';
import "./account.css";
import Layout from '../Layout/index'


export const LevelOneAccountInfo = (props) => {
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
                                    <h5>Level 1: account information</h5>
                                    <p>Please provide the information required to continue with your account verification and upgrade.</p>
                                </div>
                                <div className="setup-body">
                                    <form onSubmit={() => { }} className="body-form">
                                        <label htmlFor="name">Name*</label>
                                        <input type="text" name="name" className="body-form-input" placeholder="Qucoon Limited" />
                                        <label htmlFor="address">Address</label>
                                        <input type="text" name="address" className="body-form-input" />
                                        <label htmlFor="citizenship">Citizenship</label>
                                        <input type="text" name="citizenship" className="body-form-input" />
                                        <label htmlFor="dob">D.O.B</label>
                                        <input type="text" name="dob" className="body-form-input" />
                                        <label htmlFor="bvn">Bvn</label>
                                        <input type="text" name="bvn" className="body-form-input" />
                                        <div className="btn-wrapper">
                                            <div className="cancel-back-btn" onClick={() => history.goBack()}>CANCEL</div>
                                            <input type="submit" value="VERIFY" className="submit-form-2-btn" />
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
