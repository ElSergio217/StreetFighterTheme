import React from 'react';
import {
    Link,
  } from "react-scroll";
const Nav= () => {
  return(
    <nav className="navbar navbar-expand-lg fixed-top">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <h4>
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#home">home</Link>
                    </h4>
                </li>
                <li className="sidebar-nav-item">
                    <h4>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#about">About</Link>
                    </h4>
                </li>
                <li className="sidebar-nav-item">
                    <h4>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#portfolio">Portfolio</Link>
                    </h4>
                </li>
                <li className="sidebar-nav-item">
                    <h4>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#contact">Contact</Link>
                    </h4>
                </li>
            </ul>
        </div>
    </nav>


  );
};

export default Nav