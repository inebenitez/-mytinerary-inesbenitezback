import express from 'express';
import create from '../controllers/users/create.js'
import read from '../controllers/users/read.js'
import update from '../controllers/users/update.js'
import destroy from '../controllers/users/destroy.js'

let router = express.Router();

//CREATE
router.post('/',create);

//READ
router.get('/',read);

//UPDATE
router.put('/', update);

//DESTROY
router.delete('/', destroy)

export default router