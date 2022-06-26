import React, { Component } from "react";
import _data from "../../data";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      testimonial: _data.testimonial
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="position-relative gradient-bg ptb-100">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6 col-lg-5 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                      <div className="testimonial-heading text-white">
                          <h2 className="text-white">What Our Client Say About Ycomms</h2>
                          <p>Collaboratively actualize excellent schemas without effective models. Synergistically engineer functionalized applications rather than backend e-commerce.</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                      <div className="testimonial-content-wrap">
                          <img src="assets/img/testimonial-arrow-top.png" className="img-fluid testimonial-tb-shape shape-top" alt="testimonial shape" />
                          <div className="owl-carousel owl-theme client-testimonial-1 dot-indicator testimonial-shape">
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/1.jpg" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">John Charles</h5>
                                              <span>Head Of Admin</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>Interactively optimize fully researched expertise vis-a-vis plug-and-play relationships. Intrinsicly develop viral core competencies for fully tested customer service. Enthusiastically create next-generation growth strategies and.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/2.jpg" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">Arabella Ora</h5>
                                              <span>HR Manager</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/3.jpg" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">Jeremy Jere</h5>
                                              <span>Team Leader</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>Objectively synthesize client-centered e-tailers for maintainable channels. Holisticly administrate customer directed vortals whereas tactical functionalities. Energistically monetize reliable imperatives through client-centric.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/4.jpg" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">John Charles</h5>
                                              <span>Marketing Head</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>Enthusiastically innovate B2C data without clicks-and-mortar convergence. Monotonectally deliver compelling testing procedures vis-a-vis B2B testing procedures. Competently evisculate integrated resources whereas global.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <img src="assets/img/testimonial-arrow-bottom.png" className="img-fluid testimonial-tb-shape shape-bottom" alt="testimonial shape" />
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonial;
