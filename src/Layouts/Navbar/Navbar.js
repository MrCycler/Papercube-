import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            logos : []
        }
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

    openMenu = () => {
        var navbar = document.getElementById("navbar");
        if (navbar.className == "navbar-area"){
            navbar.className += " navbar--responsive";
        } else {
            navbar.className = "navbar-area"
        }
    }

    render() {

        return (
            <div id="navbar" className="navbar-area">
                 <Link to="/">
                    <img class="navbar__image" 
                    src="https://papercubehome.files.wordpress.com/2019/02/modo-principal.png"/>
                    </Link>
                <Link to="/" className="navbar__item">INICIO</Link>
                <Link to="/team" className="navbar__item">EQUIPO</Link>
                <Link to="/projects" className="navbar__item">PROYECTOS</Link>
                <Link to="/services" className="navbar__item">SERVICIOS</Link>
                <Link to="/community" className="navbar__item">COMUNIDAD</Link>
                <Link to="/intsystem" className="navbar__item">CONTACTO</Link>
            </div>
        )
    }
}

export default Navbar;