// import React from "react";
import React, { Component } from "react";
import Collage from "../components/collage"
import {CarouselItem} from "../components/carousel"
import Video from "../components/video"
import About from "../components/about"
import ContactForm from "../components/contact"

// function Section({ title, subtitle, dark, id }) {
//   return (

//   );
// }

  class Section extends Component {
    render() {
      return (
        // <div className={"section" + (this.props.dark ? "-top" : "")}>
           <div className="section">
              <h1 style = {{"textAlign": "center"}}>{this.props.title}</h1>
            {this.props.component === "carousel" ? <CarouselItem/> : ""}
             {this.props.component === "collage" ? <Collage/> : ""}
             {this.props.component === "about" ? <About/> : ""}
             {this.props.component === "video" ? <Video/> : ""}
             {this.props.component === "contact" ? <ContactForm/> : ""}
             
        <div className="section-content" id={this.props.id}>
       
            
            {/* {this.props.component === "carousel" ? <CarouselItem/> : ""} */}
         
          {/* <p>{subtitle}</p> */} 
          
        </div>
      </div>
      );
    }
  }
  
  export default Section;