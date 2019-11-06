import React from 'react';

const Nav= () => {
  return(
    <nav className="navbar navbar-expand-lg fixed-top">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <h4><a className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#home">home</a></h4>
                </li>
                <li className="sidebar-nav-item">
                    <h4><a className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#about">About</a></h4>
                </li>
                <li className="sidebar-nav-item">
                    <h4><a className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#portfolio">Portfolio</a></h4>
                </li>
                <li className="sidebar-nav-item">
                    <h4><a className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#contact">Contact</a></h4>
                </li>
            </ul>
        </div>
    </nav>


  );
};

export default Nav