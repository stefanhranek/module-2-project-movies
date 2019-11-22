const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const SeenSchema = Schema( {
    movieId         : String,
    seenDate        : Date,
    personalRating  : String
});

const Seen = mongoose.model('Seen', SeenSchema);

module.exports = Seen;