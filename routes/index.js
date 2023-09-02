import express from 'express'; //el enrutador principal llama los recursos y los enruta
import userRouter from './users.js';
import cityRouter from './cities.js';
import itineraryRouter from './itineraries.js'

let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index' });
});                                             //obligo al enrutador a usar las rutas del enrutador de user
router.use('/users', userRouter);               //router.use acepta como minimo 2 parametros para poder enrutar correctamente
router.use('/cities', cityRouter);               //1 la palabra y 2 el enrutador que tengo que conectar
router.use("/itineraries", itineraryRouter);


export default router;
