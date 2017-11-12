const express = require('express');
const router = express.Router();
const User = require('../schemas/user');
const baseUrl = '/api/user/';

let userJSON;


router.post(baseUrl + 'register', function (req, res) {
    if (!req.body.user)
        return res.send("Falta parametros");
    //userJSON = JSON.parse(req.body.user);
    userJSON = req.body.user;

    User.create(userJSON, function (err, user) {
        if (err) {
            let error = new Error("Error al guardar el user");
            error.status = 401;
           // console.log("user",user);
            console.log("ERROR", err);
            res.send(error);
        } else {
            console.log("GUARDADO OK", user);
            res.send("ok")
        }
    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    User.find({}, function (err, user) {
        if (err) {
            let error = new Error("Error al lista user");
            error.status = 402;
            res.send(error);
        } else {
            console.log("Lista user", user);
            res.send(user);
        }
    });
})

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.user)
        return res.send("Faltan Parametros");

    //userJSON = JSON.parse(req.body.user);
    userJSON = req.body.user;

    User.update({ _id: userJSON._id }, { $set: userJSON }, function (err, user) {
        if (err) {
            console.log(err);
            let error = new Error("Error al actualizar el user");
            error.status = 401;
            res.send(error);
        } else {
            console.log("Actualiza el user", user);
            res.send(user);
        }
    });
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