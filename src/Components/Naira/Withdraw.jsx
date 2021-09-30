import React from 'react'
import plusIcon from '../../Assets/plus.png'
export default function Withdraw() {
    return (
        <div>

            <div className="withdraw-wrap">
                <div className="withdraw-header">
                    <span className="widrawTitle">Withdraw Naira</span>
                    <span className="widrawPlus"><img src={plusIcon} alt=""/> Add Account</span>
                </div>

                <div className="withdraw-info">
                        <p>Select the account to withdraw the funds to. Enter the amount 
                        and submit.</p>

                    </div>
                    <form>
                        <div className="input-withdraw-wrap">
                           <select name="" id="">
                               <option value="">Select bank account</option>
                           </select>
                        </div>

                        <div className="input-withdraw-wrap">
                           
                               <input placeholder="Amount" type="text"/>
                               <div className="amount-withdraw-wrap">
                            <span>Minimum amount: NGN 100.00</span>
                            <span>Balance: NGN 0.00</span>
                        </div>
                          
                        </div>


                        <div className="input-withdraw-wrap">
                          
                               <input placeholder="Note (optional)" type="text"/>
                         
                        </div>

                        <div className="wthdraw-btn">
                            <button>Submit</button>
                        </div>

                    </form>

            </div>
            
        </div>
    )
}
