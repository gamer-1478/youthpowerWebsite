import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function NavigationBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src='/logo.png' alt='logo' height={'80px'}/> Samanvay
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a
                            href='/#aboutme' className='nav-links' onClick={() => { closeMobileMenu() }}>
                            About Us
                        </a>
                    </li >

                    <li className='nav-item'>
                        <Link
                            to='/team' className='nav-links' onClick={closeMobileMenu}>
                            Our Team
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link
                            to='/activities' className='nav-links' onClick={closeMobileMenu}>
                            Blog/Activities
                        </Link>
                    </li>
                </ul>
                <div className='button-show-mobile'>
                    <button className='btn--primary--black' offset='80' onClick={() => rederto('/login')}>Conact Us</button>
                </div>
            </div>
        </nav>
    )
}

function rederto(path) {
    window.location.href = path;
}

export default NavigationBar;
