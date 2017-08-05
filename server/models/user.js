var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('User', UserSchema);