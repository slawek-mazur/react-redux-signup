import express from 'express';
import bcrypt from 'bcrypt';
import validateInput from '../shared/validations/signup';

import User from '../models/user';

const router = express.Router();

router.post('/', (req, res) => {
  setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
      res.status(400).json(errors);
    } else {
      const { email, password } = req.body;
      let password_digest = bcrypt.hashSync(password, 10);

      User.forge({ email, password_digest: password_digest }, { hasTimestamps: true })
        .save()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).json(err));
    }
  }, 500);
});

export default router;