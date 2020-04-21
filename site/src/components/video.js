import React from 'react';
import ReactPlayer from "react-player"
 
class Video extends React.Component {
  render() {
    const opts = {
      height: '700',
      width: '1300',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return (
    <ReactPlayer url = "https://www.youtube.com/watch?v=Hp4xjixyUVA"   
    height = "700px"
    width = "100%"
     className = "video"/>);
  }
 
//   _play(event){
//     event.target.playVideo();
//   }
//   _onReady(event) {
//     // access to player in all event handlers via event.target

//     event.target.playVideo();
//   }
}
export default Video;