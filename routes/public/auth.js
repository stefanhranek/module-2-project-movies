const express = require('express');
const router = express.Router();
const User = require('../../Models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


// POST - auth/signup
router.post('/signup', (req, res, next) => {
    const { username, password } = req.body;
    // console.log();

    if (username === '' || password === '') {
        res.render('signup', { 
            layout: 'layoutPublic.hbs',
            errorMessage: 'Provide username and password',
        });
        return;
    }

    User.findOne({ username })
        .then(user => {
            if (user) {
                res.render('signup', {
                    layout: 'layoutPublic.hbs',
                    errorMessage: 'Username already exists',
                });
                return;
            }

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            User.create({ username, password: hashedPassword })
                .then(user => {
                    req.session.currentUser = user;
                    res.redirect('./../private/profile');
                })
                .catch(err => {
                    res.render('signup', {
                        layout: 'layoutPublic.hbs',
                        errorMessage: 'Error while creating username.',
                    });
                });
        })
        .catch(err => console.log(err));
});



//POST auth/login
router.post('/login', (req, res, next) => {
    const { username, password: enteredPassword } = req.body;

    if (username === '' || enteredPassword === '') {
        res.render('login', {
            layout: 'layoutPublic.hbs',
            errorMessage: 'Provide username and password' });
        return
    }

    User.findOne({ username })
        .then(user => {
            if (!user) {
                res.render('login', {
                    layout: 'layoutPublic.hbs',
                    errorMessage: 'Username not found',
                });
                return;
            }

            const hashedPasswordFromDB = user.password;

            const passwordCorrect = bcrypt.compareSync(
                enteredPassword,
                hashedPasswordFromDB,
            );

            if (passwordCorrect) {
                console.log(user);
                console.log('THIS IS THE SESSION', req.session);

                req.session.currentUser = user;
                res.redirect('/../private/home');

            } else {
                res.render('login', {
                    layout: 'layoutPublic.hbs',
                    errorMessage: 'Password is incorrect' });
            }
        })
        .catch(err => console.log(err));


});

/// GET logout 
router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
        res.render('index', { message: 'Logged out ! Bye' })
    });
});

module.exports = router;