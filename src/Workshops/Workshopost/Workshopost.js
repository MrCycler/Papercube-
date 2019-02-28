import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardDeck, CardTitle, CardBody, CardImg,CardSubtitle,CardText,CardImgOverlay,
    CardLink} from 'reactstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './Workshopost.css'

class Workshopost extends Component {
    constructor(){
        super();
        this.state = {
        
        }
    }

    

    render () {
        var numerito = (this.props.titulo).length;
        var textito =  (this.props.texto).substring(0,135-numerito);
        var posicionpunto = textito.indexOf('.', 0);
        var posicionespacio = textito.lastIndexOf(" ");
        if (posicionpunto==-1){
            
            textito = textito.substring(0,posicionespacio+1)+" [...]";
        }
        else
        {
            textito = textito.substring(0,posicionpunto+1);
        }
    

        return (
            <Col xs={this.props.rendernumber} >
            <Row>

            <Col  className="cardnew">
            <Row>
            <Col xs={this.props.rendernumber2} className="cardarea">
            <p></p>
          <img height="200px" width="100%" src={this.props.cimagen}  />
          </Col>
                
            <Col xs={this.props.rendernumber2} className="cardarea" >
            <p></p>
            <h6 className="letrastitulo" >{this.props.titulo}</h6>
          <p className="letrastexto"> <div dangerouslySetInnerHTML={{ __html: textito }}/></p>
          
          </Col>
            </Row>
            <Row>
            <Col xs={this.props.rendernumber2} >
            </Col>
            <Col xs={this.props.rendernumber2} >
            <p> <Link to={"/academy/"+this.props.id} className="letraslink"> Más información
          </Link>
          </p>
          </Col>
            </Row>
          </Col>

            </Row>
            </Col>
        )
    }

}

export default Workshopost;