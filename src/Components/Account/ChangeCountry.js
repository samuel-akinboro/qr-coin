import React from 'react';
import { useHistory } from 'react-router-dom';
import "./account.css";
import Layout from '../Layout/index'


export const ChangeCountry = (props) => {
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
                                    <h5>Change your Country</h5>
                                    <p>Please, note that the country you select determines which local currency wallet you can operate with your QCoin account as well as the verification document you might asked to provide.</p>
                                </div>
                                <div className="setup-body">
                                    <form onSubmit={() => { }} className="body-form">
                                        <label htmlFor="country">Country</label>
                                        <div className="body-form-input">
                                            <select name="" id="">
                                                <option value="Nigeris">Nigeria</option>
                                                <option value="Ghana">Ghana</option>
                                            </select>
                                        </div>
                                        <div className="btn-wrapper">
                                            <button className="submit-form-2-btn">Change Country</button>
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
