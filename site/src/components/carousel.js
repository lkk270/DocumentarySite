import React, { Component } from "react";
import { Carousel } from 'react-bootstrap/';
import a from "../../src/images/a.jpg"
import b from "../../src/images/b.jpg"
import c from "../../src/images/c.jpg"
import d from "../../src/images/d.jpg"
import e from "../../src/images/e.jpg"
import { NavBar } from '../../src/components/navBar'
import Collage from "../components/collage"

import "../styles/carousel.css"

class CarouselItem extends Component {
    constructor(props){
        super(props);
    }
  

    render(){
        return(
        <div>
        <Carousel className = "carousel">
        
        <Carousel.Item className = "carousel-item">
    
        <img
        className="d-block"
        src= {a}
        alt="First slide"
        />
        <Carousel.Caption>
        <p><h3>"QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE"</h3></p>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    
        <img
        className="d-block"
        src= {b}
        alt="Second slide"
        />

        <Carousel.Caption> 
        <p><h3>"QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE"</h3></p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption> 
    </Carousel.Item>
    <Carousel.Item>
    
        <img
        className="d-block"
        src= {c}
        alt="Third slide"
        />

        <Carousel.Caption>
        <p><h3>"QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE"</h3></p>
        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    
        <img
        className="d-block"
        src= {d}
        alt="Fouth slide"
        />

        <Carousel.Caption>
        <p><h3>"QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE"</h3></p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
  
        <img
        className="d-block"
        src= {e}
        alt="Fifth slide"
        />

        <Carousel.Caption>
        <p><h3>"QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE</h3></p>
        <p><h3>QUOTE QUOTE QUOTE QUOTE"</h3></p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
     <Collage/>
     </div>
        )
    }
    
}

  export { CarouselItem };