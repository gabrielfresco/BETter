const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deporteSchema = new Schema({
  nombre:  String,
  descripcion: String,
});

const Deporte = mongoose.model('Deporte', deporteSchema);

module.exports = Deporte;