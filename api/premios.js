const express = require('express');
const router = express.Router();
const Premio = require('../schemas/premio');
const baseUrl = '/api/premio/';

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.premio)
        return res.send("Falta parametros");

    let premio = JSON.parse(req.body.premio);

    Premio.create(premio, function (err, premio) {
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

//Baja logica
router.post(baseUrl + 'baja', function (req, res) {
    if (!req.body.id) {
        return res.send("Falta parametros");
    }

    Premio.update({ _id: req.body.id }, { $set: { estado: 'inactivo' } }, function (err, premio) {
        if (err) {
            let error = new Error("Error al actualizar el premio");
            error.status = 401;
            res.send(error);
        } else {
            res.send("premio Actualizado");
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

    if (!req.body)
        return res.send("Faltan Parametros");

    let premioJSON = JSON.parse(req.body.premio);

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