import React from 'react';
import SignupForm from "./SignupForm";
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupAction';

class SignupPage extends React.Component {

  render() {
    const {userSignupRequest} = this.props;
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
      </div>
    );
  }
}

export default connect(null, {userSignupRequest})(SignupPage);