const express = require('express');
const router = express.Router();
const Deporte = require('../schemas/deporte');
const baseUrl = '/api/deporte/';
let deporteJSON;
const estadoActivo = 'activo';

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.deporte)
        res.send("Falta parametros");
    //deporteJSON = JSON.parse(req.body.deporte);
    deporteJSON = req.body.deporte;
    
    Deporte.create(deporteJSON, function (err, deporte) {
        if (err) {
            let error = new Error("Error al guardar el deporte");
            error.status = 401;
            console.log("ERROR", err);
            res.send(error);
        } else {
            console.log("GUARDADO OK", deporte);
            res.send("ok");
        }

    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Deporte.find({}, function (err, deportes) {
        if (err) {
            let error = new Error("Error al lista deportes");
            error.status = 402;
            return res.send(error);
        }
        console.log("Lista deportes", deportes);
        res.send(deportes);

    });
})

router.get(baseUrl + 'getAllActives', function (req, res) {
    Deporte.find({estado: estadoActivo}, function (err, deportes) {
        if (err) {
            let error = new Error("Error al lista deportes");
            error.status = 402;
            return res.send(error);
        }
        console.log("Lista deportes", deportes);
        res.send(deportes);

    });
})


//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.deporte) {
        res.send("Faltan Parametros");
    }
    
    let deporteJSON = req.body.deporte;

    Deporte.update({ _id: deporteJSON._id }, { $set: deporteJSON }, function (err, deporte) {
        console.log("llego aca");
        if (err) {
            let error = new Error("Error al actualizar el deporte");
            error.status = 401;
            return res.send(error);
        }
        console.log("Actualiza el deporte", deporte);
        res.send(deporte);
    });
});

module.exports = router;