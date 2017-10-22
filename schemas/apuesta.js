const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

const ApuestaSchema = new mongoose.Schema({
    userID: {
        type: Schema.ObjectId,
        required: true
    },
    torneoID: {
        type: Schema.ObjectId,
        required: true
    },
    equipoID: {
        type: Schema.ObjectId,
        required: true
    },
    estado: {
        type: String,
        unique: true,
        trim: true,
        default: 'activo'
    },
    puntosApostados: {
        type: Number,
        unique: true,
        required: true,
    },
    valorApuesta: {
        type: Number,
        unique: true,
        required: true,
    },
});

var apuesta = this;

ApuestaSchema.methods.cambiarEstado = function (apuesta, callback) {
    //Apuesta.findOne({}) 
    Apuesta.update(apuesta, function(err, apuesta) {
        if(err)
        {
            return callback(err)
        } else if (!apuesta) {
            let err = new Error('Apuesta no encontrada');
            err.status = 401;
            return callback(err);
        }
        if (apuesta.estado === 'activa')
        {   
            console.log("La apuesta se encuentra activa, no hay que hacer nada");
        } else if(apuesta.estado === 'suspendida')
        {
          console.log("nada");
        } else if(apuesta.estado === 'finalizada')
        {
            console.log("La apuesta se encuentra finalizada, hay que asignar puntos al usuario");
            console.log("Hay que buscar el usuario, find y despues un update de los puntos"); 
        }
    });
}

const Apuesta = conn.model('Apuesta', UserSchema);
module.exports = Apuesta;