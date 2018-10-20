var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');