const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const torneoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
        default: 'activo'
    },
    cantJugadores: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    equipos: [Schema.ObjectId],
});


const Torneo = mongoose.model('Torneo', torneoSchema);

module.exports = Torneo;