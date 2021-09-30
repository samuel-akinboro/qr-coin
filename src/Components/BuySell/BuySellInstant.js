import React, { useState } from 'react';
import './buysell.css';
import Layout from '../Layout/index';
import { useHistory } from 'react-router-dom';


const BuySell = (props) => {

    const history = useHistory();
    const [buySellBtn, setBuySellBtn] = useState({
        buy: true,
        sell: false,
    })
    const toBuy = () => {
        setBuySellBtn({
            buy: true,
            sell: false,
        })
    }
    const toSell = () => {
        setBuySellBtn({
            buy: false,
            sell: true,
        })
    }

    return (

        <div>
            <div className="buy-sell-header">
                <h5>Buy or Sell Instantly</h5>
                <p>A simple way to buy or sell cryptocurrency in less than a minute</p>
            </div>
            <div className="buy-sell-btn-container">
                <button
                    onClick={() => toBuy()}
                    className="button-toggle button-buy"
                    style={{
                        backgroundColor: buySellBtn.buy ? "#ffb500" : "#fff",
                        color: buySellBtn.buy ? "#fff" : ""
                    }}
                >Buy</button>
                <button
                    onClick={() => toSell()}
                    className="button-toggle button-buy"
                    style={{
                        backgroundColor: buySellBtn.sell ? "#ffb500" : "#fff",
                        color: buySellBtn.sell ? "#fff" : ""
                    }}
                    className="button-toggle button-sell"
                > Sell</button>
            </div>
            <div className="buy-sell-input-container">
                <div className="input-left-hand-side">
                    <h6>Currency to Buy</h6>
                    <div className="input-select">
                        <select name="" id="">
                            <option value="">Select wallet</option>
                        </select>
                    </div>
                </div>
                <div className="input-right-hand-side">
                    <h6>Buy with</h6>
                    <div className="input-select">
                        <select name="" id="">
                            <option value="">Select wallet</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="buy-sell-amount-container">
                <div>
                    <h6>Amount to spend</h6>
                    <div className="input-feild-1">
                        <div className="currency-holder">NGN</div>
                        <input name="amount" className="amount-holder" placeholder="Amount" />
                    </div>
                    <div className="description">
                        <h6>Minimum amount: NGN100.00</h6>
                        <h6>Balance: NGN0.00</h6>
                    </div>
                </div>
            </div>
            <div className="input-note">
                <input name="buysellnote" placeholder="Note (Optional)" />
            </div>
            <div className="submit-btn">
                <button onClick={() => history.push("/transaction_success")}>Continue</button>
            </div>
        </div>

    )
}
export default BuySell
