const express = require('express');
const router = express.Router();
const Apuesta = require('../schemas/apuesta');
const baseUrl = '/api/apuesta/';
let apuestaJSON;

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.apuesta)
        res.send("Falta parametros");
    apuestaJSON = JSON.parse(req.body.apuesta);

    Apuesta.create(apuestaJSON, function (err, apuesta) {
        if (err) {
            let error = new Error("Error al guardar el apuesta");
            error.status = 401;
            console.log("ERROR", err);
            res.send(error);
        } else {
            console.log("GUARDADO OK", apuesta);
            res.send("ok");
        }
    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Apuesta.find({}, function (err, apuestas) {
        if (err) {
            let error = new Error("Error al lista apuestas");
            error.status = 402;
            res.send(error);
        } else {
            console.log("Lista apuestas", apuestas);
            res.send(apuestas);
        }
    });
})

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.apuesta) {
        res.send("Faltan Parametros");
    }
    
    apuestaJSON = JSON.parse(req.body.apuesta);

    Apuesta.update({ _id: apuestaJSON._id }, { $set: apuestaJSON }, function (err, apuesta) {
        console.log("llego aca");
        if (err) {
            let error = new Error("Error al actualizar el apuesta");
            error.status = 401;
            res.send(error);
        } else {
            console.log("Actualiza el apuesta", apuesta);
            res.send(apuesta);
        }
    });
});

module.exports = router;