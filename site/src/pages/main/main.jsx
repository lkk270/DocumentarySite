import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
// import {MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import {MDBView} from "mdbreact";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { NavBar } from '../../components/navBar'
import { CarouselItem } from '../../components/carousel'
import "../../styles/navBar.css";
import NavbarItem from "../../components/navBar";
import Section from "../../components/section";
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
        <CarouselItem/>
        <Section
          title="Section 1"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section5"
        />
      </div>
        {/* <NavBar activeAbout = {false} activeContact = {false}/>  */}
        
      

  <MDBView>
            
          <div className = "bullets" id="info">
              <h4 className="subtext-header mt-2 mb-4">
              DOCUMENTARY WEBSITE 
              </h4>
          </div>
       
      
  </MDBView>

  </div>
  );
}
          
}
 
export default Main;

