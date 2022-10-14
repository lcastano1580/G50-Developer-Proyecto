//Importamos mongoose
const mongoose = require('mongoose');

let InscripcionSchema = new mongoose.Schema({
    id: Number,
    tipoDocumento: String,
    identificacion: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    correo: String,
    telefono: String,
    celular: String,
    linkConsignacion: String,
    codigoIcfes: String,
    estrato: String    
})

module.exports = mongoose.model('inscripcion', InscripcionSchema, 'Inscripciones');