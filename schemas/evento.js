const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better'); 

const eventoSchema = new Schema({
  //idEquipo + valorApuesta
  resultado1: { 
    type: Object,
    required: true
  },
   resultado2: { 
     type: Object,
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
  deporte: {
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