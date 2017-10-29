const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

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


const Equipo = conn.model('Equipo', equipoSchema);

module.exports = Equipo;