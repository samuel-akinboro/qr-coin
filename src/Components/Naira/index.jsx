import React, { useState } from 'react'
import Layout from '../Layout/index'
import WithdrawIcon from '../../Assets/withdraw.png'
import bankImg from '../../Assets/bank (1).svg';
import cardImg from '../../Assets/card.svg';
import cartImg from '../../Assets/cart (2).svg'
import DepositOptions from './DepositsOptions'
import Withdraw from './Withdraw'
import BuySell from '../BuySell/BuySellInstant'
import ChatIcon from '../Modals/ChatIcon';
export default function Index(props) {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname

    const [activeTab, setActiveTab] = useState("Deposit")
    const [hideBal, setHideBal] = useState(false)
    return (
        <div>
            <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
                <div className="content-wrap-action-box">

                    <div className="logs-3-col-box">

                        <div className="log-box-one">
                            <div className="account-balance-container">
                                <div className="acc-bal-col1">
                                    <p className="acc-bal-7yhgu">Naira Wallet Balance</p>
                                    {
                                        hideBal === true ? "" : <h4 className="acc-bal-7yu">50,558.00 <span>NGN</span></h4>
                                    }

                                    <div className="toggle-hide-showAcc">
                                        <span>Hide Balance</span> <input onClick={() => setHideBal(!hideBal)} type="checkbox" />
                                    </div>
                                </div>

                            </div>
                            <div className="action-images-naira">
                                <div onClick={() => setActiveTab("Deposit")} className={`imgWrap-naira ${activeTab === "Deposit" ? "imgWrap-naira-active" : ""}`}>
                                    <img src={cardImg} />
                                    <span>Deposit</span>
                                </div>

                                <div onClick={() => setActiveTab("Withdraw")} className={`imgWrap-naira ${activeTab === "Withdraw" ? "imgWrap-naira-active" : ""}`}>
                                    <img src={bankImg} />
                                    <span>Withdraw</span>
                                </div>

                                <div onClick={() => setActiveTab("Buy/Sell")} className={`imgWrap-naira ${activeTab === "Buy/Sell" ? "imgWrap-naira-active" : ""}`}>
                                    <img src={cartImg} />
                                    <span>Buy/Sell</span>
                                </div>



                            </div>


                        </div>


                    </div>


                    <div className="data-view-col-box">
                        <div className="log-box-two">
                            <div className="acc-bal-col1">
                                {activeTab === "Deposit" ? <DepositOptions /> : ""}
                                {activeTab === "Withdraw" ? <Withdraw /> : ""}
                                {activeTab === "Buy/Sell" ? <BuySell /> : ""}


                            </div>

                        </div>
                        <div className="log-box-three">

                            <div className="withdraw-header-transations">
                                <span className="widrawTitle">NGN DEPOSIT HISTORY</span>
                                <span className="widrawPlus">View More</span>
                            </div>

                            {
                                [...'1234'].map((data) => {
                                    return (
                                        <div className="withdraw-transations-body">

                                            <div className="tr-icon">
                                                <img src={cardImg} alt="" />
                                            </div>

                                            <div className="withdraw-details">
                                                <div className="rugw6">

                                                    <div className="tr-amount655">
                                                        <h1>Deposit</h1>
                                                        <p>Nov 3, 12:34 PM</p>
                                                    </div>

                                                    <div className="tr-amount">
                                                        <h1>₦4,490.00</h1>
                                                    </div>

                                                </div>

                                                <div className="hr-line-transations"></div>

                                            </div>

                                        </div>

                                    )
                                })
                            }
                            <div className="chat-box">
                                <ChatIcon />
                            </div>



                        </div>

                    </div>
                </div>
            </Layout>

        </div>
    )
}
