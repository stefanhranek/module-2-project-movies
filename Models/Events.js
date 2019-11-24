const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EventsSchema = new Schema( {
    eventName       : String,
    eventDate       : Date,
    eventLocation   : String
});

const Events = mongoose.model('Events', EventsSchema);

module.exports = Events;