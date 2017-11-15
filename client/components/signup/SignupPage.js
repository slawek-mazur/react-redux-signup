import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from "./SignupForm";
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupAction';
import {addFlashMessage} from '../../actions/flashMessages';

class SignupPage extends React.Component {

  render() {
    const {userSignupRequest, addFlashMessage} = this.props;
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default connect(null, {userSignupRequest, addFlashMessage})(SignupPage);