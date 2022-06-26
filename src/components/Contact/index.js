import React, { Component } from "react";
import { connect } from "react-redux";
import { submitContact } from "../../actions/index";
import _data from "../../data";
import Lottie from 'react-lottie-player'

import lottieJson from "../Lottie/31548-robot-says-hello.json"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disableContactBtn: false,
      contactBtnText: "Send Message",
      contact: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.message = this.message.bind(this);
  }

  /**
   * When we click on Send button, changeBtnText function will help to change text
   * @param contactBtnText
   */
  changeBtnText = contactBtnText => {
    this.setState({ contactBtnText });
  };

  /**
   * Get all form data and set to the state
   * @param contactBtnText
   */
  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  /**
   * Submit the form and dispatch to the store
   * @param contactBtnText
   */
  handleSubmit(event) {
    event.preventDefault();

    let error = false;
    if(!(this.state.name && this.state.email && this.state.message)) {
      error = true;
    }

    if(!error) {
      // disable the button
      this.setState({ disableContactBtn: true });

      // get action
      const contactAction = submitContact(this.state);

      // Dispatch the contact from data
      this.props.dispatch(contactAction);

      // added delay to change button text to previous
      setTimeout(
        function() {
          // enable the button
          this.setState({ disableContactBtn: false });

          // change to button name
          this.changeBtnText("Send Message");

          // get action again to update state
          const contactAction = submitContact(this.state);

          // Dispatch the contact from data
          this.props.dispatch(contactAction);

          // clear form data
          this.setState({
            name: "",
            email: "",
            message: ""
          });

          // Set success message
          this.message(error);
        }.bind(this),
        3000
      );
    } else {
      // Set error message
      this.message(error);
      
      // enable the button
      this.setState({ disableContactBtn: false });

      // change to button name
      this.changeBtnText("Send Message");
    }
    
  }

  message(error) {
    const messageBox = document.querySelector('#contact .message-box');
    if (messageBox.classList.contains("d-none")) {
      messageBox.classList.remove("d-none");
    }
    messageBox.classList.add("d-block");
    if(error) {
      if (messageBox.classList.contains("alert-success")) {
        messageBox.classList.remove("alert-success");
      }
      messageBox.classList.add("alert-danger");
      messageBox.innerHTML = 'Found error in the form. Please check again.';
    }
    else {
      if (messageBox.classList.contains("alert-danger")) {
        messageBox.classList.remove("alert-danger");
      }
      messageBox.classList.add("alert-success");
      messageBox.innerHTML = 'Form submitted successfully';
    }
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      contact: _data.contact
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="contact" className="contact-us-section ptb-40">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-12 pb-3 mb-4 message-box d-none alert alert-success"></div>
                    <div className="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                    <Lottie
                      loop
                      animationData={lottieJson}
                      play
                      style={{ width: "100%", height: "auto" }}
                    />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="contact-us-content">
                            <h2>{this.state.contact.title}</h2>
                            <p className="lead">{this.state.contact.description} {String.fromCodePoint("0x1F680")} {String.fromCodePoint("0x1F643")}</p>
                            <hr className="my-5" />
                            <ul className="contact-info-list">
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <span className={(this.state.contact.emailIcon) + " color-primary rounded-circle p-3"}></span>
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1"  style={{letterSpacing: "0.09em"}}>{this.state.contact.emailTitle}</h5>
                                        <p>
                                          {this.state.contact.email}
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <span className={(this.state.contact.addressIcon) + " color-primary rounded-circle p-3"}></span>
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1">{this.state.contact.addressTitle}</h5>
                                        <p>
                                        {this.state.contact.address}
                                        </p>
                                    </div>
                                </li>
                            </ul>
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
}))(Contact);
