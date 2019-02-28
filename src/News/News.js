import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './News.css';
import Newspostprob from './NewsPost/Newspostprob';
import Newdetail from '../Newsdetail/Newdetail';
import { Badge } from 'reactstrap';


class News extends Component{
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            numerotamaño2 :[], 
            noticias: [],
            imagenback:[],
            tipstatus:["light","primary","primary","primary","primary"],
            categoriactiva:"all",
           
        }
        this.Categoria0Handler = this.Categoria0Handler.bind(this);
        this.Categoria1Handler = this.Categoria1Handler.bind(this);
        this.Categoria2Handler = this.Categoria2Handler.bind(this);
        this.Categoria3Handler = this.Categoria3Handler.bind(this);
        this.Categoria4Handler = this.Categoria4Handler.bind(this);
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

        let dataUrl2 = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/imagen_fondo?_embed"
        fetch(dataUrl2)
        .then(res => res.json())
        .then(res => {
            this.setState({
                imagenback: res
            })
        })
    }



    resize() {
        

        if(window.innerWidth>1250){
          this.setState({numerotamaño: 4,numerotamaño2:6});
         
        }
        else
        {
            if (window.innerWidth<700){
            this.setState({numerotamaño: 12, numerotamaño2:12});
            
            }
            else
            {
            this.setState({numerotamaño: 6, numerotamaño2:6});  
            
            }
        }
      }


      Categoria0Handler(){
        this.setState({tipstatus:["light","primary","primary","primary","primary"]});
        this.setState({categoriactiva:"all"});
      }

      Categoria1Handler(){
        this.setState({tipstatus:["primary","light","primary","primary","primary"]});
        this.setState({categoriactiva:"Reconocimientos"});
      }

      Categoria2Handler(){
        this.setState({tipstatus:["primary","primary","light","primary","primary"]});
        this.setState({categoriactiva:"Ferias"});
      }

      Categoria3Handler(){
        this.setState({tipstatus:["primary","primary","primary","light","primary"]});
        this.setState({categoriactiva:"Ruedas de Negocio"});
      }

      Categoria4Handler(){
        this.setState({tipstatus:["primary","primary","primary","primary","light"]});
        this.setState({categoriactiva:"Talleres"});
      }


    render() {
      
      
        let noticias = this.state.noticias.map((noticia,index) => { 

            if (this.state.categoriactiva=="all"){
            return (
            <Newspostprob rendernumber={this.state.numerotamaño} 
            rendernumber2={this.state.numerotamaño2} 
            cimagen={noticia.acf.imagen_carta.url}
            titulo={noticia.title.rendered}
            texto={noticia.acf.contenido}
            id={noticia.id}/>  
            );
            }
            else{

                if (this.state.categoriactiva==noticia.acf.categoria){
                    return (
                    <Newspostprob rendernumber={this.state.numerotamaño} 
                    rendernumber2={this.state.numerotamaño2} 
                    cimagen={noticia.acf.imagen_carta.url}
                    titulo={noticia.title.rendered}
                    texto={noticia.acf.contenido}
                    id={noticia.id}/>  
                    );
                    }

            }
            })

            //Cuenta el número de noticias
            let noticiero = this.state.noticias.map((noticia,index) => { 

                if (this.state.categoriactiva=="all"){
                return 1;
                }
                else{
    
                    if (this.state.categoriactiva==noticia.acf.categoria){
                        return 1;}
                    else{
                        return 0;
                    }
    
                         }
                })
         
            let nn = noticiero.reduce((x, y) => x + y, 0);
            let divisal;
            if(nn==0){  
                divisal = <div className="deve"></div>
            }
            else{
                if(nn<4){
                    divisal = <div className="divi"></div>
                }
                else{
                    divisal = <p></p>
                }
            }

            let ImageURL = this.state.imagenback.map((imgbkg,index) => {
                if (imgbkg.acf.imagen_fondo!=0)
                {return imgbkg.acf.imagen_fondo.url;}
                else
                {return;}
             })


            return (
        
            <Switch>
                <Route exact path='/noticias' render={()=>
               
                <Container 
                style={{backgroundImage: "url("+ ImageURL +")",
                backgroundSize:"cover",}}
                >
                 <Row> <p></p>
                </Row>
                <Row> <p></p>
                </Row>
                <Row> <p></p>
                </Row>
                <Row> <p></p>
                </Row>
                <Row> <p></p>
                </Row>

                <Row className="Flexdiv" >
                    
                    <h4><Badge color={this.state.tipstatus[0]} 
                    className="chip"
                    onClick={this.Categoria0Handler}>Todos</Badge></h4>
                    
                    <h4><Badge color={this.state.tipstatus[1]}
                    className="chip" 
                    onClick={this.Categoria1Handler}>Reconocimientos</Badge></h4>

                    <h4><Badge color={this.state.tipstatus[2]} 
                    className="chip"
                    onClick={this.Categoria2Handler}>Ferias</Badge></h4>

                    <h4><Badge color={this.state.tipstatus[3]} 
                    className="chip"
                    onClick={this.Categoria3Handler}>Ruedas de Negocio</Badge></h4>

                    <h4><Badge color={this.state.tipstatus[4]} 
                    className="chip"
                    onClick={this.Categoria4Handler}>Talleres</Badge></h4>

                </Row>
        
                <Row className="letrasnoticia"> 
                    <Col xs="1">
                    </Col>
                    <Col xs="11">
                    <p></p>
                    <p></p>
                    </Col>
                </Row>
    
                <Row >
                {noticias}
                </Row>
                
                <Row> {divisal}
                </Row>
                
                </Container>

              

                }/>
                
                <Route path='/noticias/:id' 
                component={Newdetail}/>
                
            </Switch>
            
        );
    }
}

export default News;