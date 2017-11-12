const express = require('express');
const router = express.Router();
const Equipo = require('../schemas/equipo');
const baseUrl = '/api/equipo/';
let equipoJSON;

//Atributos: nombre, estado, imagen     

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body.equipo)
        return res.send("Falta parametros");

    let equipo = req.body.equipo;
    let toUpload = req.body.file;
    //let equipo = JSON.parse(req.body.equipo);

    Equipo.create(equipo, function (err, equipo) {
        if (err) {
            let error = new Error("Error al guardar el equipo");
            error.status = 401;
            console.log("ERROR", err);
            res.send(error);
        } else {           
            res.send(equipo);
        }
    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Equipo.find({}, function (err, equipo) {
        if (err) {
            let error = new Error("Error al lista equipo");
            error.status = 402;
            res.send(error);
        } else {
            console.log("Lista equipo", equipo);
            res.send(equipo);
        }
    });
})

//Modificar
router.post(baseUrl + 'modificar', function (req, res) {

    if (!req.body.equipo) {
        res.send("Faltan Parametros");
    }
    let equipoJSON = req.body.equipo;

    Equipo.update({ _id: equipoJSON._id }, { $set: equipoJSON }, function (err, equipo) {
        console.log("llego aca");
        if (err) {
            let error = new Error("Error al actualizar el equipo");
            error.status = 401;
            res.send(error);
        } else {
            console.log("Actualiza el equipo", equipo);
            res.send(equipo);
        }
    });
});

module.exports = router;