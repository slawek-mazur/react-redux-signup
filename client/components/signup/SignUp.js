import React from 'react';

class SignUp extends React.Component {

  render() {
    return (
      <form>
        <h1>Join Our Community</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" className="form-control"/>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-large">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignUp;