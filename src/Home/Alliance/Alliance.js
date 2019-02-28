import React, {Component} from 'react';

import './Alliance.css'

class Alliance extends Component{
    constructor(){
        super();
        this.state = {
            aliados : []
        }
    }

    componentDidMount() {
        let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/aliados?_embed"
        fetch(dataUrl)
        .then(res => res.json())
        .then(res => {
            this.setState({
                aliados: res
            })
        })
    }

    render() {
        let aliados = this.state.aliados.map((aliado,index) => {
            return (
                <div className="alliance__item">
                    <img className="alliance__item__image" src={aliado.acf.imagen.sizes.medium}/>
                </div>
            )
        })

        return (
            <div className="alliance">
                <h2 className="alliance__title">CONOCE NUESTROS ALIADOS</h2>
                <div className="alliance__item-area">
                    {aliados}
                </div>
            </div>
        )
    }
}

export default Alliance;