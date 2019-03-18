import React, { Component} from 'react';
import {Row,Col,Container} from 'reactstrap';
import './Alliance.css'

const aliancelist = [
    [0,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/logo-7-300x80.png'],
    [1,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/logo-7-300x80.png'],
    [2,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/logo-7-300x80.png'],
    [3,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/logo-7-300x80.png'],
    [4,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/logo-7-300x80.png'],
    [5,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/logo-7-300x80.png']
]

class Alliance extends Component{
    constructor(){
        super();
        this.state = {
            numerotamaño: [],
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }


    resize() {
        if(window.innerWidth<800){
            this.setState({numerotamaño: 4});
            if(window.innerWidth<450){
                this.setState({numerotamaño: 6});
            }
        }
        else
        {
            this.setState({numerotamaño: 2});
        }
      }


    render() {
        let aliados = aliancelist.map((aliado,index) => {
            return (
                <Col xs={this.state.numerotamaño}>
                    <img className="alliance__item__image" src={aliado[1]}/>
                </Col>
            )
        })

        return (
            <Container>
                <Row className="aliancetitletext"> 
                    <Col xs="12">
                        <p>Nuestros clientes respaldan nuestro trabajo:</p>
                    </Col>
                </Row>
              
                <Row>
                    {aliados}
                </Row>
              
            </Container>
        )
    }
}

export default Alliance;