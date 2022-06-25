import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="screenshots" className={"screenshots-section pb-100 " + (this.props.removeTop && this.props.removeTop === true ? '' : 'pt-100') + (this.props.isWhite && this.props.isWhite === true ? '' : ' gray-light-bg')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Apps Screenshots</h2>
                            <p>
                            These are low-fidelity screenshots. Just for you to feel what is coming soon. 
                            <br />
                            Think about them as being the <b>Bruce Banner</b> while we are developing <b>The Hulk</b>.
                            </p>
                            </div>
                    </div>
                </div>
                <div className="screenshot-wrap">
                    <div className="screenshot-frame"></div>
                    <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                        <img src="assets/img/app-screenshots/ycomms-mockup_00004.svg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/app-screenshots/ycomms-mockup_00006.svg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/app-screenshots/ycomms-mockup_00007.svg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/app-screenshots/ycomms-mockup_00008.svg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/app-screenshots/ycomms-mockup_00009.svg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/app-screenshots/ycomms-mockup_00010.svg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/app-screenshots/ycomms-mockup_00013.svg" className="img-fluid" alt="screenshots" />
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
}))(Screenshots);