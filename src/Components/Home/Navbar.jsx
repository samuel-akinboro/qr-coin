import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../Assets/logo-white.svg'

export default function Navbar() {

  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState(true)

  const clickedMenu = () => {
    setShowMenu(!showMenu);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
    return () => {
      //
    }
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className="home-nav">

      <Link to="/" className="logo-home-wrap">
        <img style={{transform:"scale(0.7)",    position:" relative",
    top: "-13px"
}} src={Logo} alt="" />
      </Link>

      {(showMenu || button) && <div className="home-nav-ceter-links">
        <ul>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Company
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Rates
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Learn
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>
        </ul>
      </div>}

      {(showMenu || button) && <div className="access-home">
        <button onClick={() => history.push("/login")}>Sign in</button>
        <button onClick={() => history.push("/sign_up")}>Create Account</button>
      </div>}


      <div className="mobile-icon">
        {showMenu ? <FontAwesomeIcon onClick={() => clickedMenu()} icon={faTimes} size="2x" color="#fff" /> :
          <FontAwesomeIcon onClick={() => clickedMenu()} icon={faBars} size="2x" color="#fff" />}
      </div>
    </div>
  )
}
