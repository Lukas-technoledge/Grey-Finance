import React from 'react'
import './Nav.css'
import logo from '../images/logo.png';
import flag from '../images/NigeriaFlag.svg';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Nav() {
  return (
    <div>
      <nav>
        <img className='logoImg' src={logo} alt='logo'/>
        <div className="navButtons">
            <button className='hamburger'><MenuIcon /></button>
            <div className="hamburgerAlt">
                <div className="hamburgerAlt__left">
                    <p className='products'>Products <KeyboardArrowDownIcon /></p>
                    <p className='hamburgerAlt__left--link'><a href="">Help Center</a></p>
                    <p className='hamburgerAlt__left--link'><a href="">Blog</a></p>
                </div>
                <div className="hamburgerAlt__right">
                    <a className='login' href=""> Login</a>
                    <a className='freeAccount' href="">Create a free account</a>
                </div>
            </div>
            <div className="Identification">
                <img className='flag' src={flag} alt="flag" />
                <KeyboardArrowDownIcon />
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
