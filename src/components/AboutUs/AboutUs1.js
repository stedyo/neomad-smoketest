import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <div className="overflow-hidden">
            <section id="about" className="about-us ptb-100 background-shape-img position-relative">
                <div className="animated-shape-wrap">
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                        <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                            <div className="about-content-left">
                                <h3>Our mission is to be the guru app on your exploring journey.</h3>
                                <p>There are over 35,000,000 digital nomads across the globe.
                                If this community were a country, it would rank #41 by population size, just after Canada and Morocco.</p>

                                <p><b>The questions are:</b></p>
                                <ul className="dot-circle pt-3">
                                    <li>How do you stay connected with this community?</li>
                                    <li>How do you find people to share accommodation and stay on a budget in cool places?</li>
                                    <li>How do you keep up with old hobbies such as hiking, and kayaking?</li>
                                    <li>How do you explore new exciting things such as dancing the bachata?</li>
                                    <li>How do you date another travelers? A like-minded person who can join you on this crazy journey?</li>
                                </ul>
                                <div className="row pt-3">
                                    <p> 
                                        <a href="https://abrotherabroad.com/digital-nomad-statistics/" target="_blank" rel="noopener noreferrer" alt="">Digital Nomad Statistics</a> say that the number #1 reason for a digital nomad to return home is loneliness.
                                        <br /><br /><b>Ycomms was born to fight this {String.fromCodePoint("0x1F93A")}</b>   
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-4">
                            <div className="about-content-right">
                                <img src="assets/img/app-screenshots/2nd-mockup.svg" alt="about us" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
