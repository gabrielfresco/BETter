const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        default: 'activo'
    },
    imagen: {
        data: Buffer,
        contentType: String
    }
});


const Equipo = mongoose.model('Equipo', deporteSchema);

module.exports = Equipo;