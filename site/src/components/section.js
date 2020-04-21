// import React from "react";
import React, { Component } from "react";
import Collage from "../components/collage"
import {CarouselItem} from "../components/carousel"

// function Section({ title, subtitle, dark, id }) {
//   return (

//   );
// }

  class Section extends Component {
    render() {
      return (
        // <div className={"section" + (this.props.dark ? "-top" : "")}>
           <div className="section">
            {this.props.component === "carousel" ? <CarouselItem/> : ""}
             {this.props.component === "c" ? <Collage/> : ""}
        <div className="section-content" id={this.props.id}>
       
            
            {/* {this.props.component === "carousel" ? <CarouselItem/> : ""} */}
          {/* <h1>{title}</h1>
          <p>{subtitle}</p> */}
          
        </div>
      </div>
      );
    }
  }
  
  export default Section;