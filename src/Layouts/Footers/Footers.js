import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
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

        <div className="letras">
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
              <hr className="line"/>
              <p></p>
              <p></p>
              <p className="centertext">La presente publicación ha sido elaborada con la asistencia de la Unión Europea. El contenido de la misma es responsabilidad exclusiva de ADEX y en ningún caso debe considerarse que refleja los puntos de vista de la Unión Europea</p>
              </Col>

            </Row>

            <Row>
              <Col>
              <p className="centertext">Todos los Derechos Reservados 2018</p>
              </Col>
              <Col>
              </Col>
              <Col>
              <p className="centertext">Hecho por: Papercube Consulting S.A.C</p>
              </Col>
            </Row>
        </Container>
        </div>

      );
    }
  }
  
  export default Footers;