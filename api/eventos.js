const express = require('express');
const router = express.Router();
const Evento = require('../schemas/evento');
const baseUrl = '/api/evento/';
let eventoJSON;

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.evento)
        res.send("Falta parametros");
    eventoJSON = JSON.parse(req.body.evento);

    
    Evento.create(eventoJSON, function (err, evento) {
        if (err) {
            let error = new Error("Error al guardar el evento");
            error.status = 401;
            console.log("ERROR", err);
            res.send(error);
        } else {
            console.log("GUARDADO OK", evento);
            res.send("ok");
        }

    })
});

//Baja logica
router.post(baseUrl + 'baja', function (req, res) {
    if (!req.body.id) {
        return res.send("Falta parametros");
    }

    Evento.update({ _id: req.body.id }, { $set: { estado: 'inactivo' } }, function (err, premio) {
        if (err) {
            let error = new Error("Error al actualizar el Evento");
            error.status = 401;
            return res.send(error);
        }
        res.send("Evento Actualizado");
    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Evento.find({}, function (err, eventos) {
        if (err) {
            let error = new Error("Error al lista eventos");
            error.status = 402;
            return res.send(error);
        }
        console.log("Lista eventos", eventos);
        res.send(eventos);

    });
})

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body) {
        res.send("Faltan Parametros");
    }

    eventoJSON = JSON.parse(req.body.evento);

    Evento.update({ _id: eventoJSON._id }, { $set: eventoJSON }, function (err, evento) {
        console.log("llego aca");
        if (err) {
            let error = new Error("Error al actualizar el evento");
            error.status = 401;
            return res.send(error);
        }
        console.log("Actualiza el evento", evento);
        res.send(evento);
    });
});

module.exports = router;