const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better'); 

const deporteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: false,
  },
  logo: {
    type:String,
    required: false,
  },
  estado: {
    type: String,
    required: true,
    default: 'activo'
  },
  torneos: [Schema.ObjectId],
});


const Deporte = conn.model('Deporte', deporteSchema);

module.exports = Deporte;