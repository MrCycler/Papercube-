import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import './Newdetail.css';

class Workshopdetail extends Component{
    constructor(){
        super();
        this.state = {
            talleres: [],
            numerotamaño :[], 
        }
        }

    componentDidMount() {
  
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/talleres?_embed"
        fetch(dataUrl)
        .then(res => res.json())
        .then(res => {
            this.setState({
                talleres: res
            })
        })
    };

    resize() {
        if(window.innerWidth<900){
          this.setState({numerotamaño: 12});
        }
        else
        {
            this.setState({numerotamaño: 8});
        }
      }

    render(){
        
        let cuerpo = this.state.talleres.map((taller) => {    
            if(this.props.match.params.id==taller.id){

                var textito =  taller.acf.descripcion;
                return(
                <Row>
                
                <Col className="divnoticiaprincipal">
                <p></p>
                <img src={taller.acf.imagen.url} width="100%" height="400px"/>
                <p></p>
                <Row>
                <Col xs={this.state.numerotamaño}>
                <h3 className="titulonoticia">{taller.title.rendered}</h3>
                <p></p>
                <p className="textonoticia"><div dangerouslySetInnerHTML={{__html: textito }}/></p>
                </Col>
                </Row>
                </Col>
                </Row>
                );
            }
        })
        return (
            <Container>          
            <Row>
                <p></p>
            </Row>
            <Row>
                <p></p>
            </Row>
            <Row>
                <p></p>
            </Row>
            {cuerpo}
            <Row>
                <p></p>
            </Row>      
            <Row>
                <p></p>
            </Row>      
            <Row>
                <p></p>
            </Row>      
            
            </Container>
        );
    }
}

export default Workshopdetail;