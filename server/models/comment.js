var mongoose = require('mongoose');
import timestamps from 'mongoose-timestamp';
var Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  user : {
    type : Schema.Types.ObjectId,
    ref  : 'User',
    required: true
  }
});

CommentSchema.plugin(timestamps);

export default mongoose.model('Comment', CommentSchema);