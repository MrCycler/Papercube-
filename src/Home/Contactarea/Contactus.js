import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Contactus.css'



class Contactus extends Component {

        constructor(){
          super();
          this.state = {
              dissapear:[],
          }
          }

      componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
      }

      resize() {
        if(window.innerWidth>576){
          this.setState({dissapear:<img className="imagearea"  
          width="100%"
           alt="Card image cap"  
           src="data:image/jpeg;base64,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" />});
        ;
      }
        else
        {this.setState({dissapear:[]});
        }
      }

    render() {
      return (
       
        <div className="contact">
        <Container>

          <Row>
          <Col>
            <div className="separacionxx"></div>
          </Col>
          </Row>

          <Row>
            <Col sm={{ size: '5', offset: 1 }}>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Ingrese su nombre:</Label>
          <Input type="email" name="nombre" id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Inserte su e-mail:</Label>
          <Input type="email" name="email" id="examplePassword" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Deje su mensaje:</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="primary" className="botoncss">Enviar</Button>{' '}
        <p></p>
        </Form>
        </Col>
        <Col sm={{ size: '5', offset: 1 }}>
        {this.state.dissapear}
        </Col>
        </Row>
        
        <Row>
          <Col>
            <div className="separacionxx"></div>
          </Col>
          </Row>

       </Container>

        </div>
        
    );
    }
  }
  
  export default Contactus;