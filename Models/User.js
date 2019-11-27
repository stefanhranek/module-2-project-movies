const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema( {
    username    : String,
    password    : String,
    email       : String,
    quote       : String,
    moviesToSee : [Number],
    seenMovies  : [Number],
    follows     : [],
    image: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;