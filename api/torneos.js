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

//Baja logica
router.post(baseUrl + 'baja', function (req, res) {
    if (!req.body.id)
        res.send("Falta parametros");
    Torneo.update({ _id: req.body.id }, { $set: { estado: 'inactivo' } }, function (err, premio) {
        if (err) {
            let error = new Error("Error al actualizar el Torneo");
            error.status = 401;
            return res.send(error);
        }
        res.send("Torneo Actualizado");
    })
});


//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body) {
        res.send("Faltan Parametros");
    }
    let torneoJSON = JSON.parse(req.body.torneo);

    Torneo.update({ _id: torneoJSON._id }, { $set: torneoJSON }, function (err, torneo) {
        if (err) {
            let error = new Error("Error al actualizar el torneo");
            error.status = 401;
            return res.send(error);
        }
        console.log("Actualiza el torneo", torneo);
        res.send(torneo);
    });
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