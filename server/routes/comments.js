var express = require('express');
var router = express.Router();
import Comment from '../models/comment';
import User from '../models/user';

router.post('/comments', function (req, res, next) {
  User
    .findOne({ 'username': req.body.username })
    .exec(function (err, user) {
      var comment = new Comment({
        comment: req.body.comment,
        user: user._id
      });
      comment.save((err, comment) => {
        res.json(comment);
      });

    });
});

router.get('/comments', function (req, res, next) {
  Comment
    .find({})
    .populate('user')
    .exec((err, comments) => {
      if ( err ) {
        return res.status(500).json({
          error: 'Could not get comments'
        });
      }
      res.json(comments);
    });
});

module.exports = router;
