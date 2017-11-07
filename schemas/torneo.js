const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

const torneoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
    },
    deporte: Schema.ObjectId,
    estado: {
        type: String,
        default: 'activo'
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