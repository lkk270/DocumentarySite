import React, { Component } from "react";
import { Carousel } from 'react-bootstrap/';
import a from "../../src/images/a.jpg"
import b from "../../src/images/b.jpg"
import c from "../../src/images/c.jpg"
import d from "../../src/images/d.jpg"
import e from "../../src/images/e.jpg"
import { NavBar } from '../../src/components/navBar'
import Gallery from 'react-photo-gallery';

import {
    MDBRow,
    MDBCol,
    MDBContainer
  } from "mdbreact";
  
  class Collage extends Component {
    render() {
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mb-3">
            <img src={a} className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-3">
            <img src={b}  className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src={c}  className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src={d} className="img-fluid z-depth-1" alt="" />
            </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6" className="mb-3">
            <img src={e}  className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol md="6" className="mb-3">
            <img src={a} className="img-fluid z-depth-1" alt="" / >
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
    }
  }
  
  export default Collage;