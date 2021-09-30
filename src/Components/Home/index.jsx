import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroText'
import About from './aboutSection'
import { Footer } from './Footer'
export default function Index() {
    return (
        <React.Fragment>

            <div className="hero-section">
                <Navbar />
                <HeroSection />
            </div>
            <div className="app-home-page-wrap">
                <div className="about-QCOIN-home">
                    <h1 className="k68s">WHY <span> QCOIN?</span></h1>

                    <About />

                    <h1 className="k68s utl87">User Friendly, Made Specially For
                    <br />
                    You!
</h1>

                </div>

                



            </div>
            <div className="footer-image-sec">
            </div>
            <div>
                
                <Footer />
            </div>



        </React.Fragment>
    )
}
