import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Page404.css';
//BACKEND: 404 IMAGE SOURCE 
class Page404 extends Component{
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            video:[],
            numerotamaño2:[],
            numerotamaño3:[],

        }
        }

        componentDidMount() {
            window.addEventListener("resize", this.resize.bind(this));
            this.resize();
         
        }
    
        resize() {
            if(window.innerWidth<1025){
              this.setState({numerotamaño: 8,numerotamaño2:2});
              if(window.innerWidth<800){
                this.setState({numerotamaño: 12,numerotamaño2:0});
                if(window.innerWidth<600){
                    this.setState({numerotamaño: 12,numerotamaño2:0});
                }
              }
           
            }
            else
            {
                this.setState({numerotamaño: 8,numerotamaño2:2});
                
            }
          }

    render(){
        
        
        return (
            <Container>   
                    
            <Row>
                <Col xs={this.state.numerotamaño2}></Col>
                <Col xs={this.state.numerotamaño} >
             
                <img className="page404image"
                src="https://papercubehome.files.wordpress.com/2019/03/modo-color-a.jpg" >
                </img>
                <p className="page404text">HTTP 404 Not Found Error</p>
                <p className="page404text">Lo sentimos, la página que quiere consultar no es válida</p>
                               
                </Col>
                <Col xs={this.state.numerotamaño2}></Col>
            </Row>
                        
   
            </Container>
            
        );
    }
}

export default Page404;