import React, { useState } from 'react';
import './about.css';
import classnames from 'classnames';

const About= (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

return(

<section class="masthead d-flex to-black" id="about">
    <div class="container text-center my-auto">
      <h1 class="grey-with-red">BIO</h1>
      <br />
      <br />
      <div className="tab-container">
          <div class="row">
              <div class="col-md-6">
                  <img src="./img/me.jpg" class="img-fluid rounded-circle user-img" />
                  <hr />
                  <h2 class="grey-with-red">{props.name}</h2>
                  <h1>
                      <a className="user-icon" href={props.github} target="_blank"><i class="fab fa-github"></i></a>
                      <a className="user-icon" href={props.instagram} target="_blank"><i class="fab fa-instagram"></i></a>
                      <a className="user-icon" href={props.linkedin} target="_blank"><i class="fab fa-linkedin-in"></i></a>
                  </h1>
              </div>
              
              <div class="col-md-6">
                  <br />
                  <ul class="nav nav-tabs">
                        <li>
                            <h3 data-toggle="tab" href="#one" className={classnames({ active: activeTab === '1', }, "yellow-with-darkyellow nav-item nav-link clickable")} onClick={() => { toggle('1'); }}>About</h3>
                        </li>
                        <li>
                            <h3 data-toggle="tab" href="#two" className={classnames({ active: activeTab === '2', }, "yellow-with-darkyellow nav-item nav-link clickable")} onClick={() => { toggle('2'); }}>Skills</h3>
                        </li>
                  </ul>

                  <div class="tab-content">
                      <div id="one" className={classnames({ active: activeTab === '1', }, "tab-pane fade show in")}>
                          <p  class="yellow-with-darkyellow-no-shadow white" style={{textAlign: "left", color:"white"}}>Sergio Garcia is a tech enthusiast and computer programmer with 5+ years of experience in creating traditional and emerging technology solutions. As a programmer, Sergio gained knowledge on multiple programming languages (such as Python, javascript and C#.) by reading documentations and building different type of projects. Sergio has competed and placed top 3 in multiple hackathons across NYC including: Global game Jam(1st Place), Video Hack Day 3 (1st Place),  Hack Harlem 2017 (2nd Place) and more. When not programming, Sergio is most likely playing Super Smash Bros. with friends or enjoying reading his favorite comics.</p>
                      </div>
                      <div id="two" className={classnames({ active: activeTab === '2', }, "tab-pane fade show in")}>
                          <div class="card">
                              <div class="card-body">           
                                {props.skills.map(i => (
                                    <div>
                                    <h2 class="yellow-with-darkyellow">{i.name}</h2>
                                        {[...Array(i.level)].map(j => 
                                            <i class="fas fa-square"></i>
                                        )}
                                        {[...Array( props.maxLevel- i.level)].map(j => 
                                            <i class="far fa-square"></i>
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