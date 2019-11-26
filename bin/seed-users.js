const mongoose = require('mongoose');
const User = require('./../Models/User');

mongoose
    .connect('mongodb://localhost:27017/users', {
        useNewUrlParser: true,
    })
    .then(() => insertFirst())
    .catch(err => console.log(err));


// STEP 0 - insert documents to ensure that collection exists
function insertFirst() {
    const pr1 = User.create({ name: 'Drop', password: 'Drop', email: 'Drop', quote: 'Drop', follows: 'Drop' });

    Promise.all([pr1])
        .then(() => {
            dropTheCollections();
        })
        .catch(err => console.log(err));
}

// STEP 1 - drop the existing collections
function dropTheCollections() {
    const pr1 = User.collection.drop();


    Promise.all([pr1])
        .then(() => {
            console.log('Collections dropped successfully');

            populateDatabase();
        })
        .catch(err => console.log(err));
}

function populateDatabase() {
    const users = [{
            name: 'John',
            password: 'fdsfsdfs',
            email: 'j@j.com',
            quote: 'haa',
            follows: []
        }

    ]
}