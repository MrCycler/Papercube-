import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Projectspage.css'

const papercubeprojects = [

    [0,'Coche Bluetooth GPS',"https://www.youtube.com/embed/FNZdjkgtirY",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [1,'Puerta de seguridad',"https://www.youtube.com/embed/o9KfBUAAxqU",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [2,'Semáforo LED',"https://www.youtube.com/embed/npCIAdhaZfI",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [3,'MiniCNC',"https://www.youtube.com/embed/OzF3m-P1nFM",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [4,'Coche Bluetooth GPS',"https://www.youtube.com/embed/FNZdjkgtirY",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],

]

class Projectspage extends Component {
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

        let projects = papercubeprojects.map((project) => { 
 
            if (project[0]%2==0){

                return (

                    <Row className="projectstext"> 
    
                        <Col xs={this.state.numerotamaño} className="projectsvisiondiv">
                        <iframe className="projectsvideos" src={project[2]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        
                        <Col xs={this.state.numerotamaño} className="projectsvisiondiv">
                        <p className="projectsmainletters">{project[1]}</p>
                        <p>{project[3]}</p>
                        </Col>
    
                    </Row>
    
                );     


            }

            else
            {
                return (

                    <Row className="projectstext"> 
    
                        <Col xs={this.state.numerotamaño} className="projectsvisiondiv">
                        <p className="projectsmainletters">{project[1]}</p>
                        <p>{project[3]}</p>
                        </Col>
    
                        <Col xs={this.state.numerotamaño} className="projectsvisiondiv">
                        <iframe className="projectsvideos" src={project[2]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        
                    </Row>
    
                );

            }
            


        })



      return (
        <div className="projectspagearea">
        
        <Container>
          <Row className="projectstitletext"> 
            <Col xs="12">
              <p>Projectos realizados por Papercube:</p>
            </Col>
          </Row>

          {projects}

       </Container>

        </div>
        
    );
    }
  }
  
  export default Projectspage;