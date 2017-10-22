const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

const PremioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        unique: true,
    },
    valor: {
        type: Number,
        unique: true,
        required: true,
    },
    estado: {
        type: String,
        unique: true,
        default: 'activo',
    },
});

var premio = this;

const Premio = conn.model('Premio', PremioSchema);
module.exports = Premio;