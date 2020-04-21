import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
// import {MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import {MDBView} from "mdbreact";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { NavBar } from '../../components/navBar'
// import { CarouselItem } from '../../components/carousel'
import "../../styles/navBar.css";
import NavbarItem from "../../components/navBar";
import Section from "../../components/section";
// import Collage from "../../components/collage"
// var {instagram} = require( "../../images/e.jpg");
import Socials from "../../components/socials"
import "../../styles/main.css"

const SmoothScroll = () => (
    <div>
      <AnchorLink offset = '100' href='#things'>Things</AnchorLink>
      <AnchorLink href='#stuff'>Stuff</AnchorLink>
   
      <section style={{ position: "absolute", top: "222%" }}id='things'>
        <h2>Things</h2>
      </section>
      <section id='stuff'>
        <h2>Stuff</h2>
      </section>
    </div>
  )

class Main extends Component { 
    constructor(props){
        super(props);
        this.state = {
            collapseID: "",
            isShowing: false
          };
    }

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  
render() {
  const blurIds = ['clogoBtn', 'logInBtn', 'signUpBtn'];
  const overlay = (
  <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
  );

  

  return (
    
      <div className="content" id = "landing">
          <Route path='/' render={props =>
      <div>
          
      </div>
      } />
         <div className="App">
        <NavbarItem />
        {/* <CarouselItem/> */}
        {/* // <Collage/>  */} 
        <Section
          title=""
          // subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section1"
          component = {"carousel"}
        />
         
        <Section
          title="Pictures"
          // subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section2"
          component = {"collage"}
        /> 
        
        <Section
          title="Videos"
          // subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section3"
          component = {"video"}
        />
        <Section
          title="About"
          // subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section4"
          component = {"about"}
        />
        <Section
          title="Contact"
          // subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section5"
          component = {"contact"}
        />
      </div>
      
        {/* <NavBar activeAbout = {false} activeContact = {false}/>  */}
        
      

  <MDBView>
            
          <div className = "bullets" id="info">
              <h6 className="subtext-header mt-2 mb-4" style={{"position": "absolute", "left": "5%"}}>
              © 2020 Enduring Stewards 
              </h6>
            <Socials/>
          </div>
       
      
  </MDBView>

  </div>
  );
}
          
}
 
export default Main;

