import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Servicespage.css'

const papercubeservices = [

    [0,'Soluciones IT',"https://www.youtube.com/embed/FNZdjkgtirY",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [1,'Programación Web',"https://www.youtube.com/embed/o9KfBUAAxqU",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [2,'Programación Móvil',"https://www.youtube.com/embed/npCIAdhaZfI",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [3,'Diseño electrónico',"https://www.youtube.com/embed/OzF3m-P1nFM",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [4,'Diseño mecánico',"https://www.youtube.com/embed/FNZdjkgtirY",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],

]

class Servicespage extends Component {
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
        if(window.innerWidth<590){
          this.setState({numerotamaño: 12 });
        }
        else
        {
            this.setState({numerotamaño: 6 });

        }
      }

  

    render() {

        let services = papercubeservices.map((service) => { 
 
            if (service[0]%2==0){

                return (

                    <Row className="servicestext"> 
    
                        <Col xs={this.state.numerotamaño} className="servicesvisiondiv">
                        <iframe className="servicesvideos" src={service[2]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        
                        <Col xs={this.state.numerotamaño} className="servicesvisiondiv">
                        <p className="servicesmainletters">{service[1]}</p>
                        <p>{service[3]}</p>
                        </Col>
    
                    </Row>
    
                );     


            }

            else
            {
                return (

                    <Row className="servicestext"> 
    
                        <Col xs={this.state.numerotamaño} className="servicesvisiondiv">
                        <p className="servicesmainletters">{service[1]}</p>
                        <p>{service[3]}</p>
                        </Col>
    
                        <Col xs={this.state.numerotamaño} className="servicesvisiondiv">
                        <iframe className="servicesvideos" src={service[2]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        
                    </Row>
    
                );

            }
            


        })



      return (
        <div className="servicespagearea">
        
        <Container>
          <Row className="servicestitletext"> 
            <Col xs="12">
              <p>Servicios ofrecidos por Papercube:</p>
            </Col>
          </Row>

          {services}

       </Container>

        </div>
        
    );
    }
  }
  
  export default Servicespage;