const express = require('express');
const router  = express.Router();
const User    = require('../../Models/User');
const bcrypt     = require('bcrypt');
const saltRounds = 10;


// POST - 
router.post('/signup', (req, res, next) => {
    const { username, password } = req.body;

    if (username === '' || password === '') {
        res.render('signup', {
            errorMessage: 'Provide username and password', 
        });
        return;
    }

    User.findOne( { username })
        .then(user => {
            if (User) {
                res.render('signup', {
                    errorMessage: 'Username already exists',
                });
                return;
            }

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync( password, salt );

            User.create( {username, password: hashedPassword} )
                .then( user => {
                    res.redirect('./../private/profile');
                })
                .catch(err => {
                    res.render('signup', {
                        errorMessage: 'Error while creating username.',
                    });
                });
        })
        .catch(err => console.log(err));
});



//POST auth/login
router.post('/login', (req,res,next) => {
    const {username, password: enteredPassword} = req.body;

    if ( username === '' || enteredPassword === '' ) {
        res.render('login', {errorMessage: 'Provide username and password' });
        return
    }

    User.findOne( { username })
        .then(userData => {
            if (!userData) {
                res.render('login', {
                    errorMessage: 'Username not found',
                });
                return;
            }

            const hashedPasswordFromDB = userData.password;  

            const passwordCorrect = bcrypt.compareSync(
                enteredPassword, 
                hashedPasswordFromDB,
            );

            if (passwordCorrect) {
                req.session.currentUser = userData;
                res.redirect('/../private/home');
            
            }
            else {
                res.render('login', {errorMessage: 'Password is incorrect'});
            }
        })
        .catch(err => console.log(err));

        
});

/// GET logout 
router.get('/logout', (req,res,next) => {
    req.session.destroy(err => {
        res.render('index', {message: 'Logged out ! Bye'})
    });
});

module.exports = router; 

















