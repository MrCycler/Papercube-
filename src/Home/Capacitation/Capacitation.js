import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Link } from '../../../node_modules/react-router-dom';
import './Capacitation.css'

class Capacitation extends Component {
    constructor(){
        super();
        this.state = {
            capacitations : [],
            numerorender1:[],
            numerorender2:[],
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
           this.resize();
        let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/talleres?per_page=3&orderby=date"
        fetch(dataUrl)
        .then(res => res.json())
        .then(res => {
            this.setState({
                capacitations: res
            })
        })
    }

    resize() {
        if(window.innerWidth<800){
          this.setState({numerorender1: 12});
          this.setState({numerorender2: 6});
          
        }
        else
        {
          this.setState({numerorender1: 4});
          this.setState({numerorender2: 12});
        }
      }
    render () {
        let capacitations = this.state.capacitations.map((capacitation,index) => {
            let hasImage = capacitation.acf.imagen;

            let image;
            if ( hasImage !== false){
                
                image = <img width="100%"  src={capacitation.acf.imagen_card.sizes.medium}/>;
            }


            let anho = (capacitation.acf.fecha).substring(0,4);
            let mes = (capacitation.acf.fecha).substring(4,6);
            let dia = (capacitation.acf.fecha).substring(6,8);
            let id = capacitation.id;

            return (
           <Col xs={this.state.numerorender1}  >
           
                <Row >
                <Col xs={this.state.numerorender2}>
               <p></p>
               {image}
          
                </Col>
                <Col xs={this.state.numerorender2} >
                    
                    <p className="capacitation__item__title" >
                    <Link to={"/academy/"+id} >{capacitation.title.rendered}</Link>
                    </p>
                    <p>Fecha : {dia}/{mes}/{anho}</p>
                    
              
                </Col>
               </Row>
              
                
            </Col>
        
            );
        })

        return (
            <div className="capacitation" >
                <h2 className="capacitation__title">PARTICIPA DE NUESTROS TALLERES</h2>
                <div >
                    <Row>
                    {capacitations}
                    </Row>
                </div>
            </div>
        )
    }

}

export default Capacitation;