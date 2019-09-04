import React from 'react';
import logo from './logo.png';
import './Nav.css';

function Nav() {
    return (
        <div className='logo'>
            <img src={logo} className="z-index: 2;" alt="logo" />
        </div>
    )
}
export default Nav;