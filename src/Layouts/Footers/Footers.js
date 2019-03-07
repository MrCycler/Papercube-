import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import './Footers.css';

class Footers extends Component {
  constructor(){
    super();
    this.state = {
        logos:[],
    }}

    componentDidMount() {
      
      let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/logos_footer?_embed"
      fetch(dataUrl)
      .then(res => res.json())
      .then(res => {
          this.setState({
              logos: res
          })
      })
  }

    render() {

      let urls = this.state.logos.map((logo,index) => {
        return logo.acf.imagen_logo.url;
     })

      return (

        <div className="footer">
        <Container>
          <Row >
            
            <Col xs="6">
            <p></p>
            <h6>ADEX – ASOCIACIÓN DE EXPORTADORES:</h6>
             <p> <MaterialIcon icon="room" color='white' /> Sede central: Av. Javier Prado Este 2875 San Borja, Lima - Perú</p>
            <p> <MaterialIcon icon="local_phone" color='white'/> Contacto: 618-3333 Anexo: 5303</p>
            <p><MaterialIcon icon="mail" color='white'/> Correo electrónico: <a href="mailto:alinvest5@adexperu.org.pe" className="aaa">alinvest5@adexperu.org.pe</a></p>
          
           </Col>

           

            <Col xs="6">
            <p></p>
            <h6>CON EL APOYO DE:</h6>
            

            <Row>
           <Col>
            <div className="footerdivs">
            <p></p>
            <img className="marcacss" src={urls[0]} alt="" width="120%" height="100%"/>
            </div>
           </Col>
            <Col>
            <div className="footerdivs">
            <p></p>
            <img className="marcacss" src={urls[1]} alt="" width="120%" height="100%"/>
            </div>
            </Col>
            <Col>
            <div className="footerdivs">
            <p></p>
            <img className="marcacss" src={urls[2]} alt="" width="120%" height="95%" />
             </div>
             </Col>
            </Row>

            
          
            </Col>
            </Row>


            <Row>
            
              <Col>
              <p className="centertext">Copyright © 2019 Papercube Consulting S.A.C</p>
              </Col>
            </Row>
        </Container>
        </div>

      );
    }
  }
  
  export default Footers;