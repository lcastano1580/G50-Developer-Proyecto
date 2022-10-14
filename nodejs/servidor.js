//console.log("Hola mundo desde nodejs")

const express = require('express');
const mongoose = require('mongoose');
const InscripcionSchema = require('./modelos/Inscripcion.js');

const app = express();
//Definimos las rutas
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//conexion a la base datos
mongoose.connect("mongodb+srv://proj_web:2208@clusterprojweb.zul78u7.mongodb.net/inscripciones?retryWrites=true&w=majority")


//Operaciones crud
router.get('/', (req, res) => {
    res.send("El inicio de mi API rest");
})

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
app.listen(3000, () => {
    console.log("servidor activo en el puerto 3000")
});