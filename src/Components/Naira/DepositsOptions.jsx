import React from 'react'
import bankImg from '../../Assets/bank (1).svg';
import cardImg from '../../Assets/card.svg';

export default function DepositsOptions() {
    return (
        <div>
            <div className="deposit-option-header">
                <h1>Deposit Naira</h1>
                <p>You can fund your wallet using any of the option below</p>

            </div>
            <div className="deposit-options-wrap">

                <div className="deposit-header-1">

                    <img src={bankImg} alt="Bank" />

                    <div className="payment-sytem">
                        <h1>Bank Transfer virtual account</h1>
                        <p>Fund your wallet using any of the options
                                  available with Paystack.</p>
                    </div>

                </div>

                <div className="deposit-option-body-1">
                    <h5>Bank Transfer virtual Account</h5>
                    <p>To deposit funds into your wallet, please fill out the fields below and click 'Pay'. You will be redirected to the Rave payment view to complete your payment.</p>

                    <div className="enter-ammount-ngn">
                        <span>NGN</span>
                        <input type="text" name="address" placeholder="4000" />
                    </div>
                    <div className="bottom-desc-text">The amount must be between NGN 400.00 and NGN 10,000,000.00</div>
                    <div className="send-wthdraw-btn">
                        <button className="upgrade-limit-btn-1">Upgrade Your Limits</button>
                        <button className="pay-now-btn">Pay</button>
                    </div>
                </div>

                <div className="deposit-header-1">

                    <img src={cardImg} alt="Card" />

                    <div className="payment-sytem">
                        <h1>Card Payment with Flutter wave</h1>
                        <p>Fund your wallet using any of the options
                                  available with Paystack.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
