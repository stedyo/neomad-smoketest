import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      promo: _data.promo
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-heart icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Dating</h5>
                                    <p className="mb-0">Find someone to start a nomad life together, casually date people along the way, or even meet your free-spirit soulmate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-house-user icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Housing </h5>
                                    <p className="mb-0">Allow our artificial intelligence to cross your current and future locations with people who want to share accommodation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-people-arrows icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Meetups</h5>
                                    <p className="mb-0">Do not let your hobbies fall into oblivion. Find a cool group of people to go hiking, go dancing, go sightseeing, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-star icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Favorites</h5>
                                    <p className="mb-0">How about having all the forenamed benefits indexed inside your pocket, easily accessible at any moment? Cool or awesome?!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(PromoSection);
