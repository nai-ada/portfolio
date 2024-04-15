import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = () => {
    return <header>
        <div className="container">
            <div className="wrapper">
                <div className="menu-icon">
                    <Link to='/'>HAMBRG.</Link>
                </div>
                <div className="menu">
                    <button>Menu</button>
                </div>
            </div>
        </div>
        <Hamburger />
    </header>;
};

export default Header;