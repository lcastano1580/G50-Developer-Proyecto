//console.log("Hola mundo desde nodejs")
// paso 1 -   
const express = require('express');
// paso 4 - importamos el mongoose
const mongoose = require('mongoose');
// paso 10 - importamos el schema
const InscripcionSchema = require('./modelos/Inscripcion.js');
// paso 2
const app = express();
// paso 6 - Definimos las rutas
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//paso 5 - conexion a la base datos y probamos 
mongoose.connect("mongodb+srv://proj_web:2208@clusterprojweb.zul78u7.mongodb.net/ActividadesBD?retryWrites=true&w=majority")


// paso 11 - Operaciones crud
router.get('/', (req, res) => {
    res.send("El inicio de mi API rest");
})

// paso 13 - lectura de datos
router.get('/inscripcion', (req, res) => {
    InscripcionSchema.find(function(err, datos) {
        if(err){
            console.log("Error en la lectura de la inscripcion");
        }else{
            res.send(datos);
        }
    })
});

// paso 12 - guardado de datos
router.post('/inscripcion', (req, res) => {
    let nuevaInscripcion = new InscripcionSchema({
        id: req.body.id,
        tipoDocumento: req.body.tipodocumento,
        identificacion: req.body.identificacion,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        telefono: req.body.telefono,
        celular: req.body.celular,
        linkConsignacion: req.body.link,
        codigoIcfes: req.body.codigoIcfes,
        estrato: req.body.estrato
    });

    nuevaInscripcion.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Inscripcion guardada exitosamente")
    })
});

app.use(router);

// paso 3 - coorremos el servidor 
app.listen(3000, () => {
    console.log("servidor activo en el puerto 3000")
});