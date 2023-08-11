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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app