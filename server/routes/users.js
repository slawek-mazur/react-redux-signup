import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
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
}

router.post('/', (req, res) => {
  setTimeout(() => {
    const {errors, isValid} = validateInput(req.body);

    if (!isValid) {
      res.status(400).json(errors);
    } else {
      res.status(200);
    }
  }, 5000);
});

export default router;