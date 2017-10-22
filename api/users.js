const express = require('express');
const router = express.Router();
const User = require('../schemas/user');

router.post('/register', function (req, res) {
    console.log("LLEGO", req.body)
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
        let userData = {
            email: req.body.email,
            username: req.body.username,
            birthDate: new Date(),//req.body.birthDate,
            password: req.body.password,
        }

        console.log("TODOS PARAMS SETTEADOS")
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
            if (err) {
                console.log("ERROR", err)
                //return next(err)
            } else {
                console.log("user", user)
                return res.redirect('/');
            }
        });
    }
});


router.post('/login', function (req, res) {
    if (req.body.email &&
        req.body.password) {

        User.authenticate(req.body.email, req.body.password, function (err, user) {
            console.log("ERROR AUTH", err)
            if (err)
                res.send(err)
            else
                res.redirect('/')
            console.log("AUTH OK", res);
        });
    }
});

module.exports = router;