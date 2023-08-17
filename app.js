// IMPORTS
import 'dotenv/config.js'
import __dirname from './utils.js'
import createError from 'http-errors';          // crea errores
import express from  'express';                 // provee metodos y propiedades
import path from 'path';                        // concoer ubicacion de servidor
import logger from 'morgan';                    // registrar cada peticion
import indexRouter from './routes/index.js'     // llama a todos los otros recursos

let app = express();                            // ejecutando modulo de express

// VIEW ENGINE SETUP
// SET metodo para SETear algo 
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// MIDDLEWARES
// USE metodo necesario para que la app use la funcion con cada solicitud/peticion
app.use(logger('dev'));                                   // obliga al servidior a registar peticion con modelulo logger morgan
app.use(express.json());                                  // manipular/leer json
app.use(express.urlencoded({ extended: false }));         // leer params/queries
app.use(express.static(path.join(__dirname, 'public')));  // acceder los archivos estaticos de public

// ROUTER
app.use('/api', indexRouter);                                // que use las rutas del enrutador principal con "/api"

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req.url);
  console.log(req.method);
  return res.status(404).json({
    success: false,
    message: 'not found '+req.method+' '+req.url,
    response: null
  })
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  return res.status(500).json({
    success: false,
    messege: err.message,
    response: null
  })
});

export default app