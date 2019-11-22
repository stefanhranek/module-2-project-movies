const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UsersSchema = Schema( {
    username    : String,
    password    : String,
    email       : String,
    quote       : String,
    follows     : []
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;