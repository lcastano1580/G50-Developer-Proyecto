// paso 7 - Importamos mongoose y la guardamos en una constante
const mongoose = require('mongoose');

// paso 8 - definimos una variable let
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
// paso 8 - exponemos al exterior 
module.exports = mongoose.model('inscripcion', InscripcionSchema, 'Inscripciones');