import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();

router.post('/', (req, res) => {
  setTimeout(() => {
    const {errors, isValid} = validateInput(req.body);

    if (!isValid) {
      res.status(400).json(errors);
    } else {
      res.status(200).json({ success: true });
    }
  }, 500);
});

export default router;