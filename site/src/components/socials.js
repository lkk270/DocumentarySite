
import React, { Component } from "react";

  class Socials extends Component {
    render() {
      return (
        // <div className={"section" + (this.props.dark ? "-top" : "")}>
           <div className="socials">
           <a target="_blank" href = "https://www.instagram.com/enduringstewards/"><img src={require("../images/instagram.png")} className = "instagram"/></a>
            <a target="_blank" href = "https://www.flickr.com/photos/148106969@N04/albums"><img src={require("../images/flickr.png")} className = "flickr"/></a>
            <a target="_blank" href = "https://www.youtube.com"><img src={require("../images/youtube.png")} className = "instagram"/></a>

      </div>
      );
    }
  }
  
  export default Socials;