import * as express from 'express';
import User from '../models/user';

let router = express.Router();

router.get('/', (req, res) => {
  User.find().then((users) => {
    res.json(users);
  }).catch((err) => {
    res.json(err);
  });
});

export default router;
