import React from 'react';
import SignUp from "./SignUp";

class SignupPage extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default SignupPage;