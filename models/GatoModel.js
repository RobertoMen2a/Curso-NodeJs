const mongoose = require('mongoose');
const { Schema } = mongoose;

const GatoSchema = new Schema({
  nombre: String,
  raza: String,
  color: String
});

const Gato = mongoose.model('gato', GatoSchema);

module.exports = Gato;
