import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Link } from '../../../node_modules/react-router-dom';
import './Capacitation.css'

const papercubeprojects = [

    [0,'Coche Bluetooth GPS',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/IMG_20180710_093107-300x224.jpg",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [1,'Puerta de seguridad',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/IMG_20180710_093107-300x224.jpg",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],
    [2,'Semáforo LED',"http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/IMG_20180710_093107-300x224.jpg",'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'],

]

class Capacitation extends Component {
    constructor(){
        super();
        this.state = {
            numerorender1:[],
            numerorender2:[],
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
       
    }

    resize() {
        if(window.innerWidth<800){
          this.setState({numerorender1: 12});
          this.setState({numerorender2: 6});
          
        }
        else
        {
          this.setState({numerorender1: 4});
          this.setState({numerorender2: 12});
        }
      }
    render () {
        let divisiones = papercubeprojects.map((project) => {
           
            return (
           <Col xs={this.state.numerorender1}  >
           
                <Row >
                <Col xs={this.state.numerorender2}>
                    <img width="100%"  src={project[2]}/>
                </Col>
                <Col xs={this.state.numerorender2} >
                    <a href="/" >
                        <p className="capacitationitemtitle" > {project[1]}</p>
                    </a>
                </Col>
               </Row>
              
            </Col>
        
            );
        })

        return (
            <Container >
                <Row className="capacitationtitletext"> 
                    <Col xs="12">
                        <p>Convertimos la ingeniería en valor agregado a su negocio:</p>
                    </Col>
                </Row>
             
                    <Row>
                    {divisiones}
                    </Row>
               
            </Container>
        )
    }

}

export default Capacitation;