const express = require('express');
const router = express.Router();
const Torneo = require('../schemas/torneo');
const baseUrl = '/api/torneo/';

let torneoJSON;

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.torneo)
        return res.send("Falta parametros");
    //torneoJSON = JSON.parse(req.body.torneo);
    torneoJSON = req.body.torneo;

    console.log("llegaste?");

    Torneo.create(torneoJSON, function (err, torneo) {
        if (err) {
            let error = new Error("Error al guardar el torneo");
            error.status = 401;
            console.log("ERROR", err);
            res.send(error);
        } else {
            console.log("GUARDADO OK", torneo);
            res.send("ok")
        }
    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Torneo.find({}, function (err, torneo) {
        if (err) {
            let error = new Error("Error al lista torneo");
            error.status = 402;
            res.send(error);
        } else {
            console.log("Lista torneo", torneo);
            res.send(torneo);
        }
    });
})

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.torneo)
        return res.send("Faltan Parametros");

    let torneoJSON = req.body.torneo;

    Torneo.update({ _id: torneoJSON._id }, { $set: torneoJSON }, function (err, torneo) {
        console.log("llego aca");
        if (err) {
            let error = new Error("Error al actualizar el torneo");
            error.status = 401;
            res.send(error);
        } else {
            console.log("Actualiza el torneo", torneo);
            res.send(torneo);
        }
    });
});

module.exports = router;