import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import Socials from "../components/socials"


class NavbarItem extends Component {
  constructor(props) {
    super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
      collapsed: true,
      };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
 render() {
  const collapsed = this.state.collapsed;
  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed bg-dark' : 'navbar-toggler navbar-toggler-right bg-dark';
  return (
    
    <nav className="navbar navbar-expand-md navbar-dark bg-white transparent-nav fixed-top">
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-white transparent-nav fixed-top"></nav> */}
      <div className="container">
        <div className = "name-header">
        <a className="navbar-brand" href="/">Enduring Steward</a>
        <div className = "icons" >
         <Socials/>
            </div>
          </div>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
       
          
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
             
              <Link 
                // onSetActive = {true}
                activeClass="active" 
                spy={true} 
                smooth={true} 
                // className="nav-link" 
                to="section1"
                offset={-750}
                duration={500}
                onClick = {this.scrollToTop}
                >Home</Link>
              </li>
              <li className="nav-item">
              <Link 
                spy={true} 
                smooth={true} 
                // className="nav-link" 
                to="section2"
                offset={-1400}
                duration={500}
                activeClass="active"
                 >Pictures</Link>
              </li>
              <li className="nav-item">
              <Link 
                spy={true} 
                smooth={true} 
                // className="nav-link" 
                to="section3"
                offset={-820}
                duration={500}
                activeClass="active"
                 >Videos</Link>
              </li>
              <li className="nav-item">
              <Link 
                spy={true} 
                smooth={true} 
                // className="nav-link" 
                to="section4"
                offset={-650}
                duration={500}
                activeClass="active"
                 >About</Link>
              </li>
              <li className="nav-item">
              <Link 
                spy={true} 
                smooth={true} 
                // className="nav-link" 
                to="section5"
                offset={-300}
                duration={500}
                activeClass="active"
                 >Contact</Link>
              </li>
              
            </ul>
          </div>
      </div>
      {/* <img src = {instagram}></img> */}
    </nav>
    );
  }
}
export default NavbarItem;