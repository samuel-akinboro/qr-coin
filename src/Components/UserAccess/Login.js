import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Home/Navbar';
import image from '../../Assets/Group 53.png';

// style in index.css
function Login() {
    const history = useHistory()
    return (
        <div className="sigup-page">
            <div className="nav-container">
                <Navbar />
            </div>
            <div style={{height:"100vh"}} className="main-content-body-wrap">
                <div className="container-box">
                    <img src={image} alt="Signup lock" className="lock-imgage" />
                    <div className="title-text">Sign In</div>
                    <div className="form-container">
                        <form className="form-main" onSubmit={() => history.push("/")}>
                            <input placeholder="Username" onChange={() => { }} className="input" />
                            <div className="password-wrapper">
                                <input type="password" placeholder="Password" onChange={() => { }} className="password" />
                                <FontAwesomeIcon icon={faEye} size="xs" />
                            </div>
                            <div className="forgot-password">
                                <Link to="/forgot_password">Forgot password</Link>
                            </div>
                            <Link to="/q_coin_naira"> <input type="submit" value="Sign In" className="btn-submit input" /></Link>
                        </form>
                    </div>
                    <div className="form-bottom">
                        <div>Don't have an account</div>
                        <Link to="/sign_up">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

