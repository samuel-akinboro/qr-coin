import React from 'react'
import fancyImg from '../../Assets/img1.png'
import img2 from '../../Assets/img2.svg'
import img3 from '../../Assets/img3.svg'
import img4 from '../../Assets/img4.svg'
export default function AboutSection() {
    return (
        <div>

           

            <div className="about-grid-sec-home reverse-grid-responsive1">

                <div className="about-grid-col1">
                    <h1>Open An Account In Less Than 
                    5minutes</h1>

                    <p>QCoin harnesses the power of cryptocurrency to create 
                    alternative solutions to financial infrastructure, digital 
                    payments and global E-commerce.Simple put, we’re making 
                    cryptocurrency cool again!</p>

                </div>

                <div className="about-grid-col2 responsive-img1">
                    <img src={img2} alt=""/>
                </div>

            </div>

            <div className="fancy-circle-img-home">
                <img style={{left:"0",bottom:"49px"}} src={fancyImg} alt=""/>
            </div>

            

            <div className="about-grid-sec-home reverse-grid-responsive2">


                <div className="about-grid-col2 responsive-img2">
                    <img src={img3} alt=""/>
                </div>

                <div className="about-grid-col1">
                    <h1>Secure Wallets To Store Your 
                        Crypto Assets </h1>

                    <p>QCoin harnesses the power of cryptocurrency to create 
alternative solutions to financial infrastructure, digital 
payments and global E-commerce.Simple put, we’re making 
cryptocurrency cool again!</p>

                </div>

            </div>

           
            <div className="fancy-circle-img-home">
            <img style={{right:"0",bottom:"49px"}} src={fancyImg} alt=""/>
            </div>



                        <div className="about-grid-sec-home reverse-grid-responsive3">

            <div className="about-grid-col1">
                <h1>Instant Exchange/ Payouts To 
Your Bank Account </h1>

                <p>QCoin harnesses the power of cryptocurrency to create 
alternative solutions to financial infrastructure, digital 
payments and global E-commerce.Simple put, we’re making 
cryptocurrency cool again!</p>

            </div>

            <div className="about-grid-col2 responsive-img3">
                <img src={img4} alt=""/>
            </div>

            </div>

            <div className="fancy-circle-img-home">
            <img style={{left:"0",bottom:"49px"}} src={fancyImg} alt=""/>
            </div>



            
            
        </div>
    )
}
