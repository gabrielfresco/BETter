const express = require('express');
const router = express.Router();
const Premio = require('../schemas/premio');
const baseUrl = '/api/premio/';

router.post(baseUrl + 'alta', function (req, res) {
    if (!req.body)
        res.send("Falta parametros");

    let premio = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        estado: req.body.estado
    }

//Alta
    Premio.create(premio, function (err, premio) {
        if (err) {
            let error = new Error("Error al guardar el premio");
            error.status = 401;
            console.log(err);
            return res.send(error);
        }
        res.send("Premio guardado");
    })
});

//Baja logica del estado
router.post(baseUrl + 'baja', function (req, res) {
    if (!req.body.id)
        res.send("Falta parametros");
    Premio.update({ _id: req.body.id}, { $set: {estado: 'inactivo'} } , function (err,premio) {
        if(err) {
            let error = new Error("Error al dar una baja logica al premio");
            error.status = 401;
            return res.send(error);
        }
        res.send("Premio Actualizado");
    })
});

//Modificar
router.post(baseUrl + 'modificar' , function (req, res){
    
    if(!req.body)
    {
        res.send("Faltan Parametros");
    }
    let premioJSON = JSON.parse(req.body.premio);
    
    Premio.update({ _id: premioJSON._id}, { $set: premioJSON}, function(err,premio)
    {
        console.log("llego aca");
        if(err){
            let error = new Error("Error al actualizar el premio");
            error.status = 401;
            return res.send(error);
        }
        console.log("Actualiza el premio", premio);
        res.send(premio);
    });
});

//Listar
router.get(baseUrl + 'getAll', function (req, res) {
    Premio.find({}, function (err, premio) {
        if (err) {
            let error = new Error("Error al lista premios");
            error.status = 402;
            return res.send(error);
        }
        console.log("Lista premios", premio);
        res.send(premio);

    });
})

module.exports = router;