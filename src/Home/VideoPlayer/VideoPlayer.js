import React, { Component } from 'react';
import './VideoPlayer.css'

class VideoPlayer extends Component{
    render(){
        return (
            <div className="videoplayer">
                <iframe className="video" src="https://www.youtube.com/embed/orTrua9DeDA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        );
    }
}

export default VideoPlayer;