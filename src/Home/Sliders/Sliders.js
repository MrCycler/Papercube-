import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
//import './Sliders.css';
const papercubeimages = [
  [0,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/A.jpg'],
  [1,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/PHOTO-2018-07-19-15-29-31.jpg'],
  [2,'http://innovadex.adexperu.org.pe/back/wp-content/uploads/2018/07/IMG_1058.jpg'],
]

class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, 
     sliderimages : [],
     altText: '',
     nslides: 3,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
   
   let dataUrl = "http://innovadex.adexperu.org.pe/back/wp-json/wp/v2/titulares?_embed"
   fetch(dataUrl)
   .then(res => res.json())
   .then(res => {
       this.setState({
           sliderimages: res
       })
   })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.nslides - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.nslides - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    /*
    let noticias = this.state.noticias.map((noticia,index) => {    
      return (
      );})*/

    let slides = papercubeimages.map((image) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={image[0]}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        <img src={image[1]} alt='' width="100%" height="100%"/>
          <CarouselCaption className="text-danger" captionText="" captionHeader="" />
        </CarouselItem>
      );
    });


    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 450px;
                background: black;
              }`
          }
        </style>
        
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Sliders;