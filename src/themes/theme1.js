import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection1";
import Promo from "../components/PromoSection";
import AboutUs from "../components/AboutUs/AboutUs1";
import AboutUsExt from "../components/AboutUs/AboutUs1Ext";
import Download from "../components/CallToAction/Download";
import Feature from "../components/Features";
import Screenshots from "../components/Screenshots";
import WorkProcess from "../components/WorkProcess";
import Counter from "../components/CallToAction/Counter";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import TeamMember from "../components/TeamMember";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
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
          <AboutUsExt />
          <Download />
          <Feature />
          <Screenshots />
          <WorkProcess />
          <Counter />
          <Pricing />
          <Faq />
          <Testimonial />
          <TeamMember />
          <Contact />
          <Blog />
          <TrustedCompany />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Theme;
