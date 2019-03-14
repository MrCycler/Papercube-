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
            <Col xs={this.state.numerotamaño} className="teamvisiondiv">
                <img className="teampagemainimg"
                alt="" 
                src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                </img>
            </Col>
            
            <Col xs={this.state.numerotamaño} className="teamvisiondiv">
            <p className="teammainletters">Misión:</p>
            <p>PaperCube tiene como misión ofrecer a sus clientes un abanico de soluciones tecnológicas en distintas ramas de la ingeniería que sean innovadoras, idóneas, eficientes y acordes a las nuevas tendencias, que tengan un impacto positivo y puedan incrementar el valor de su actividad productiva.</p>
            </Col>

            <Col xs={this.state.numerotamaño} className="teammissiondiv">
            <p className="teammainletters">Visión:</p>
            <p>PaperCube busca ser una empresa líder en el mercado de consultoría tecnológica, que sea aliado estratégico y soporte tecnológico de sus clientes. Asimismo, buscamos ser referentes en el desarrollo de soluciones innovadoras que nos permitan compartir nuestro conocimiento con nuestros clientes y con la comunidad. </p>
            </Col>

            <Col xs={this.state.numerotamaño} className="teammissiondiv">
                <img className="teampagemainimg"
                alt="" 
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2IOGd?ver=2654&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"> 
                </img>
            </Col>

          </Row>
            <Row>

                <Col xs="4">
                    <img className="teampagemainimg"
                    alt="" 
                    src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                    </img>
                    <p className="teamcharactermainletters">Multidisciplinariedad</p>
                    <p className="teamcharacterletters">Nuestro equipo cuenta con profesionales de diversas ramas de ingeniería que le garantizan una solución integral.</p>
                </Col>

                <Col xs="4">
                    <img className="teampagemainimg"
                    alt="" 
                    src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                    </img>
                    <p className="teamcharactermainletters">Trabajo en equipo</p>
                    <p className="teamcharacterletters">Nuestra calidad de trabajo, cooperación y cohesión nos permiten ofrecerle una solución óptima en el tiempo adecuado.</p>
                </Col>

                <Col xs="4">
                    <img className="teampagemainimg"
                    alt="" 
                    src="https://www.colcircuitos.com/wp-content/uploads/2017/08/dise%C3%B1oele-03.png"> 
                    </img>
                    <p className="teamcharactermainletters">Tecnología</p>
                    <p className="teamcharacterletters">Buscamos incorporar la tecnología adecuada a la solución que usted requiere. Continuamente nos capacitamos para ofrecerle lo mejor</p>
                </Col>

            </Row>
            
            <Row className="contacttitletext"> 
            <Col xs="12">
              <p>Nuestro equipo:</p>
            </Col>
          </Row>

            <Row>
                <Col xs='4' className="letrasmainphotos">
                <p></p>
                <img alt=""  src="https://lugachhome.files.wordpress.com/2019/02/blackie.jpeg" 
                className="teamretraits">
                </img>
                <p className="teamportraitletters">Hugo Deudor</p>
                <p className="teamportraitletters">CEO</p>
                </Col>

                <Col xs='4' className="letrasmainphotos">
                <p></p>
                <img alt="" src="https://lugachhome.files.wordpress.com/2019/02/sachi.jpeg" 
                   className="teamretraits">
                </img>
                <p className="teamportraitletters">Paco</p>
                </Col>

                <Col xs='4'className="letrasmainphotos">
                <p></p>
                <img alt=""  src="https://lugachhome.files.wordpress.com/2019/02/koko.jpg" 
                className="teamretraits">
                </img>
                <p className="teamportraitletters">Luis</p>
                </Col>


                <Col xs='4' className="letrasmainphotos">
                <p></p>
                <img alt=""  src="https://lugachhome.files.wordpress.com/2019/02/blackie.jpeg" 
                    className="teamretraits">
                </img>
                <p className="teamportraitletters">Hugo</p>
               
                </Col>

                <Col xs='4' className="letrasmainphotos">
                <p></p>
                <img alt="" src="https://lugachhome.files.wordpress.com/2019/02/sachi.jpeg" 
               
               className="teamretraits">
                </img>
                <p className="teamportraitletters">Paco</p>
                
                </Col>

                <Col xs='4'className="letrasmainphotos">
                <p></p>
                <img alt=""  src="https://lugachhome.files.wordpress.com/2019/02/koko.jpg" 
                 
                className="teamretraits">
                </img>
                <p className="teamportraitletters">Luis</p>
                
                </Col>
                </Row>
       </Container>






        </div>
        
    );
    }
  }
  
  export default Teampage;