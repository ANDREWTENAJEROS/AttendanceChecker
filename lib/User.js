var mongoose = ('mongoose');

var userSchema = new mongoose.Schema({
  email: {type: String , unique: true},
  password: {type: String},
  fullname: String


});

var User = mongoose.model('myuser', userSchema);
module.exports = Users;
