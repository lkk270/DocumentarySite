import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";


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

