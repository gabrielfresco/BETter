const express = require('express');
const router = express.Router();
const Torneo = require('../schemas/torneo');
const baseUrl = '/api/torneo/';

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body)
        res.send("Falta parametros");

    let torneo = {
        nombre: req.body.nombre,
        cantJugadores: req.body.cantJugadores,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        equipos: JSON.parse(req.body.equipos)
    }

    Torneo.create(torneo, function (err, torneo) {
        if (err) {
            let error = new Error("Error al guardar el torneo");
            error.status = 401;
            console.log("ERROR", err);
            return res.send(error);
        }
        console.log("GUARDADO OK", torneo);
        res.send("ok");

    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Torneo.find({}, function (err, torneos) {
        if (err) {
            let error = new Error("Error al lista torneos");
            error.status = 402;
            res.send(error);
        }
        console.log("Lista torneos", torneos);
        res.send(torneos);

    });
})

module.exports = router;