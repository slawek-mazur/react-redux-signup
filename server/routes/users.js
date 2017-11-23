import express from 'express';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
  setTimeout(() => {
    const {errors, isValid} = validateInput(req.body);

    if (!isValid) {
      res.status(400).json(errors);
    } else {
      const {email, password} = req.body;
      let password_digest = bcrypt.hashSync(password, 10);

      User.forge({email, password_digest}, {hasTimestamps: true})
        .save()
        .then(user => res.json({success: true}))
        .catch(err => res.status(500).json({error: err}));
    }
  }, 500);
});

export default router;