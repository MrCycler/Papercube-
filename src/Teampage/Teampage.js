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

              <Form>
                
              <FormGroup>
                <Label for="Contactname">Nombres:</Label>
                <Input className="contactcamps" type="name" name="nombre" id="Contactname" placeholder="" />
              </FormGroup>

              <FormGroup>
                <Label for="Contactlastname">Apellidos:</Label>
                <Input className="contactcamps" type="name" name="apellido" id="Contactlastname" placeholder="" />
              </FormGroup>

              <FormGroup>
                <Label for="Contactemail">Correo electrónico:</Label>
                <Input className="contactcamps" type="email" name="email" id="Contactemail" placeholder="" />
              </FormGroup>
              
              <FormGroup>
                <Label for="Contactnumber">Teléfono:</Label>
                <Input className="contactcamps" type="name" name="telefono" id="Contactnumber" placeholder="" />
              </FormGroup>

              <FormGroup>
                <Label for="Contactreqtitle">Asunto:</Label>
                <Input className="contactcamps" type="name" name="asunto" id="Contactreqtitle" placeholder="" />
              </FormGroup>

              <FormGroup>
                <Label for="Contactreq">Mensaje:</Label>
                <Input className="contacttextarea" type="textarea" name="mensaje" id="Contactreq" placeholder="" />
              </FormGroup>
              
              <Button color="primary" className="contactbutton">Enviar</Button>
              <p></p>

              </Form>

            </Col>
            
            <Col xs={this.state.numerotamaño}>

            <iframe
                className="contactmap"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBGRxueWqb4u88-O7Z7aDFvxQ0wLe30N-4&q=PUCP" allowfullscreen>
            </iframe>
             
            </Col>
          </Row>
      

       </Container>

        </div>
        
    );
    }
  }
  
  export default Teampage;