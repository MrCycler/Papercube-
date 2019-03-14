import React, { Component } from 'react';
import Home from './Home/Home';
import Navbar from './Layouts/Navbar/Navbar';
import Projectspage from './Projectspage/Projectspage';
import Servicespage from './Servicespage/Servicespage';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Footers from './Layouts/Footers/Footers';
import Workshops from './Workshops/Workshops';
import Contactpage from './Contactpage/Contactpage';
import Navbarmin from './Layouts/Navbar-min/Navbarmin';
import Page404 from './Page404/Page404';
import Teampage from './Teampage/Teampage';
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

    //TODO: Ruta oor defecto a un componente 404 error
    return (
      <Router>
        <div>
          {this.state.mostrate}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/team" component={Teampage}/>   
            <Route path="/projects" component={Projectspage}/>  
            <Route path="/services" component={Servicespage}/>   
            <Route  path="/communis" component={Workshops}/>   
            <Route  path="/contact" component={Contactpage}/>  
            <Route  component={Page404}/>  
          </Switch>
          <Footers />
        </div>
      </Router>
    );
  }
}

export default App;
