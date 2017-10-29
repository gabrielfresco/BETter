const express = require('express');
const router = express.Router();
const Premio = require('../schemas/premio');
const baseUrl = '/api/premio/';
let premioJSON;

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.premio)
        return res.send("Falta parametros");
    premioJSON = JSON.parse(req.body.premio);

<<<<<<< HEAD
    let premio = req.body.premio;

    Premio.create(premio, function (err, premio) {
=======
    Premio.create(premioJSON, function (err, premio) {
>>>>>>> a95f044d2524deaa366a0bd448b9f31739947be8
        if (err) {
            let error = new Error("Error al guardar el premio");
            error.status = 401;
            console.log("ERROR", err);
            res.send(error);
        } else {
            console.log("GUARDADO OK", premio);
            res.send("ok")
        }

    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Premio.find({}, function (err, premio) {
        if (err) {
            let error = new Error("Error al lista premio");
            error.status = 402;
            res.send(error);
        } else {
            console.log("Lista premio", premio);
            res.send(premio);
        }
    });
})

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.premio)
        return res.send("Faltan Parametros");

    let premioJSON = req.body.premio;

    Premio.update({ _id: premioJSON._id }, { $set: premioJSON }, function (err, premio) {
        console.log("llego aca");
        if (err) {
            let error = new Error("Error al actualizar el premio");
            error.status = 401;
            res.send(error);
        } else {
            console.log("Actualiza el premio", premio);
            res.send(premio);
        }
    });
});

module.exports = router;