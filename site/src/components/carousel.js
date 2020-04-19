import React, { Component } from "react";
import { Carousel } from 'react-bootstrap/';
import a from "../../src/images/a.jpg"
import b from "../../src/images/b.jpg"
import c from "../../src/images/c.jpg"
import d from "../../src/images/d.jpg"
import e from "../../src/images/e.jpg"
import { NavBar } from '../../src/components/navBar'

import "../styles/carousel.css"

class CarouselItem extends Component {
    constructor(props){
        super(props);
    }
  

    render(){
        return(
        
        <Carousel className = "carousel">
        
        <Carousel.Item className = "carousel-item">
    
        <img
        className="d-block w-100"
        src= {a}
        alt="First slide"
        />
        {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    
        <img
        className="d-block w-100"
        src= {b}
        alt="Second slide"
        />

        {/* <Carousel.Caption> */}
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    
        <img
        className="d-block w-100"
        src= {c}
        alt="Third slide"
        />

        {/* <Carousel.Caption> */}
        {/* <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    
        <img
        className="d-block w-100"
        src= {d}
        alt="Fouth slide"
        />
{/* 
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
  
        <img
        className="d-block w-100"
        src= {e}
        alt="Fifth slide"
        />

        {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
    </Carousel.Item>
    </Carousel>
        )
    }
}

  export { CarouselItem };