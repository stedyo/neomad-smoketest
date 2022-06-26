import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection1";
import Promo from "../components/PromoSection";
import AboutUs from "../components/AboutUs/AboutUs1";
import Feature from "../components/Features";
import Screenshots from "../components/Screenshots";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero />
          <Promo />
          <AboutUs />
          <Feature />
          <Screenshots />
          <Contact />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Theme;
