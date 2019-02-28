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

        let logoInnovadex = this.state.logos.map((logo,index) => {
            if (logo.id == 67){
                return(
                    <Link to="/">
                    <img class="navbar__image" 
                    src={logo.acf.imagen.sizes.medium}/>
                    </Link>
                )
            }
        })

        return (
            <div id="navbar" className="navbar-area">
                {logoInnovadex}
                <Link to="/" className="navbar__item">INICIO</Link>
                <Link to="/noticias" className="navbar__item">NOTICIAS</Link>
                <Link to="/academy" className="navbar__item">INNOVADEX ACADEMY </Link>
                <Link to="/intsystem" className="navbar__item">REGISTRATE </Link>
            </div>
        )
    }
}

export default Navbar;