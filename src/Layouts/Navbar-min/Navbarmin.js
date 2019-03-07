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
              
              <Col  xs="7">
            <Navbar color="black" dark>
          <NavbarToggler onClick={this.toggleNavbar} className="navbar_compresed"/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            
              <NavItem>
                <NavLink href=""><Link to="/" className="navbar__item">INICIO</Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href=""><Link to="/team" className="navbar__item">EQUIPO</Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href=""><Link to="/noticias" className="navbar__item">NOTICIAS</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""> <Link to="/academy" className="navbar__item">INNOVADEX ACADEMY</Link></NavLink>
              </NavItem>
             
              <NavItem>
                <NavLink href=""><Link to="/intsystem" className="navbar__item">REGISTRATE </Link></NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
          
          </Navbar>   
          </Col>
          <Col xs="3">
          <p></p>
          <Link to="/">
                    <img class="navbar__image" 
                    src="https://papercubehome.files.wordpress.com/2019/02/modo-alternativo.png"/>
                    </Link>
              <p></p>
              </Col>
          </Row>           
            </div>
        )
    }
}

export default Navbarmin;