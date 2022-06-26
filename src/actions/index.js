import {
  SUBSCRIBE,
  SUBMIT_CONTACT,
  POST_QUOTE,
  POST_LOGIN,
  POST_SIGNUP,
  POST_RESET_PASSWORD,
  GET_SEARCH,
  POST_COMMENT,
} from "../constants/types.js";

export const subscribe = email => {
 
  var Parse = require('parse/node');

  Parse.initialize("dQi3fSvSgH1t7eVPk1kynpCey4fKmgbXoRf78TZ5","MkcPFjAwCrLYN0oZKyJXXQlcRP48yA0TzcRVIchb"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = 'https://parseapi.back4app.com/'
  
  const waitlisted = new Parse.Object("waitlist");
  
	waitlisted.set("email", email.email);

	try {
	  	waitlisted.save()
      
      return {
        type: SUBSCRIBE,
        email,
        tried: true 
      }
	  } catch(error) {
      return {
        tried: false
      }
	  }

 
 
};

export const submitContact = contactData => {
  return {
    type: SUBMIT_CONTACT,
    contactData,
  };
};

export const postQuote = quoteData => {
  return {
    type: POST_QUOTE,
    quoteData,
  };
};

export const login = loginData => {
  return {
    type: POST_LOGIN,
    loginData,
  };
};

export const signUp = signUpData => {
  return {
    type: POST_SIGNUP,
    signUpData,
  };
};

export const resetPassword = resetPasswordData => {
  return {
    type: POST_RESET_PASSWORD,
    resetPasswordData,
  };
};

export const search = searchData => {
  return {
    type: GET_SEARCH,
    searchData,
  };
};

export const comment = commentData => {
  return {
    type: POST_COMMENT,
    commentData,
  };
};
