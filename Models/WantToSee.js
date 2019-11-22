const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const WantToSeeSchema = Schema( {
    movieId: String
});

const WantToSee = mongoose.model('WantToSee', WantToSeeSchema);

module.exports = WantToSee;