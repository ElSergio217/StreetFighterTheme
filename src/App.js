import React, { Component } from 'react';
import './App.css';

import Nav from './components/nav/nav';
import Header from './components/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Car from './components/car/car';


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      carFrame: 2,
      clicks: 0,
      carUrl: "/img/car/1.png"
    }
    this.carHit = this.carHit.bind(this);
  }
   carHit(e) {
    e.preventDefault();

    if(this.state.clicks >= 3){
      if(this.state.carFrame !== 15){
        this.setState({ 
          clicks: 0,
          carFrame: this.state.carFrame + 1,
          carUrl : "./img/car/" + this.state.carFrame + ".png"
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


  render() { 

    return (
      <div className="App">
        <Nav/>

        <Header imgPath="./img/Logo.png" start="Push start button" credit="1" copyright="© SERGIO GARCIA 2019"/>

        <About 
          maxLevel="5"
          skills= {[
            {"name": "FRONT-END DEVELOPMENT", "level" : 4, "key":1}, 
            {"name": "BACKEND DEVELOPMENT", "level" : 4, "key":2}, 
            {"name": "GAME DEVELOPMENT", "level" : 3, "key":3}, 
            {"name": "MOBILE DEVELOPMENT", "level" : 2, "key":4}, 
            {"name": "IMMERSIVE TECHNOLOGY", "level" : 4, "key":5}, 
          ]}
          github="https://github.com/ElSergio217"
          linkedin="https://www.linkedin.com/in/sgarcia217/"
          instagram="https://www.instagram.com/elsergio217/"
          name="Sergio Garcia" 
        />

        <Car func={this.carHit} frame={this.state.carUrl}/>


        <Work 
          project= {[
            {"url":"https://withseethru.com/", "name": "See Thru", "img" : "/img/1.gif", "desc":"See Thru is the first ingredients platform that, in just a few clicks, educates your consumer instantly on your ingredients right when they’re shopping and helps you build a better brand."}, 
            {"url":"https://devpost.com/software/vimage","name": "Vimage", "img" : "/img/4.png", "desc":"Vimage allows you to add a layer of video onto any printed material using augmented reality technology."}, 
            {"url":"https://harlemmap.herokuapp.com/","name": "Harlem Business Directory", "img" : "/img/3.png", "desc":"Dataset map that features businesses/individuals holding a DCA license so that they may legally operate in New York City."}, 
            {"url":"https://github.com/ElSergio217/Building-Generator-Unity3D-","name": "Building Generator for Unity3d", "img" : "/img/2.png", "desc":"Open-source asset for the Unity3D engine. This asset allows developers to easily add unique buildings to their projects."}, 
            {"url":"https://boogiedowntech.itch.io/skies","name": "Skies", "img" : "/img/6.png", "desc":"Skies is a First Person Parkour game that takes place in the future. Play as a parkour practitioner and explore different environment while completing challenges on the way."}, 
            {"url":"http://www.trinitytech.nyc/","name": "Trinity Tech Solutions", "img" : "/img/7.png", "desc":"A Bronx based tech company specializing in the development of custom websites and mobile apps."}, 
            {"url":"https://introverted.co","name": "Introverted", "img" : "/img/8.png", "desc":"Introverted is a creative-owned company that offers original apparel and general merchandise."}, 
            {"url":"http://www.extrasimple.xyz/","name": "ELIJAH HILL Portfolio", "img" : "/img/9.png", "desc":""}, 
          ]}
        />
      
        <Contact />
      </div>
    );
  }
}

export default App;
