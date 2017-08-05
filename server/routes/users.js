var express = require('express');
var router = express.Router();
import User from '../models/user';

/* GET users listing. */
router.get('/user', function(req, res, next) {
  User
    .find({})
    .populate('friends')
    .exec((err, users) => {
      if (err) {
        return res.status(500).json({
          error : 'Could not retrieve user'
        });
      }
      res.json(users);
    });
});

// internal endpoint, assuming the list of users and his friends are created statically.

router.post('/user', function(req, res, next) {
  // assuming the user is already there. no validations if no user is found.
  /*const friends = req.body.friends;

  const promises = friends.map(({username}) => {
    return new Promise((res, rej) => {
      User
        .findOne({ 'username': username })
        .exec(function (err, user) {
          if(err) {
            return rej();
          }
          return res(user._id);
        });
    });
  });

  Promise.all(promises).then((value) => {
    console.log(values);
  });*/

  var user = new User({
    username: req.body.username
  });

  user.save((err, user) => {
    console.log(err);
    console.log(user);
  });
  res.send('respond with a resource');
});

module.exports = router;
