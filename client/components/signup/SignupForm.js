import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({errors: {}, isLoading: true});
    this.props.userSignupRequest(this.state)
      .then((response) => console.info(response))
      .catch((error) => {
          this.setState({errors: error.response.data});
        }
      )
      .then(() => this.setState({isLoading: false}));
  }

  render() {
    const {errors} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community</h1>
        <div className={classnames('form-group', {'has-error': errors.email})}>
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="email" name="email" className="form-control"/>
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>
        <div className={classnames('form-group', {'has-error': errors.password})}>
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password" name="password" className="form-control"/>
          {errors.password && <span className="help-block text-danger">{errors.password}</span>}
        </div>
        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-large">Sign Up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;