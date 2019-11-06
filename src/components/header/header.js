import React from 'react';
import './header.css';

const Header= (props) => {
  return(
    <header className="masthead d-flex" id="home">
        <div className="container text-center my-auto">
            <img src={props.imgPath} className="logo" alt="logo"/>
            
            <a className="nav-link yellow-with-darkyellow js-scroll-trigger" href="#about">
                <h1 className="grey-with-red clickable" >{props.start}</h1>
            </a>
            
            <h2 className="noselect grey-with-red" id="addcredit" >
                Credit <span className="yellow-with-darkyellow" id="credit_count">1</span>
            </h2>

            <h2 className="yellow-with-darkyellow" > {props.copyright}</h2>
        </div>
        <div className="overlay"></div>
    </header>


  );
};

export default Header