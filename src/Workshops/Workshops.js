import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Badge } from 'reactstrap';
import './Workshops.css';
import Workshopost from './Workshopost/Workshopost';
import Workshopdetail from '../Workshopdetail/Workshopdetail';

class Workshops extends Component{
    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            numerotamaño2 :[], 
            talleres: [],
            imagenback:[],
            tipstatus:["light","primary","primary"],
            categoriactiva:"all",
            tallertexto:[],
        }  
        this.Categoria0Handler = this.Categoria0Handler.bind(this);
        this.Categoria1Handler = this.Categoria1Handler.bind(this);
        this.Categoria2Handler = this.Categoria2Handler.bind(this); 
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
        let dataUrl2 = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/talleres_texto?_embed"
        fetch(dataUrl2)
        .then(res => res.json())
        .then(res => {
            this.setState({
                tallertexto: res
            })
        })

        let dataUrl3 = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/imagen_fondo?_embed"
        fetch(dataUrl3)
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
        this.setState({tipstatus:["light","primary","primary"]});
        this.setState({categoriactiva:"all"});
      }

      Categoria1Handler(){
        this.setState({tipstatus:["primary","light","primary"]});
        this.setState({categoriactiva:"Innovadex Incubación"});
      }

      Categoria2Handler(){
        this.setState({tipstatus:["primary","primary","light"]});
        this.setState({categoriactiva:"Innovadex Aceleración"});
      }




    render() {
        let talleres = this.state.talleres.map((taller) => {  
        
        if (this.state.categoriactiva=="all"){
        return (
        
        <Workshopost rendernumber={this.state.numerotamaño} 
        cimagen={taller.acf.imagen_card.url}
        rendernumber2={this.state.numerotamaño2}
        titulo={taller.title.rendered}
        texto={taller.acf.descripcion}
        id={taller.id}/>  
        
        );
        }
        else{
            if (this.state.categoriactiva==taller.acf.tipo){
                return (
                    <Workshopost rendernumber={this.state.numerotamaño} 
                    cimagen={taller.acf.imagen_card.url}
                    rendernumber2={this.state.numerotamaño2}
                    titulo={taller.title.rendered}
                    texto={taller.acf.descripcion}
                    id={taller.id}/>  
                );
                }
        }
      })

      let tallertexto =  this.state.tallertexto.map((taller) => { return taller.acf.texto_taller;})

      //Cuenta el número de noticias
      let tallercitos = this.state.talleres.map((taller,index) => { 

        if (this.state.categoriactiva=="all"){
        return 1;
        }
        else{
            if (this.state.categoriactiva==taller.acf.tipo){
                return 1;}
            else{
                return 0;
            }

                 }
        })
 
    let nn = tallercitos.reduce((x, y) => x + y, 0);
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
                <Route exact path='/academy' render={()=>
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
                    onClick={this.Categoria1Handler}>Innovadex Incubación</Badge></h4>
                    <h4><Badge color={this.state.tipstatus[2]} 
                    className="chip"
                    onClick={this.Categoria2Handler}>Innovadex Aceleración</Badge></h4>

                </Row>

                <Row className="letrastaller"> 
                    <Col xs="1">
                    </Col>
                    <Col>
                    <p></p>
                    <p>{tallertexto}</p>
                    <p></p>
                    </Col>
                </Row>
    
                <Row>
 
                {talleres}
              
                </Row>
                
                <Row> {divisal}
                </Row>
                </Container>
                }/>
                
                <Route path='/academy/:id' 
                component={Workshopdetail}/>
                
            </Switch>
       
            
        );
    }
}

export default Workshops;