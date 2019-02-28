import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Newdetail.css';
import Newslider_prob from '../Home/Newslider/Newslider_prob';

class Newdetail extends Component{
    constructor(){
        super();
        this.state = {
            noticias: [],
            numerotamaño :[], 
        }
        }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
  
        let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/noticias?_embed"
        fetch(dataUrl)
        .then(res => res.json())
        .then(res => {
            this.setState({
                noticias: res
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
        
        let cuerpo = this.state.noticias.map((noticia) => {    
            if(this.props.match.params.id==noticia.id){
                var textito =  noticia.acf.contenido;

                var download_link = "";
                var text_link ="";
                if(noticia.acf.archivo_noticia!=null)
                { download_link = noticia.acf.archivo_noticia.url;
                    text_link = "Archivo adjunto";
                }

                return(
                <Row>
                
                <Col className="divnoticiaprincipal">
                <p></p>
                <img src={noticia.acf.imagen_principal.url} width="100%" height="400px"/>
                <p></p>
                <Row>
                <Col xs={this.state.numerotamaño}>
                <h3 className="titulonoticia">{noticia.title.rendered}</h3>
                <p></p>
                <p className="textonoticia"><div dangerouslySetInnerHTML={{__html: textito }}/></p>
                <p></p>
                <a href={download_link}>{text_link}</a>
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

export default Newdetail;