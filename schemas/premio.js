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
});

var premio = this;

const Premio = conn.model('Premio', UserSchema);
module.exports = Premio;