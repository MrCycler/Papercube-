import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './Teampage.css'


class Teampage extends Component {
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
        }
        }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if(window.innerWidth<850){
          this.setState({numerotamaño: 12});
        }
        else
        {
            this.setState({numerotamaño: 6});
        }
      }

    render() {
      return (
        <div className="teampagearea">
        
        <Container>
          <Row className="contacttitletext"> 
      
            <Col xs="12">
              <p>Soluciones tecnologícas diversas para un mundo cada vez más conectado</p>
            </Col>
         
          </Row>

          <Row className="contacttext"> 
            

            <Col xs={this.state.numerotamaño}>
        
                <img className="teampagemainimg"
                alt="" 
                src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                </img>
            </Col>
            
            <Col xs={this.state.numerotamaño}>
            <p>Mision:</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col xs={this.state.numerotamaño}>
            <p>Vision:</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            </Col>
            <Col xs={this.state.numerotamaño}>
                <img className="teampagemainimg"
                alt="" 
                src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                </img>
            </Col>
          </Row>
      

       </Container>

        </div>
        
    );
    }
  }
  
  export default Teampage;