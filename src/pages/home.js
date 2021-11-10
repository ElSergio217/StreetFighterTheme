import React, { Component } from 'react';
import '../App.css';

import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import About from '../components/about/about';
import Work from '../components/work/work';
import Contact from '../components/contact/contact';
import Car from '../components/car/car';


class home extends Component {

  constructor (props) {
    super(props);
    this.state = {
      carFrame: 1,
      clicks: 0,
      credit: 0
    }
    this.carHit = this.carHit.bind(this);
    this.insertCoin = this.insertCoin.bind(this);
  }
   carHit(e) {
    e.preventDefault();

    if(this.state.clicks >= 1){
      if(this.state.carFrame !== 15){
        this.setState({ 
          clicks: 0,
          carFrame: this.state.carFrame + 1,
        });
      }
    }
    else{
      this.setState({ 
        clicks: this.state.clicks + 1,
      });
    }
    console.log(this.state)
  }

  insertCoin(e){
    e.preventDefault();
    this.setState({ 
      credit: this.state.credit + 1,
    });
  }


  render() { 

    return (
      <div className="App">
        <div class="overlay">AV-3</div>

        <Nav/>

        <Header imgPath="../img/Logo.png" start="Push start button" credit={this.state.credit} copyright="© SERGIO GARCIA 2021" func={this.insertCoin}/>

        <About 
          maxLevel="5"
          skills= {[
            {"name": "FRONT-END DEVELOPMENT", "level" : 4, "key":1}, 
            {"name": "BACKEND DEVELOPMENT", "level" : 4, "key":2}, 
            {"name": "GAME DEVELOPMENT", "level" : 3, "key":3}, 
            {"name": "MOBILE DEVELOPMENT", "level" : 4, "key":4}, 
            {"name": "IMMERSIVE TECHNOLOGY", "level" : 3, "key":5}, 
          ]}
          github="https://github.com/ElSergio217"
          linkedin="https://www.linkedin.com/in/sgarcia217/"
          instagram="https://www.instagram.com/elsergio217/"
          name="Sergio Garcia" 
        />

        <Car func={this.carHit} frame={this.state.carFrame}/>

        <Work 
          project= {[
            {"url":"https://hgs-ny.org/interactive-dunk-exhibit", "name": "DUNK! The Science of Basketball®", "img" : "/img/10.png", "desc":"Interactive DUNK! The Science of Basketball® tour and Harlem Gallery of Science’s Hall of Fame where you will learn about Black Scientists and Engineers that have made significant contributions to the STEM Fields."}, 
            {"url":"https://www.rumcsi.org/about/covid-19-support/rumc-cares-app/", "name": "RUMC Cares App", "img" : "/img/11.png", "desc":"Schedule COVID-19 vaccination at Richmond University Medical Center through RUMC CARES new, unique, and free mobile app that lets you schedule your appointment in a matter of seconds!"}, 
            {"url":"https://theheavylifters.co/", "name": "The Heavy Lifters", "img" : "/img/13.png", "desc":"Black owned moving company that works out of New York City"}, 
            {"url":"https://www.theurbanwild.us/", "name": "The Urban Wild", "img" : "/img/12.png", "desc":"The Urban Wild is a New York City-based nonprofit organization dedicated to making sustainable agricultural technology more accessible to areas affected by food insecurity."}, 
            {"url":"https://devpost.com/software/vimage","name": "Vimage", "img" : "/img/4.png", "desc":"Vimage allows you to add a layer of video onto any printed material using augmented reality technology."}, 
            {"url":"https://github.com/ElSergio217/Building-Generator-Unity3D-","name": "Building Generator for Unity3d", "img" : "/img/2.png", "desc":"Open-source asset for the Unity3D engine. This asset allows developers to easily add unique buildings to their projects."}, 
          ]}
        />
      
        <Contact />

      <div className="text-center content-section black-back py-5">
        <div className="container">
          <hr style={{backgroundColor:"#6c757d", opacity:"0.5"}}/>
          <div className="row">
            <div className="col">
            <p className="text-muted p-2">Copyright © 2021, Sergio Garcia</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default home;
