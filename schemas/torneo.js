const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

const torneoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
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


const Torneo = conn.model('Torneo', torneoSchema);

module.exports = Torneo;