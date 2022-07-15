import React from "react";

class Feature extends React.Component {
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
        <div id="features" className={"feature-section ptb-100 " + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-9">
                        <div className="section-heading text-center mb-5">
                            <h2>Neomad Features</h2>
                            <p>Well, we are just getting started, therefore our subset of features include - but are not limited to:</p>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-heart icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Dating</h5>
                                        <p>Let us know your travel itinerary. Choose your dating style. Let us present to you amazing people to match.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-home icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Sharing Accomodation</h5>
                                        <p>Do you want to rent a house on Italy's Amalfi Coast for the summer? Some people want that too! Allow us to connect you to them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-face-smile icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Meet Ups</h5>
                                        <p>Easily create and join group or events to meet people near you with same interests. Go hiking, go dancing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                        <div className="position-relative pb-md-5 py-lg-0">
                            <img alt="placeholder" src="assets/img/app-screenshots/3rd-mockup.svg" className="img-center img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-map-alt icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Favorites Around the World</h5>
                                        <p>How about having a bucket list based on other travelers' suggestions sounds to you? Find the hidden gems around the world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-wallet icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Best Deals</h5>
                                        <p>This is the feature where we work our asses off to get you discounted prices on your next adventures. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-star icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Effortless</h5>
                                        <p>Do everything at the touch of a button.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
