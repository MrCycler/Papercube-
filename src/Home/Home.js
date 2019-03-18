import React, { Component } from 'react';
import Capacitation from './Capacitation/Capacitation';
import Servicesslider from './Servicesslider/Servicesslider'
import Sliders from './Sliders/Sliders';
import Alliance from './Alliance/Alliance';

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

                <Alliance />               

            </div>
        )
    }
}

export default Home;