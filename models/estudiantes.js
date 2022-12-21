const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstudianteSchema = new Schema({
  ci: { type: Number, required: true },
  nombre: { type: String, required: true },
  gradoacademico:{ type: String, required: true }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
