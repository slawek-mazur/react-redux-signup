import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signup';

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

  isValid() {
    const {errors, isValid} = validateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({errors: {}, isLoading: true});
      this.props.userSignupRequest(this.state)
        .then((response) => {
            console.info(response);
            this.setState({isLoading: false});
            this.props.history.push('/');
          }
        )
        .catch((error) => {
            console.error(error);
            this.setState({errors: error.response.data, isLoading: false});
          }
        );
    }
  }

  render() {
    const {errors} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community</h1>
        <TextFieldGroup
          field="email"
          value={this.state.email}
          label="Email"
          type="email"
          error={errors.email}
          onChange={this.onChange}/>

        <TextFieldGroup
          field="password"
          value={this.state.password}
          label="Password"
          type="password"
          error={errors.password}
          onChange={this.onChange}/>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-large">Sign Up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(SignupForm);