import React from "react";
import validator from 'validator'
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";



class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            message: "",
            showMessage: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormValueChange(inputName, event) {
        let stateValue = {};
        stateValue[inputName] =
        event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        this.setState(stateValue);
    }

    handleSubmit(event) {

        event.preventDefault();
       
        if(validator.isEmail(this.state.email)){
            const subscribeAction = subscribe(this.state);

            // Dispatch the contact from data
            if(this.props.dispatch(subscribeAction)){
                this.setState({message: "Everything went fine. We will keep you up to date :)", showMessage : true})
            } 
        
        } else {
            this.setState({message: "Please, insert a valid e-mail :)", showMessage: true})
        }
    
    }



  render() {
    return (
      <React.Fragment>
        <footer className={"footer-1 gradient-bg ptb-60 " + (this.props.withoutNewsletter && this.props.withoutNewsletter  === true ? "" : "footer-with-newsletter" )}>
        {!(this.props.withoutNewsletter && this.props.withoutNewsletter  === true ) && (
        <div className="container">
            <div className="row newsletter-wrap primary-bg rounded shadow-lg p-5">
                <div className="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
                    <div className="newsletter-content text-white">
                        <h5 className="mb-0 text-white">Subscribe and be notified when we release the app</h5>
                        <p className="mb-0">We promise not to spam you.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <form className="newsletter-form position-relative" method="post" onSubmit={this.handleSubmit}>
                        <input value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} type="text" className="input-newsletter form-control" placeholder="Enter your email" name="email" required="" />
                        <button type="submit" className="disabled"><i className="fas fa-paper-plane"></i></button>
                    </form>
                    
                    {this.state.showMessage &&
                        <p style={{padding: "10px"}}>
                            {this.state.message}
                        </p>
                    }
                </div>
            </div>
        </div>
        )}
        <div style={{textAlign: "center", color:  "white" }}>
            We <b>admire</b> you - digital nomads and long-term travelers - for all your bravery in deciding to explore the world's greatest wonders
        </div>
                   
    </footer>
    <div className="footer-bottom gray-light-bg" style={{padding: "8px"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-7">
                    <div className="copyright-wrap small-text">
                        <p className="mb-0">&copy; All rights reserved to YCOMMS, {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(Footer);
