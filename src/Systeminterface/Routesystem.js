import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import System from './System';
import  Systemreset from './Systemreset';
import Systemregister from './Systemregister';


class Routesystem extends Component {
 
  render() {

    
    return (
      <Router>
        <div>
 
          <Route exact path="/intsystem" component={System}/>
          <Route exact path="/intsystem/reset-password" component={Systemreset}/>   
          <Route exact path="/intsystem/register-user" component={Systemregister}/>  
         
        </div>
      </Router>
    );
  }
}

export default Routesystem;