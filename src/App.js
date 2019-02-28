import React, { Component } from 'react';
import Home from './Home/Home';
import Navbar from './Layouts/Navbar/Navbar';
import News from './News/News';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footers from './Layouts/Footers/Footers';
import Workshops from './Workshops/Workshops';
import Routesystem from './Systeminterface/Routesystem';
import Navbarmin from './Layouts/Navbar-min/Navbarmin'
import Social from './Layouts/Social/Social'

import './App.css';



class App extends Component {
          constructor(){
            super();
            this.state = {
                mostrate :[], 
            }
            }

          componentDidMount() {
              window.addEventListener("resize", this.resize.bind(this));
              this.resize();
          }

          resize() {
              if(window.innerWidth<850){
                this.setState({mostrate: <Navbarmin/>});
              }
              else
              {
                this.setState({mostrate: <Navbar/>});
              }
            }
 
  render() {

    
    return (
      <Router>
        <div>
          {this.state.mostrate}
          <Route exact path="/" component={Home}/>
          <Route path="/noticias" component={News}/>   
          <Route path="/academy" component={Workshops}/>   
          <Route path="/intsystem" component={Routesystem}/>   
          <Social/>  
          <Footers />
        </div>
      </Router>
    );
  }
}

export default App;
