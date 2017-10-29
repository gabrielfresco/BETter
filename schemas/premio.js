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
    },
    valor: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: 'activo',
    },
});

var premio = this;

const Premio = conn.model('Premio', PremioSchema);
module.exports = Premio;