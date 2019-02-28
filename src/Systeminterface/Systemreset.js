import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import './System.css'

class Systemreset extends Component {

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
       
        <div className="supercontactarea">
        <Container>
        
            <Row> <p></p>
            </Row>
    
            <Row> <p></p>
            </Row>
        
            <Row className="letrastitulo"> 
                
                <Col>
                <p></p>
                <h3>Sistema en línea:</h3>
                <p></p>
                </Col>
             </Row>

              <Row> 
                <Col xs="3">
                </Col>
                <Col xs={this.state.numerotamaño}>
                    <h5>Ingrese el correo electrónico con el que registro su cuenta:</h5>
                </Col>
                 <Col xs="3">
                </Col>
            </Row>

            <Row> <p></p>
            </Row>
      

          <Row>
          <Col xs="3">
          </Col>
            <Col xs={this.state.numerotamaño}>
        <Form>
     
        <FormGroup>
          <Label for="examplePassword">Correo electrónico:</Label>
          <Input type="email" name="email" id="examplePassword" placeholder="miemail@servidor.com" />
        </FormGroup>

        <Button color="primary" className="botoncss">Enviar contraseña</Button>
        <p></p>

        </Form>

        </Col>
        <Col xs="3">
          </Col>
        </Row>
        

        <Row>
          <Col>
            <div className="separacionx"></div>
          </Col>
          </Row>

           <Row> 
                <Col xs="3">
                </Col>
                <Col xs={this.state.numerotamaño}>
                    <h5>Si aún no la tiene puede registrarse:</h5>
                    <p></p>
                    <p></p>
                    <Link to="/intsystem/register-user">
                    <Button color="primary" className="botoncss">
                     Me interesa registrame
                    </Button></Link>
                    <p></p>
                </Col>
                 <Col xs="3">
                </Col>
            </Row>

            <Row>
          <Col>
            <div className="separacionx"></div>
          </Col>
          </Row>
          <Row>
          <Col>
            <div className="separacionx"></div>
          </Col>
          </Row>
          <Row>
          <Col>
            <div className="separacionx"></div>
          </Col>
          </Row>
          <Row>
          <Col>
            <div className="separacionx"></div>
          </Col>
          </Row>
          <Row>
          <Col>
            <p ></p>
          </Col>
          </Row>
          <Row>
          <Col>
            <p ></p>
          </Col>
          </Row>

       </Container>

        </div>
        
    );
    }
  }
  
  export default Systemreset;