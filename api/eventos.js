const express = require('express');
const router = express.Router();
const Evento = require('../schemas/evento');
const mongoose = require('mongoose');
const baseUrl = '/api/evento/';
let eventoJSON;

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.evento)
        res.send("Falta parametros");

    eventoJSON = req.body.evento;
    //eventoJSON = JSON.parse(req.body.evento);

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

router.post(baseUrl + 'getById', function (req, res) {
    Evento.aggregate([{
        $match: {
            _id: mongoose.Types.ObjectId(req.body.id)
        }
    }, {
        $lookup: {
            from: "torneos",
            localField: "torneo",
            foreignField: "_id",
            as: "torneo"
        }
    }, {
        $unwind: {
            path: "$torneo",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $lookup: {
            from: "equipos",
            localField: "equipo1",
            foreignField: "_id",
            as: "equipo1"
        }
    }, {
        $unwind: {
            path: "$equipo1",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $lookup: {
            from: "equipos",
            localField: "equipo2",
            foreignField: "_id",
            as: "equipo2"
        }
    }, {
        $unwind: {
            path: "$equipo2",
            preserveNullAndEmptyArrays: true
        }
    }], function (err, evento) {
        if (err) {
            let error = new Error("Error al buscar evento");
            error.status = 402;
            res.send(error);
        } else {
            console.log("evento", evento);
            res.send(evento);
        }
    });
});

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.evento) {
        res.send("Faltan Parametros");
    }

    //eventoJSON = req.body.evento;
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