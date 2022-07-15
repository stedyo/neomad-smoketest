import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
              <div className="container">
                  <a className="navbar-brand" href="/">
                     {/* <img src={this.props.isColorLogo && this.props.isColorLogo === true ? "assets/img/logo-color.png" : "assets/img/logo-white.png"}
                      alt="logo" className="img-fluid" />*/}
                      <img src={"assets/img/neomad2.svg"} width="180px"
                      alt="logo" className="img-fluid" />

                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="ti-menu"></span>
                  </button>

                  <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto menu">
                          <li><a href="#home" className="page-scroll"> Home</a></li>
                          <li><a href="#about" className="page-scroll">About</a></li>
                          <li><a href="#features" className="page-scroll">Features</a></li>
                          {/*<li><a href="/#" className="dropdown-toggle">Pages</a>
                              <ul className="sub-menu">
                                  <li><a href="/#" className="dropdown-toggle-inner">Login & Sign Up</a>
                                      <ul className="sub-menu">
                                          <li><a href="login">Login Page</a></li>
                                          <li><a href="signup">Signup Page</a></li>
                                          <li><a href="resetPassword">Reset Password</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="/#" className="dropdown-toggle-inner">Utilities</a>
                                      <ul className="sub-menu">
                                          <li><a href="faq">FAQ Page</a></li>
                                          <li><a href="404">404 Page</a></li>
                                          <li><a href="comingSoon">Coming Soon</a></li>
                                          <li><a href="thankYou">Thank You Page</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="/#" className="dropdown-toggle-inner">Team</a>
                                      <ul className="sub-menu">
                                          <li><a href="team">Our Team Members</a></li>
                                          <li><a href="singleTeam">Team Member Profile</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="/#" className="dropdown-toggle-inner">Our Blog</a>
                                      <ul className="sub-menu">
                                          <li><a href="blogDefault">Blog Grid</a></li>
                                          <li><a href="blogNoSidebar">Blog No Sidebar</a></li>
                                          <li><a href="blogLeftSidebar">Blog Left Sidebar</a></li>
                                          <li><a href="blogRightSidebar">Blog Right Sidebar</a></li>
                                          <li><a href="blogSingleLeftSidebar">Details Left Sidebar</a></li>
                                          <li><a href="blogSingleRightSidebar">Details Right Sidebar</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="aboutUs">About Us </a></li>
                                  <li><a href="contactUs">Contact Us</a></li>
                              </ul>
                          </li>*/}
                          <li><a href="#screenshots" className="page-scroll">Screenshots</a></li>
                          {/*<li><a href="#process" className="page-scroll">Process</a></li>
                          <li><a href="#pricing" className="page-scroll">Pricing</a></li>*/}
                          <li><a href="#contact" className="page-scroll">Talk to Us</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
