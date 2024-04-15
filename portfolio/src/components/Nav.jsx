import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/images/nadia-logo.png';
import Hamburger from "./Hamburger";

function Nav(props) {
  return (
    <header>
      <nav>
        <div class="title-and-logo">
        <Link to="/">
          <img src={logoImage} alt="Nadia Vespalec Portfolio Logo" width="50px" className="nadia-logo" />
        </Link>
        <p className='front-end-title'>| Front-End Web Developer</p>
        </div>
        <div class="menu-nav-header">
        <Hamburger/>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

