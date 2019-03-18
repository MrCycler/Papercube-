import React, { Component } from 'react';

import Capacitation from './Capacitation/Capacitation';

import{Col,Row,Container} from 'reactstrap';
import Servicesslider from './Servicesslider/Servicesslider'
import Sliders from './Sliders/Sliders';
import './Home.css'

class Home extends Component{

    constructor(){
        super();
        this.state = {
            numerotamaño :[], 
            video:[],

        }
        }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/video?_embed"
        fetch(dataUrl)
        .then(res => res.json())
        .then(res => {
            this.setState({
                video: res

            })
        })
    }

    resize() {
        if(window.innerWidth<900){
          this.setState({numerotamaño: 12});
        }
        else
        {
            this.setState({numerotamaño: 6});
        }
      }

    render() {
        console.log(this.state.video);

        let videolink = this.state.video.map((videox,index) => {
            return videox.acf.video_url;
         })

        return (
           <div>
              
                <Sliders />
                <Servicesslider/>
                <Capacitation />               
           
            </div>
        )
    }
}

export default Home;