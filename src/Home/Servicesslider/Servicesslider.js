import React, { Component } from 'react';
import Slider from 'react-slick';
import { Card,  CardTitle, CardBody, CardImg, CardText, CardLink} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {Button} from 'reactstrap';
import './Servicesslider.css';
import { Link } from 'react-router-dom';

const services = [

  [0,'DESARROLLO DE PLATAFORMAS WEB',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/noticia-1.jpg",'Desarrollo de plataformas web según sus necesidades. Desarrollo de APIS y gestión de datos. Desarrollo Front-end y Back-end de calidad.'],
  [1,'DESARROLLO DE PLATAFORMAS WEB',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/noticia-1.jpg",'Desarrollo de plataformas web según sus necesidades. Desarrollo de APIS y gestión de datos. Desarrollo Front-end y Back-end de calidad.'],
  [2,'DESARROLLO DE PLATAFORMAS WEB',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/noticia-1.jpg",'Desarrollo de plataformas web según sus necesidades. Desarrollo de APIS y gestión de datos. Desarrollo Front-end y Back-end de calidad.'],
  [3,'DESARROLLO DE PLATAFORMAS WEB',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/noticia-1.jpg",'Desarrollo de plataformas web según sus necesidades. Desarrollo de APIS y gestión de datos. Desarrollo Front-end y Back-end de calidad.'],
  [4,'DESARROLLO DE PLATAFORMAS WEB',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/noticia-1.jpg",'Desarrollo de plataformas web según sus necesidades. Desarrollo de APIS y gestión de datos. Desarrollo Front-end y Back-end de calidad.'],

]


class Servicesslider extends Component {

  constructor(){
    super();
    this.state = {
       cartasmostradas:[],

    }
      }

      componentDidMount() {
           window.addEventListener("resize", this.resize.bind(this));
           this.resize();
        
      }

      resize() {
        if(window.innerWidth<1000){
          this.setState({cartasmostradas: 2});
        }
        else
        {
          this.setState({cartasmostradas: 3});
        }
        if(window.innerWidth<500){
          this.setState({cartasmostradas: 1});
        }
      }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: this.state.cartasmostradas,
      slidesToScroll: 1
    };

    let cartas = services.map((service) => {    
          return (
          
            <Container>
              <Row>
              
                <Col>
                  <Card body className="text-center" style={{backgroundColor:'#004D8F', borderColor: '#004D8F', height:"380px" }}>
                  <CardImg className="imagesize" top width="80%" src={service[2]} alt="Card image cap" />
                  <CardBody>
                  <CardTitle className="letrascarta">{service[1]}</CardTitle>
                  <CardText className="letrascarta">{service[3]}</CardText>
                  <a href= {service[2]}>
                  <Button color="info" className="servicesbutton" >Más información</Button></a>
                  </CardBody>
                  </Card>
                </Col> 
                
              </Row>
            </Container>
          );
    })

    return (
      <Container>

        <Row className="serviceslidertitletext"> 
          <Col xs="12">
            <p>Lo que necesita ya lo hemos pensado y posiblemente ya lo hallamos desarrollado:</p>
          </Col>
        </Row>
          
        <Row>
          <Col>
            <Slider {...settings} className="servicesslider">             
              {cartas}
            </Slider> 
          </Col>
       </Row>

      </Container>
        
    );
  }
}

export default Servicesslider;