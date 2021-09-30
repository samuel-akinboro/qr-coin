import React from 'react'
import { useHistory } from 'react-router-dom'
import arrowRight from '../../Assets/arrow-left.png'

export default function HeroText() {

    const history = useHistory();
    return (
        <div className="hero-text">
            <div className="hero-col-one">

                <h1>BUY, Bitcoin, ETHEREUM and
                OTHER CRYPTO IN NIGERIA</h1>

                <p>Easily buy, sell & trade different cryptocurrencies</p>

                <button onClick={() => history.push("/sign_up")}>Create A Free Account</button>

            </div>

            <div className="hero-col-two">

                <div className="home-input-wrap">
                    <label>Send</label>
                    <div>

                        <select name="" id="">
                            <option value="">Bitcoin</option>
                        </select>

                        <input placeholder="125.00 USD" type="text" />
                    </div>
                </div>

                <div className="home-input-wrap">
                    <label>Get</label>
                    <div>

                        <select name="" id="">
                            <option value="">Bitcoin</option>
                        </select>

                        <input placeholder="125.00 USD" type="text" />
                    </div>
                </div>

                <div className="submit-home">
                    <button>Exchange Now <img src={arrowRight} alt="" /></button>
                </div>


            </div>

        </div>
    )
}
