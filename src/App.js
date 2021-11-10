import React, {Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';

class App extends Component {  

    render() {
        return ( 
            <div>
              <BrowserRouter>
                <Main />
              </BrowserRouter>
            </div>
        );
    }
}

export default App;