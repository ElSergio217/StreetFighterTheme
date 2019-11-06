import React, { useState } from 'react';
import './about.css';
import classnames from 'classnames';

const About= (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

return(

<section className="masthead d-flex to-black" id="about">
    <div className="container text-center my-auto">
      <h1 className="grey-with-red">BIO</h1>
      <br />
      <br />
      <div className="tab-container">
          <div className="row">
              <div className="col-md-6">
                  <img src="./img/me.jpg" className="img-fluid rounded-circle user-img" alt="pic"/>
                  <hr />
                  <h2 className="grey-with-red">{props.name}</h2>
                  <h1>
                      <a className="user-icon" href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                      <a className="user-icon" href={props.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                      <a className="user-icon" href={props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  </h1>
              </div>
              
              <div className="col-md-6">
                  <br />
                  <ul className="nav nav-tabs">
                        <li>
                            <h3 data-toggle="tab" href="#one" className={classnames({ active: activeTab === '1', }, "yellow-with-darkyellow nav-item nav-link clickable")} onClick={() => { toggle('1'); }}>About</h3>
                        </li>
                        <li>
                            <h3 data-toggle="tab" href="#two" className={classnames({ active: activeTab === '2', }, "yellow-with-darkyellow nav-item nav-link clickable")} onClick={() => { toggle('2'); }}>Skills</h3>
                        </li>
                  </ul>

                  <div className="tab-content">
                      <div id="one" className={classnames({ active: activeTab === '1', }, "tab-pane fade show in")}>
                          <p  className="yellow-with-darkyellow-no-shadow white" style={{textAlign: "left", color:"white"}}>Sergio Garcia is a tech enthusiast and computer programmer with 5+ years of experience in creating traditional and emerging technology solutions. As a programmer, Sergio gained knowledge on multiple programming languages (such as Python, javascript and C#.) by reading documentations and building different type of projects. Sergio has competed and placed top 3 in multiple hackathons across NYC including: Global game Jam(1st Place), Video Hack Day 3 (1st Place),  Hack Harlem 2017 (2nd Place) and more. When not programming, Sergio is most likely playing Super Smash Bros. with friends or enjoying reading his favorite comics.</p>
                      </div>
                      <div id="two" className={classnames({ active: activeTab === '2', }, "tab-pane fade show in")}>
                          <div className="card">
                              <div className="card-body">           
                                {props.skills.map((i, key) => (
                                    <div key={key}>
                                    <h2 className="yellow-with-darkyellow">{i.name}</h2>
                                        {[...Array(i.level)].map((j, key) => 
                                            <i key={key} className="fas fa-square"></i>
                                        )}
                                        {[...Array( props.maxLevel- i.level)].map((j, key) => 
                                            <i key={key} className="far fa-square"></i>
                                        )}
                                    </div>
                                ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <br />
    </div>
  </section>
)};

export default About