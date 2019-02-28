import React, { Component } from 'react';
import Slider from 'react-slick';

import { Card, CardDeck, CardTitle, CardBody, CardImg,CardSubtitle,
    CardLink} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './Newslider.css';
import { Link } from '../../../node_modules/react-router-dom';


/*Alternativa 1 : Slider de noticias*/

class Newslider_prob extends Component {

  constructor(){
    super();
    this.state = {
        noticias : [],
       noticiasmostradas:[],
    }
      }

      componentDidMount() {
           window.addEventListener("resize", this.resize.bind(this));
           this.resize();
          let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/noticias?per_page=4&orderby=date"
          fetch(dataUrl)
          .then(res => res.json())
          .then(res => {
              this.setState({
                  noticias: res
              })
          })
      }

      resize() {
        if(window.innerWidth<1000){
          this.setState({noticiasmostradas: 2});
        }
        else
        {
          this.setState({noticiasmostradas: 3});
        }
        if(window.innerWidth<500){
          this.setState({noticiasmostradas: 1});
        }
      }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.noticiasmostradas,
      slidesToScroll: 1
    };

    let noticias = this.state.noticias.map((noticia,index) => {    
          return (
          
            <Container>

            <Row>
            <Col>
            
            <Card body className="text-center" style={{ backgroundColor:'#003D71',borderColor: '#003D71'}}>
            <CardImg className="imagesize" top width="80%" src={noticia.acf.imagen_carta.url} alt="Card image cap" />
            <CardBody>
            <CardTitle className="letrascarta">{noticia.title.rendered}</CardTitle>
            <CardSubtitle className="letrascarta">{noticia.acf.autor}</CardSubtitle>
            <CardLink className="linktext"><Link to={"/noticias/"+noticia.id}>Más informacion</Link></CardLink>
            </CardBody>
            </Card>
            </Col> 
            </Row>
            </Container>
          );
    })

    return (
      <Container>

        <Row className="letrasnoticia"> 
                 
                <Col>
                <p></p>
                <h3>&nbsp;&nbsp; Últimas noticias:</h3>
                <p></p>
                </Col>
          </Row>

         <Row>
          <Col>
            <div className="separaciony"></div>
          </Col>
          </Row>

        <Row>
        <Col>
        <Slider {...settings}>
        
        {noticias}
        
        </Slider> 
        </Col>
       </Row>
       <Row>
       
        </Row>
      </Container>
        
        
      
        
    );
  }
}
/* Alternativa 2 - Noticias estaticas con Pagination
class Newslider_prob extends Component {
  render() {
  
    return (
      <Container>
      <Row>
      
      <Col>
      <CardDeck>
      <Card body className="text-center">
        <CardImg className="imagesize" top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardSubtitle>Special Title Treatment</CardSubtitle>
        <CardLink href="#">Card Link</CardLink>
        </CardBody>
      </Card>
      
    
      <Card body className="text-center">
        <CardImg className="imagesize" top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardSubtitle>Special Title Treatment</CardSubtitle>
        <CardLink href="#">Card Link</CardLink>
         
        </CardBody>
      </Card>
      
      <Card body className="text-center">
        <CardImg className="imagesize" top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardSubtitle>Special Title Treatment</CardSubtitle>
        <CardLink href="#">Card Link</CardLink>
         
        </CardBody>
      </Card>

      
      </CardDeck>
      </Col>
      
      </Row>
       <Row>
      <Col>
      <p></p>
    
      <Pagination className="centercard" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
      </Col>
     
      </Row>
      </Container>
      
  );

  }
}
*/

 
export default Newslider_prob;