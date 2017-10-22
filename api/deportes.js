const express = require('express');
const router = express.Router();
const Deporte = require('../schemas/deporte');
const baseUrl = '/api/deporte/';

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body)
        res.send("Falta parametros");

    let deporte = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        torneos: JSON.parse(req.body.torneos)
    }

    Deporte.create(deporte, function (err, deporte) {
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

//Baja logica
router.post(baseUrl + 'baja', function (req, res) {
    if (!req.body.id)
        res.send("Falta parametros");
        Deporte.update({ _id: req.body.id }, { $set: { estado: 'inactivo' } }, function (err, premio) {
        if (err) {
            let error = new Error("Error al actualizar el Deporte");
            error.status = 401;
            return res.send(error);
        }
        res.send("Deporte Actualizado");
    })
});

router.get(baseUrl + 'getAll', function (req, res) {
    Deporte.find({}, function (err, deportes) {
        if (err) {
            let error = new Error("Error al lista deportes");
            error.status = 402;
            res.send(error);
        }
        console.log("Lista deportes", deportes);
        res.send(deportes);

    });
})

//Modificar
router.post(baseUrl + 'modificar' , function (req, res){
    
    if(!req.body)
    {
        res.send("Faltan Parametros");
    }
    let deporteJSON = JSON.parse(req.body.deporte);
    
    Deporte.update({ _id: deporteJSON._id}, { $set: deporteJSON}, function(err,deporte)
    {
        console.log("llego aca");
        if(err){
            let error = new Error("Error al actualizar el deporte");
            error.status = 401;
            return res.send(error);
        }
        console.log("Actualiza el deporte", deporte);
        res.send(deporte);
    });
});

module.exports = router;