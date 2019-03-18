import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Row,Col} from 'reactstrap';
import '../Navbar/Navbar.css'

//TODO: Hacer que en mobile se pliegue el menu

class Navbarmin extends Component{

    constructor(props) {
        
      super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);

          this.state = {
            collapsed: true,
            logos:[],
          };

      }

      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
        let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/logos?_embed"
        fetch(dataUrl)
        .then(res => res.json())
        .then(res => {
            this.setState({
                logos: res
            })
        })
    }

    componentWillUnmount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = () => {
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky){
            navbar.classList.add("navbar--sticky");
        } else {
            navbar.classList.remove("navbar--sticky");
        }
    }

    render() {
     
        return (
            <div id="navbar" className="navbar-area">
            <Row>
              
              <Col  xs="6">
            <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar}/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <Link to="/" onClick={this.toggleNavbar} className="navbar__item">INICIO</Link>
              <Link to="/team" onClick={this.toggleNavbar} className="navbar__item">EQUIPO</Link>
              <Link to="/projects" onClick={this.toggleNavbar} className="navbar__item">PROYECTOS</Link>
              <Link to="/services" onClick={this.toggleNavbar} className="navbar__item">SERVICIOS</Link>
              <Link to="/community" onClick={this.toggleNavbar} className="navbar__item">COMUNIDAD</Link>
              <Link to="/contact" onClick={this.toggleNavbar} className="navbar__item">CONTACTO</Link>
            </Nav>  
          </Collapse>
          
          </Navbar>   
          </Col>

            <Col xs="6">
              <Link to="/">
                <img className="navbar__imagecompresed" 
                src="https://papercubehome.files.wordpress.com/2019/02/modo-alternativo.png"/>
              </Link>
            </Col>
          </Row>           
            </div>
        )
    }
}

export default Navbarmin;