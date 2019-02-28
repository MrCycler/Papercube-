import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import FontAwesome from 'react-fontawesome';
import './Social.css';

class Social extends Component {
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            numerotamaño2 :[], 
            social:[],
        }}


        componentDidMount() {
       
            window.addEventListener("resize", this.resize.bind(this)); 
            this.resize();
            let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/social?_embed"
            fetch(dataUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    social: res
                })
            })
        }

        resize() {
        

            if(window.innerWidth>1200){
              this.setState({numerotamaño: 4,numerotamaño2:4});
             
            }
            else
            {
                if (window.innerWidth<1000){
                this.setState({numerotamaño: 8, numerotamaño2:2});
                
                }
                else
                {
                this.setState({numerotamaño: 5, numerotamaño2:3});  
                
                }
            }
          }


    render() {

        let facebook = this.state.social.map((socialx,index) => {
            return socialx.acf.facebook;
         })
         let twitter = this.state.social.map((socialx,index) => {
            return socialx.acf.twitter;
         })
         let email = this.state.social.map((socialx,index) => {
            return socialx.acf.email;
         })

      return (

        <div className="social_area">
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
        <Row>
            <Col xs={this.state.numerotamaño2}>
            </Col>

            <Col>
            
            <h4 className="titulosocial">COMPARTE TU EXPERIENCIA EN</h4>
            <p></p>
            <Row>
            <Col></Col>
            <Col>
            <a href={facebook}><FontAwesome className="icono" size="2x" name="facebook" /></a>
            </Col>
            <Col>
            <a href={twitter}><FontAwesome className="icono" size="2x" name="twitter" /></a>
            </Col>
            <Col>
            <a href={"mailto:"+email}><FontAwesome  className="icono" size="2x" name="envelope" /></a>
            </Col>
            <Col></Col>
            </Row>

            </Col>
            
            <Col xs={this.state.numerotamaño2}>
            </Col>
        </Row>
        <Row><p></p>
        </Row>
        </Container>
        </div>

      );
    }
  }
  
  export default Social;