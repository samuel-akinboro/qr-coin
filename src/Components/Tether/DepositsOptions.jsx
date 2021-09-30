import React from 'react'
import Barcode from '../../Assets/barCode.png'
import refresh from '../../Assets/refresh.png'
import copy from '../../Assets/copy.png'
export default function DepositsOptions() {
    return (
        <div>
                 <div className="deposit-option-header">
                               <h1>Receive Tether</h1>
                               <p>To fund your Qcoin wallet from other wallet services or exchanges:</p>
                               <p>1. Copy and paste your Qcoin wallet address shown below or 
                                  scan the QR code.</p>

                           </div>

                        <div className="digitalMoneyBarcode">
                            <img style={{width:"80%",height:"80%"}} src={Barcode} alt=""/>
                        </div>

                        <div className="digitalMoneyUsefulLink">
                            <input placeholder="eg, 3PSTxamyHv1PxC5EMSmXtJoKwAhA7eu6h2" type="text"/>

                            <div className="digitalMoneyUsefulLink-img">
                            <img src={copy} alt=""/><img src={refresh} alt=""/>
                            </div> 
                            
                        </div>

                        <div className="deposit-option-header">
                        
                               <p>2. Fill in the amount you want to deposit, confirm and send.</p>
                               <p>3. Once you complete sending, you can check the status of your 
    new deposit below.</p>

                           </div>


        </div>
    )
}
