const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

const PremioSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
    },
    valor: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
    },
    estado: {
        type: String,
        default: 'activo',
    },
});

const Premio = conn.model('Premio', PremioSchema);
module.exports = Premio;