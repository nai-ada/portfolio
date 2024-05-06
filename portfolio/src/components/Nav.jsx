import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/images/nadia-logo.png';
import Hamburger from "./Hamburger";

function Nav() {
  return (
    <header id="home">
      <nav>
        <div className="title-and-logo">
        <Link to="/">
          <img src={logoImage} alt="Nadia Vespalec Portfolio Logo" width="50px" className="nadia-logo" />
        </Link>
        <p className='front-end-title'>| Web Design + Development</p>
        </div>
        <div className="menu-nav-header">
        <Hamburger/>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

