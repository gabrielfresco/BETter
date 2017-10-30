const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better');

const eventoSchema = new Schema({
  //IdEquipo + valorApuesta
  equipo1: {
    type: Schema.ObjectId,
    require: true
  },
  equipo2: {
    type: Schema.ObjectId,
    require: true
  },
  valorEquipo1: {
    type: Number,
    required: true
  },
  valorEquipo2: {
    type: Number,
    required: true
  },
  empate: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true,
    default: 'activo'
  },
  torneo: {
    type: Schema.ObjectId,
    require: true
  },
  fecha: {
    type: Date,
    required: true
  }

});

const Evento = conn.model('Evento', eventoSchema);

module.exports = Evento;