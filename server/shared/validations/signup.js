import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let validateInput = function (data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};

export default validateInput;