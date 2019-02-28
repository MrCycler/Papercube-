import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Tooltip } from 'reactstrap';

import './System.css'
 
class Systemregister extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          tooltipOpen: false,
          numerotamaño :[], 
        };
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

      toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
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
                <h3>Me interesa registrarme:</h3>
                <p></p>
                </Col>
             </Row>
 
              <Row> 
                <Col xs="3">
                </Col>
                <Col xs={this.state.numerotamaño}>
                    <h5>Registre los datos de la empresa:</h5>
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
          <Label for="examplePassword">RUC:</Label>
          <Input type="name" name="email" id="examplePassword" placeholder="Ingrese el RUC" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Razón Social:</Label>
          <Input type="name" name="email" id="examplePassword" placeholder="Ingrese la Razón Social" />
        </FormGroup>

         <FormGroup>
          <Label for="examplePassword">Nombre Comercial:</Label>
          <Input type="name" name="email" id="examplePassword" placeholder="Ingrese el Nombre Comercial" />
        </FormGroup> 
        </Form>
 
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
                    <h5>Registre los datos de la empresa:</h5>
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

        <FormGroup>
        <Label for="examplePassword">Nombre:</Label>
        <Input type="name" name="email" id="examplePassword" placeholder="Ingrese el Nombre del Representante" />
        </FormGroup>

        <FormGroup>
        <Label for="examplePassword">Apellido:</Label>
        <Input type="name" name="email" id="examplePassword" placeholder="Ingrese el Apellido Paterno del Representante" />
        </FormGroup>

        <FormGroup>
        <Label for="examplePassword">Cargo:</Label>
        <Input type="name" name="email" id="examplePassword" placeholder="Ingrese el Cargo del Representante" />
        </FormGroup>
        
        <FormGroup>
        <Label for="examplePassword">Teléfono:</Label>
        <Input type="name" name="email" id="examplePassword" placeholder="Ingrese el Teléfono del Representante" />
        </FormGroup>

        <FormGroup>
        <Label for="examplePassword">Correo electrónico:</Label>
        <Input type="email" name="email" id="examplePassword" placeholder="miemail@servidor.com" />
        </FormGroup>
        
        <FormGroup>
          <Label for="examplePassword">Contraseña:</Label>
          <Input type="password" name="text" id="exampleText" placeholder="Ingrese la contraseña" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Repita Contraseña:</Label>
          <Input type="password" name="text" id="exampleText" placeholder="Ingrese la contraseña nuevamente" />
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
           
            <p className="CheckText"><a href="#" id="TooltipExample">Acepto la Política de Protección de Datos Personales </a></p>
            <Tooltip placement="right" isOpen={this.state.tooltipOpen} 
            target="TooltipExample" toggle={this.toggle}>
             <p className="TooltipText">Ley de Protección de Datos Personales</p>
            <p>De conformidad con la Ley N° 29733,
            Ley de Protección de Datos Personales y
             su Reglamento D.S. N° 003-2013-JUS otorgo
              consentimiento libre, expreso, inequívoco 
              e informado del tratamiento de mis datos
               personales para los fines inherentes a la 
               prestación del servicio que ADEX brinda.</p>
            </Tooltip>
          
          </Label>
        </FormGroup>

        </Col>

        <Col xs="3">
          </Col>

          </Row>
 
           <Row> 
                <Col xs="3">
                </Col>
                <Col xs={this.state.numerotamaño}>
                    <p></p>
                    <Button color="primary" className="botoncss">Me interesa registrame</Button>
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
          </Container>
 
 </div>
 
);
}
}

export default Systemregister;